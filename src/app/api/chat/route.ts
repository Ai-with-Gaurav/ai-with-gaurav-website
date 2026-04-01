import { streamText } from "ai";
import { createGroq } from "@ai-sdk/groq";
import { SYSTEM_PROMPT } from "@/lib/ai/system-prompt";

const groq = createGroq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: Request) {
  const body = await req.json();

  // Normalize messages from AI SDK v6 UIMessage format
  const messages = (body.messages || []).map(
    (msg: { role: string; content?: string; parts?: { type: string; text?: string }[] }) => ({
      role: msg.role as "user" | "assistant",
      content:
        msg.content ||
        msg.parts
          ?.filter((p: { type: string }) => p.type === "text")
          .map((p: { text?: string }) => p.text)
          .join("") ||
        "",
    })
  );

  const result = streamText({
    model: groq("llama-3.3-70b-versatile"),
    system: SYSTEM_PROMPT,
    messages,
    maxOutputTokens: 500,
  });

  return result.toTextStreamResponse();
}
