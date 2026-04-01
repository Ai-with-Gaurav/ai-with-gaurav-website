import { streamText } from "ai";
import { createGroq } from "@ai-sdk/groq";
import { queryWithRAG, buildRAGPrompt } from "@/lib/rag/chain";

const groq = createGroq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: Request) {
  const { question } = await req.json();

  if (!question || typeof question !== "string") {
    return Response.json({ error: "Question is required" }, { status: 400 });
  }

  const { context, sources } = await queryWithRAG(question);

  if (!context) {
    return Response.json({
      answer:
        "I couldn't find specific information about that in my knowledge base. Please contact Gaurav directly for more details.",
      sources: [],
    });
  }

  const prompt = buildRAGPrompt(question, context);

  const result = streamText({
    model: groq("llama-3.3-70b-versatile"),
    prompt,
    maxOutputTokens: 500,
  });

  return result.toTextStreamResponse({
    headers: {
      "X-Sources": JSON.stringify(sources),
    },
  });
}
