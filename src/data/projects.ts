import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "ai-with-gaurav-website",
    title: "AI with Gaurav — Portfolio Website",
    description:
      "Personal portfolio website showcasing AI projects, services, and blog content. Built with Next.js, TypeScript, and Tailwind CSS.",
    image: "/images/projects/ai-support.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    category: "web",
    liveUrl: "https://aiwithgaurav.vercel.app",
    githubUrl: "https://github.com/Ai-with-Gaurav/ai-with-gaurav-website",
    highlights: [
      "Fully responsive modern design",
      "AI-powered chat widget integration",
      "Blog with MDX support",
    ],
    result: "Live portfolio driving client leads",
  },
  {
    slug: "aws-fargate-ecs",
    title: "AWS Fargate ECS Deployment",
    description:
      "Production-grade cloud deployment setup using AWS Fargate and ECS for scalable, serverless container orchestration.",
    image: "/images/projects/workflow.jpg",
    tags: ["AWS", "Fargate", "ECS", "TypeScript"],
    category: "automation",
    githubUrl: "https://github.com/Ai-with-Gaurav/aws-fargate-ecs",
    highlights: [
      "Serverless container orchestration",
      "Auto-scaling infrastructure",
      "Production-ready deployment pipeline",
    ],
    result: "Scalable cloud deployment solution",
  },
  {
    slug: "multimodal-rag",
    title: "Multimodal RAG with Gemini",
    description:
      "Retrieval-Augmented Generation system using Google Gemini embeddings for multimodal document understanding and semantic search.",
    image: "/images/projects/rag-kb.jpg",
    tags: ["Python", "RAG", "Gemini", "LangChain"],
    category: "ai",
    githubUrl: "https://github.com/Ai-with-Gaurav/multimodal-rag",
    highlights: [
      "Google Gemini embedding integration",
      "Multimodal document processing",
      "Semantic search with contextual answers",
    ],
    result: "Accurate multimodal information retrieval",
  },
  {
    slug: "guardrails-ai",
    title: "Guardrails AI — AI Security",
    description:
      "Security framework for AI applications implementing guardrails, input validation, and output safety checks to prevent misuse.",
    image: "/images/projects/voice-sales.jpg",
    tags: ["Python", "AI Safety", "Guardrails", "LLM"],
    category: "ai",
    githubUrl: "https://github.com/Ai-with-Gaurav/Guardrails-ai",
    highlights: [
      "Input/output validation pipelines",
      "Prompt injection prevention",
      "Configurable safety policies",
    ],
    result: "Robust AI application security layer",
  },
  {
    slug: "automate-data-scraping",
    title: "Automated Data Scraping",
    description:
      "Python-based automated web scraping tool for extracting and processing structured data from multiple sources at scale.",
    image: "/images/projects/social-dashboard.jpg",
    tags: ["Python", "Automation", "Web Scraping"],
    category: "automation",
    githubUrl: "https://github.com/Ai-with-Gaurav/automate-data-scraping",
    highlights: [
      "Multi-source data extraction",
      "Automated scheduling and pipelines",
      "Structured data output formats",
    ],
    result: "Streamlined data collection workflows",
  },
  {
    slug: "ai-laptop-recommend",
    title: "AI Laptop Recommender",
    description:
      "Intelligent recommendation system that suggests the best laptops based on user preferences, budget, and use-case requirements using AI.",
    image: "/images/projects/ecommerce-ai.jpg",
    tags: ["Python", "AI", "ML", "Recommendation"],
    category: "ai",
    githubUrl: "https://github.com/Ai-with-Gaurav/AI-laptop-Recommend",
    highlights: [
      "Personalized recommendations by use-case",
      "Budget-aware filtering",
      "AI-driven comparison engine",
    ],
    result: "Smart purchasing decisions powered by AI",
  },
];
