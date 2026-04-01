import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ai-customer-support",
    title: "AI Customer Support Agent",
    description:
      "Multi-channel AI support agent handling 10k+ queries/month with 94% resolution rate. Integrates with CRM and ticketing systems.",
    image: "/images/projects/ai-support.jpg",
    tags: ["ChatGPT", "LangChain", "RAG", "Next.js"],
    category: "ai",
    liveUrl: "#",
    githubUrl: "#",
    highlights: [
      "94% automated resolution rate",
      "10k+ queries handled monthly",
      "3-second average response time",
    ],
    result: "Reduced support costs by 60%",
  },
  {
    slug: "voice-sales-assistant",
    title: "Voice Sales Assistant",
    description:
      "Real-time voice AI that qualifies leads, books appointments, and handles objections with human-like conversation flow.",
    image: "/images/projects/voice-sales.jpg",
    tags: ["Vapi", "OpenAI", "Twilio", "n8n"],
    category: "ai",
    liveUrl: "#",
    highlights: [
      "Human-like conversation quality",
      "Auto-books calendar appointments",
      "Handles objections in real-time",
    ],
    result: "2x lead conversion rate",
  },
  {
    slug: "rag-knowledge-base",
    title: "Enterprise Knowledge Base",
    description:
      "RAG-powered internal knowledge system processing 50k+ documents with semantic search and contextual answers.",
    image: "/images/projects/rag-kb.jpg",
    tags: ["pgvector", "LangChain", "Supabase", "Python"],
    category: "ai",
    liveUrl: "#",
    githubUrl: "#",
    highlights: [
      "50k+ documents indexed",
      "Source citations in every answer",
      "99.5% uptime SLA",
    ],
    result: "5x faster information retrieval",
  },
  {
    slug: "workflow-automation-suite",
    title: "Business Workflow Automation",
    description:
      "End-to-end automation suite connecting 15+ tools, reducing manual work by 80% for a marketing agency.",
    image: "/images/projects/workflow.jpg",
    tags: ["n8n", "Webhooks", "APIs", "Slack"],
    category: "automation",
    liveUrl: "#",
    highlights: [
      "15+ tools connected seamlessly",
      "Zero-downtime error handling",
      "Real-time Slack notifications",
    ],
    result: "80% reduction in manual work",
  },
  {
    slug: "social-media-dashboard",
    title: "Social Media Dashboard",
    description:
      "AI-powered social media management platform with automated content generation, scheduling, and analytics.",
    image: "/images/projects/social-dashboard.jpg",
    tags: ["Next.js", "OpenAI", "Tailwind", "Supabase"],
    category: "web",
    liveUrl: "#",
    githubUrl: "#",
    highlights: [
      "AI content generation in brand voice",
      "Multi-platform auto-posting",
      "Engagement analytics dashboard",
    ],
    result: "3x social engagement growth",
  },
  {
    slug: "ecommerce-ai",
    title: "E-Commerce AI Recommender",
    description:
      "Personalized product recommendation engine using collaborative filtering and LLM-powered product descriptions.",
    image: "/images/projects/ecommerce-ai.jpg",
    tags: ["Python", "FastAPI", "React", "ML"],
    category: "ai",
    liveUrl: "#",
    githubUrl: "#",
    highlights: [
      "Personalized recommendations per user",
      "AI-generated product descriptions",
      "Real-time inventory awareness",
    ],
    result: "35% increase in avg order value",
  },
];
