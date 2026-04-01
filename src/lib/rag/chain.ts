import { retrieveDocuments } from "./retriever";

export async function queryWithRAG(question: string): Promise<{
  context: string;
  sources: { content: string; metadata: Record<string, unknown> }[];
}> {
  const documents = await retrieveDocuments(question);

  const context = documents
    .map((doc) => doc.content)
    .join("\n\n---\n\n");

  const sources = documents.map((doc) => ({
    content: doc.content.slice(0, 200) + "...",
    metadata: doc.metadata,
  }));

  return { context, sources };
}

export function buildRAGPrompt(question: string, context: string): string {
  return `Based on the following context from our knowledge base, answer the user's question accurately.
If the context doesn't contain enough information to fully answer, say what you can based on the context and acknowledge what you're unsure about.
Always be helpful and suggest contacting Gaurav directly for detailed or custom inquiries.

Context:
${context}

Question: ${question}`;
}
