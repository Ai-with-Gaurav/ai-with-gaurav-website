import { createServiceClient } from "@/lib/supabase";
import { generateEmbeddings } from "./embeddings";

interface DocumentChunk {
  content: string;
  metadata: Record<string, unknown>;
}

export function splitIntoChunks(
  text: string,
  chunkSize = 500,
  chunkOverlap = 50
): string[] {
  const sentences = text.split(/(?<=[.!?])\s+/);
  const chunks: string[] = [];
  let currentChunk = "";

  for (const sentence of sentences) {
    if ((currentChunk + " " + sentence).length > chunkSize && currentChunk) {
      chunks.push(currentChunk.trim());
      const words = currentChunk.split(" ");
      const overlapWords = words.slice(-Math.ceil(chunkOverlap / 5));
      currentChunk = overlapWords.join(" ") + " " + sentence;
    } else {
      currentChunk = currentChunk ? currentChunk + " " + sentence : sentence;
    }
  }

  if (currentChunk.trim()) {
    chunks.push(currentChunk.trim());
  }

  return chunks;
}

export async function ingestDocuments(documents: DocumentChunk[]) {
  const supabase = createServiceClient();
  if (!supabase) {
    throw new Error("Supabase not configured. Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.");
  }

  const texts = documents.map((doc) => doc.content);
  const embeddings = await generateEmbeddings(texts);

  const rows = documents.map((doc, i) => ({
    content: doc.content,
    metadata: doc.metadata,
    embedding: embeddings[i],
  }));

  for (let i = 0; i < rows.length; i += 100) {
    const batch = rows.slice(i, i + 100);
    const { error } = await supabase.from("documents").insert(batch);

    if (error) {
      console.error(`Error inserting batch ${i}:`, error);
      throw error;
    }
  }

  return { inserted: rows.length };
}
