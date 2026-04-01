import { createServiceClient } from "@/lib/supabase";
import { generateEmbedding } from "./embeddings";

interface DocumentMatch {
  id: number;
  content: string;
  metadata: Record<string, unknown>;
  similarity: number;
}

export async function retrieveDocuments(
  query: string,
  matchCount = 5,
  matchThreshold = 0.7
): Promise<DocumentMatch[]> {
  const supabase = createServiceClient();
  if (!supabase) return [];

  const embedding = await generateEmbedding(query);

  const { data, error } = await supabase.rpc("match_documents", {
    query_embedding: embedding,
    match_count: matchCount,
    match_threshold: matchThreshold,
  });

  if (error) {
    console.error("Error retrieving documents:", error);
    return [];
  }

  return data || [];
}
