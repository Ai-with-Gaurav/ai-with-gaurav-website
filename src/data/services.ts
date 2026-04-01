import type { Service } from "@/types";

export const services: Service[] = [
  {
    title: "AI Chatbot Development",
    description:
      "Custom intelligent chatbots that understand context, handle complex queries, and integrate seamlessly with your existing systems.",
    icon: "bot",
    tags: ["ChatGPT", "Claude", "LangChain", "RAG"],
  },
  {
    title: "Voice AI Assistants",
    description:
      "Natural-sounding voice agents for customer support, sales, and internal workflows with real-time speech processing.",
    icon: "mic",
    tags: ["Vapi", "OpenAI Realtime", "Twilio"],
  },
  {
    title: "RAG System Architecture",
    description:
      "Knowledge-grounded AI systems that retrieve and reason over your documents, databases, and proprietary data.",
    icon: "database",
    tags: ["pgvector", "LangChain", "Embeddings"],
  },
  {
    title: "Workflow Automation",
    description:
      "End-to-end automation of repetitive tasks and business processes using visual workflow builders and custom integrations.",
    icon: "workflow",
    tags: ["n8n", "Zapier", "APIs", "Webhooks"],
  },
  {
    title: "Full-Stack Web Development",
    description:
      "Modern, performant web applications built with Next.js, React, and TypeScript — optimized for speed and SEO.",
    icon: "code",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
  },
  {
    title: "AI Consulting",
    description:
      "Strategic guidance on AI adoption, tool selection, architecture design, and implementation roadmaps for your business.",
    icon: "lightbulb",
    tags: ["Strategy", "Architecture", "ROI Analysis"],
  },
  {
    title: "Social Media Automation",
    description:
      "AI-powered content generation, scheduling, and engagement automation across all major social platforms.",
    icon: "share",
    tags: ["Content AI", "Scheduling", "Analytics"],
  },
  {
    title: "Custom LLM Integrations",
    description:
      "Seamless integration of large language models into your products with fine-tuning, prompt engineering, and evaluation.",
    icon: "cpu",
    tags: ["OpenAI", "Claude", "OpenRouter", "Fine-tuning"],
  },
  {
    title: "Data Pipeline & Analytics",
    description:
      "Automated data collection, transformation, and visualization pipelines that turn raw data into actionable insights.",
    icon: "barchart",
    tags: ["ETL", "Dashboards", "Python", "SQL"],
  },
];
