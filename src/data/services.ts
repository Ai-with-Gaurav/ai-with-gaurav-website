import type { Service } from "@/types";

export const services: Service[] = [
  {
    title: "AI Chatbot Development",
    description:
      "Custom intelligent chatbots that understand context, handle complex queries, and integrate with your existing systems.",
    icon: "bot",
    tags: ["ChatGPT", "Claude", "LangChain", "RAG"],
    features: [
      "Multi-turn conversation with memory",
      "CRM & helpdesk integration",
      "Analytics dashboard included",
    ],
    price: "From $1,500",
    timeline: "Typical timeline: 1-2 weeks",
    popular: true,
  },
  {
    title: "Voice AI Assistants",
    description:
      "Natural-sounding voice agents for customer support, sales, and internal workflows with real-time speech processing.",
    icon: "mic",
    tags: ["Vapi", "OpenAI Realtime", "Twilio"],
    features: [
      "Human-like voice synthesis",
      "Real-time call handling & routing",
      "Call transcripts + sentiment analysis",
    ],
    price: "From $2,500",
    timeline: "Typical timeline: 2-3 weeks",
  },
  {
    title: "RAG System Architecture",
    description:
      "Knowledge-grounded AI systems that retrieve and reason over your documents, databases, and proprietary data.",
    icon: "database",
    tags: ["pgvector", "LangChain", "Embeddings"],
    features: [
      "Semantic search over 100k+ documents",
      "Source citations in every response",
      "Auto-sync with your data sources",
    ],
    price: "From $3,000",
    timeline: "Typical timeline: 2-4 weeks",
  },
  {
    title: "AI Lead Generation System",
    description:
      "Stop buying dead leads. Get a system that scrapes, scores, and delivers qualified prospects to your inbox daily.",
    icon: "barchart",
    tags: ["AI Scoring", "CRM Sync", "Automation"],
    features: [
      "AI lead scraping + enrichment pipeline",
      "Lead scoring — only talk to hot prospects",
      "Automated email sequences + CRM sync",
    ],
    price: "From $2,000",
    timeline: "Typical timeline: 2-3 weeks",
    popular: true,
  },
  {
    title: "Workflow Automation",
    description:
      "End-to-end automation of repetitive tasks and business processes using visual workflow builders and custom integrations.",
    icon: "workflow",
    tags: ["n8n", "Zapier", "APIs", "Webhooks"],
    features: [
      "Connect 15+ tools seamlessly",
      "Error handling & retry logic built-in",
      "Monitoring dashboard + alerts",
    ],
    price: "From $1,000",
    timeline: "Typical timeline: 1-2 weeks",
  },
  {
    title: "Full-Stack Web Development",
    description:
      "Modern, performant web applications built with Next.js, React, and TypeScript — optimized for speed and SEO.",
    icon: "code",
    tags: ["Next.js", "React", "TypeScript", "Tailwind"],
    features: [
      "Server-side rendering + static generation",
      "SEO optimized with Core Web Vitals",
      "Responsive design across all devices",
    ],
    price: "From $2,000",
    timeline: "Typical timeline: 2-4 weeks",
  },
  {
    title: "AI Consulting",
    description:
      "Strategic guidance on AI adoption, tool selection, architecture design, and implementation roadmaps for your business.",
    icon: "lightbulb",
    tags: ["Strategy", "Architecture", "ROI Analysis"],
    features: [
      "AI readiness assessment",
      "Tool & vendor comparison report",
      "Custom implementation roadmap",
    ],
    price: "From $500",
    timeline: "Typical timeline: 3-5 days",
  },
  {
    title: "Social Media Automation",
    description:
      "AI-powered content generation, scheduling, and engagement automation across all major social platforms.",
    icon: "share",
    tags: ["Content AI", "Scheduling", "Analytics"],
    features: [
      "AI content generation in your brand voice",
      "Multi-platform auto-scheduling",
      "Performance tracking + optimization",
    ],
    price: "From $1,500",
    timeline: "Typical timeline: 1-2 weeks",
  },
  {
    title: "Custom LLM Integrations",
    description:
      "Seamless integration of large language models into your products with fine-tuning, prompt engineering, and evaluation.",
    icon: "cpu",
    tags: ["OpenAI", "Claude", "OpenRouter", "Fine-tuning"],
    features: [
      "Prompt engineering + optimization",
      "Model fine-tuning on your data",
      "Evaluation pipeline + A/B testing",
    ],
    price: "From $3,000",
    timeline: "Typical timeline: 2-4 weeks",
  },
];
