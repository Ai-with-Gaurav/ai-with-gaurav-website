import { createServiceClient } from "@/lib/supabase";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, budget, message } = body;

  if (!name || !email || !message) {
    return Response.json(
      { error: "Name, email, and message are required" },
      { status: 400 }
    );
  }

  // 1. Store in Supabase (if configured)
  {
    const supabase = createServiceClient();
    if (supabase) try {
      await supabase.from("contacts").insert({
        name,
        email,
        budget: budget || null,
        message,
        created_at: new Date().toISOString(),
      });
    } catch (error) {
      console.error("Supabase insert error:", error);
    }
  }

  // 2. Trigger n8n webhook (if configured)
  if (process.env.N8N_WEBHOOK_CONTACT) {
    try {
      await fetch(process.env.N8N_WEBHOOK_CONTACT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, budget, message }),
      });
    } catch (error) {
      console.error("n8n webhook error:", error);
    }
  }

  // 3. Send email notification via Resend (if configured)
  if (process.env.RESEND_API_KEY) {
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "AI with Gaurav <noreply@aiwithgaurav.com>",
        to: ["hello@aiwithgaurav.com"],
        subject: `New Contact: ${name}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `,
      });
    } catch (error) {
      console.error("Resend email error:", error);
    }
  }

  return Response.json({ success: true });
}
