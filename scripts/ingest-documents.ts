/**
 * RAG Document Ingestion Script
 *
 * Run with: npx tsx scripts/ingest-documents.ts
 *
 * Prerequisites:
 * 1. Supabase project with pgvector extension enabled
 * 2. Documents table created (see SQL below)
 * 3. Environment variables set in .env.local
 *
 * SQL to set up Supabase:
 *
 * -- Enable pgvector
 * CREATE EXTENSION IF NOT EXISTS vector;
 *
 * -- Create documents table
 * CREATE TABLE documents (
 *   id BIGSERIAL PRIMARY KEY,
 *   content TEXT,
 *   metadata JSONB,
 *   embedding VECTOR(1536)
 * );
 *
 * -- Create similarity search function
 * CREATE OR REPLACE FUNCTION match_documents(
 *   query_embedding VECTOR(1536),
 *   match_count INT DEFAULT 5,
 *   match_threshold FLOAT DEFAULT 0.7
 * )
 * RETURNS TABLE (
 *   id BIGINT,
 *   content TEXT,
 *   metadata JSONB,
 *   similarity FLOAT
 * )
 * LANGUAGE plpgsql
 * AS $$
 * BEGIN
 *   RETURN QUERY
 *   SELECT
 *     d.id,
 *     d.content,
 *     d.metadata,
 *     1 - (d.embedding <=> query_embedding) AS similarity
 *   FROM documents d
 *   WHERE 1 - (d.embedding <=> query_embedding) > match_threshold
 *   ORDER BY d.embedding <=> query_embedding
 *   LIMIT match_count;
 * END;
 * $$;
 *
 * -- Create index for faster similarity search
 * CREATE INDEX ON documents
 *   USING ivfflat (embedding vector_cosine_ops)
 *   WITH (lists = 100);
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { splitIntoChunks, ingestDocuments } from "../src/lib/rag/ingest";
import { services } from "../src/data/services";
import { faqs } from "../src/data/faq";

async function main() {
  console.log("Starting document ingestion...\n");

  const allChunks: { content: string; metadata: Record<string, unknown> }[] = [];

  // 1. Ingest blog posts
  const blogDir = path.join(process.cwd(), "content", "blog");
  if (fs.existsSync(blogDir)) {
    const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));
    for (const file of files) {
      const content = fs.readFileSync(path.join(blogDir, file), "utf-8");
      const { data, content: body } = matter(content);
      const chunks = splitIntoChunks(body);
      chunks.forEach((chunk) => {
        allChunks.push({
          content: chunk,
          metadata: { type: "blog", title: data.title, slug: file.replace(".mdx", "") },
        });
      });
      console.log(`  Blog: ${data.title} → ${chunks.length} chunks`);
    }
  }

  // 2. Ingest services
  for (const service of services) {
    allChunks.push({
      content: `Service: ${service.title}. ${service.description}. Technologies: ${service.tags.join(", ")}.`,
      metadata: { type: "service", title: service.title },
    });
  }
  console.log(`  Services: ${services.length} entries`);

  // 3. Ingest FAQs
  for (const faq of faqs) {
    allChunks.push({
      content: `Q: ${faq.question}\nA: ${faq.answer}`,
      metadata: { type: "faq", question: faq.question },
    });
  }
  console.log(`  FAQs: ${faqs.length} entries`);

  // 4. Ingest about info
  allChunks.push({
    content: `Gaurav is an AI Solutions Architect specializing in building production AI systems. He offers services including AI chatbot development, voice AI assistants, RAG system architecture, workflow automation with n8n, full-stack web development, AI consulting, social media automation, custom LLM integrations, and data pipeline & analytics. His tech stack includes Python, TypeScript, Next.js, React, Node.js, LangChain, OpenAI API, Claude API, Vapi, n8n, Supabase, PostgreSQL, Docker, and AWS.`,
    metadata: { type: "about" },
  });

  allChunks.push({
    content: `Pricing: Projects start from $2,000 for simple integrations. Typical chatbot costs $2k-$5k. Full RAG systems cost $5k-$15k. Enterprise solutions are custom quoted. Retainer plans are available for ongoing support and development.`,
    metadata: { type: "pricing" },
  });

  console.log(`\nTotal chunks to ingest: ${allChunks.length}`);

  // Ingest all
  try {
    const result = await ingestDocuments(allChunks);
    console.log(`\nSuccessfully ingested ${result.inserted} documents!`);
  } catch (error) {
    console.error("\nIngestion failed:", error);
    process.exit(1);
  }
}

main();
