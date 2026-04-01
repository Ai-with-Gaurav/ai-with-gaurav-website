import { OpenAIEmbeddings } from "@langchain/openai";

let embeddingsInstance: OpenAIEmbeddings | null = null;

export function getEmbeddings() {
  if (!embeddingsInstance) {
    embeddingsInstance = new OpenAIEmbeddings({
      openAIApiKey: process.env.OPENAI_API_KEY,
      modelName: "text-embedding-3-small",
    });
  }
  return embeddingsInstance;
}

export async function generateEmbedding(text: string): Promise<number[]> {
  const embeddings = getEmbeddings();
  return embeddings.embedQuery(text);
}

export async function generateEmbeddings(texts: string[]): Promise<number[][]> {
  const embeddings = getEmbeddings();
  return embeddings.embedDocuments(texts);
}
