-- ===========================================
-- Supabase Setup for AI with Gaurav
-- ===========================================
-- Run this in your Supabase SQL Editor

-- 1. Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- 2. Documents table (for RAG)
CREATE TABLE IF NOT EXISTS documents (
  id BIGSERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  metadata JSONB DEFAULT '{}',
  embedding VECTOR(1536),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Similarity search function
CREATE OR REPLACE FUNCTION match_documents(
  query_embedding VECTOR(1536),
  match_count INT DEFAULT 5,
  match_threshold FLOAT DEFAULT 0.7
)
RETURNS TABLE (
  id BIGINT,
  content TEXT,
  metadata JSONB,
  similarity FLOAT
)
LANGUAGE plpgsql
AS $$
BEGIN
  RETURN QUERY
  SELECT
    d.id,
    d.content,
    d.metadata,
    1 - (d.embedding <=> query_embedding) AS similarity
  FROM documents d
  WHERE 1 - (d.embedding <=> query_embedding) > match_threshold
  ORDER BY d.embedding <=> query_embedding
  LIMIT match_count;
END;
$$;

-- 4. Index for faster vector search
CREATE INDEX IF NOT EXISTS documents_embedding_idx
  ON documents
  USING ivfflat (embedding vector_cosine_ops)
  WITH (lists = 100);

-- 5. Contacts table (for contact form)
CREATE TABLE IF NOT EXISTS contacts (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  budget TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. Feedback table (for reaction widget)
CREATE TABLE IF NOT EXISTS feedback (
  id BIGSERIAL PRIMARY KEY,
  reaction TEXT NOT NULL,
  page TEXT DEFAULT '/',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. Chat transcripts table (optional)
CREATE TABLE IF NOT EXISTS chat_transcripts (
  id BIGSERIAL PRIMARY KEY,
  session_id TEXT NOT NULL,
  messages JSONB NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. Row Level Security (RLS)
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE feedback ENABLE ROW LEVEL SECURITY;
ALTER TABLE chat_transcripts ENABLE ROW LEVEL SECURITY;

-- Allow service role full access
CREATE POLICY "Service role full access on documents" ON documents
  FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Service role full access on contacts" ON contacts
  FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Service role full access on feedback" ON feedback
  FOR ALL USING (true) WITH CHECK (true);

CREATE POLICY "Service role full access on chat_transcripts" ON chat_transcripts
  FOR ALL USING (true) WITH CHECK (true);

-- Allow anonymous inserts for contact form and feedback
CREATE POLICY "Allow anonymous insert on contacts" ON contacts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow anonymous insert on feedback" ON feedback
  FOR INSERT WITH CHECK (true);
