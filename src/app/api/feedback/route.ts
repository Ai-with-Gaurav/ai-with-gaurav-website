import { createServiceClient } from "@/lib/supabase";

export async function POST(req: Request) {
  const { reaction, page } = await req.json();

  if (!reaction) {
    return Response.json({ error: "Reaction is required" }, { status: 400 });
  }

  // Store in Supabase (if configured)
  const supabase = createServiceClient();
  if (supabase) {
    try {
      await supabase.from("feedback").insert({
        reaction,
        page: page || "/",
        created_at: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Feedback insert error:", error);
    }
  }

  // Trigger n8n webhook (if configured)
  if (process.env.N8N_WEBHOOK_FEEDBACK) {
    try {
      await fetch(process.env.N8N_WEBHOOK_FEEDBACK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reaction, page }),
      });
    } catch (error) {
      console.error("n8n feedback webhook error:", error);
    }
  }

  return Response.json({ success: true });
}
