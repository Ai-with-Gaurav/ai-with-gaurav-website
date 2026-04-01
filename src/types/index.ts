export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "ai" | "web" | "automation";
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
  highlights?: string[];
  result?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
  tags: string[];
  features?: string[];
  price?: string;
  timeline?: string;
  popular?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  image?: string;
  content: string;
  rating?: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  image?: string;
  author: string;
  published: boolean;
  readingTime?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}
