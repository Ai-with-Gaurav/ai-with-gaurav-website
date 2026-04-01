export const SITE_CONFIG = {
  name: "AI with Gaurav",
  title: "AI with Gaurav — AI Solutions Architect",
  description:
    "Building production AI systems — chatbots, voice assistants, RAG systems, and workflow automation.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://aiwithgaurav.com",
  author: "Gaurav",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/#home" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "About", href: "/#about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
] as const;
