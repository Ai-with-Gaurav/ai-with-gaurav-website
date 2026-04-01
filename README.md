<div align="center">

# <img src="https://img.shields.io/badge/AI-with%20Gaurav-7c3aed?style=for-the-badge&logo=openai&logoColor=white" alt="AI with Gaurav" />

### Production-Grade AI Portfolio & Services Platform

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-3FCF8E?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-000?style=flat-square&logo=vercel)](https://vercel.com)

<br />

<img src="https://img.shields.io/badge/Groq-LLaMA%203.3-F55036?style=flat-square&logo=meta&logoColor=white" />
<img src="https://img.shields.io/badge/Vapi-Voice%20AI-4F46E5?style=flat-square" />
<img src="https://img.shields.io/badge/LangChain-RAG-1C3C3C?style=flat-square&logo=langchain&logoColor=white" />
<img src="https://img.shields.io/badge/n8n-Automation-EA4B71?style=flat-square&logo=n8n&logoColor=white" />

---

**A full-stack AI-powered portfolio website showcasing chatbots, voice assistants, RAG systems, and workflow automation.**

[Features](#-features) &bull; [Tech Stack](#-tech-stack) &bull; [Getting Started](#-getting-started) &bull; [Project Structure](#-project-structure)

</div>

<br />

## &#x2728; Features

<table>
<tr>
<td width="50%">

### &#x1F916; AI Chatbot
- Powered by **Groq + LLaMA 3.3 70B**
- Real-time streaming responses
- Context-aware conversations about services
- Suggested replies for quick interaction

</td>
<td width="50%">

### &#x1F3A4; Voice Assistant
- **Vapi**-powered voice AI
- Natural speech interaction
- ElevenLabs voice synthesis
- One-click call from the hero section

</td>
</tr>
<tr>
<td width="50%">

### &#x1F4DA; RAG System
- **LangChain + pgvector** retrieval pipeline
- Semantic search over portfolio content
- Context-grounded AI responses
- Supabase vector store

</td>
<td width="50%">

### &#x26A1; Workflow Automation
- **n8n** self-hosted automation
- Contact form notifications
- Feedback collection pipeline
- Email alerts via Resend

</td>
</tr>
</table>

### &#x1F3E0; Landing Page (10 Sections)
> Hero &bull; About &bull; Services &bull; Portfolio &bull; Case Studies &bull; Process &bull; Testimonials &bull; FAQ &bull; Contact &bull; Feedback

### &#x1F4DD; Blog System
> MDX-powered blog with search, tag filtering, table of contents, social sharing, and syntax highlighting

<br />

## &#x1F6E0; Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4, Framer Motion |
| **AI Chat** | Groq (LLaMA 3.3 70B), Vercel AI SDK v6 |
| **Voice AI** | Vapi, ElevenLabs |
| **RAG** | LangChain, pgvector, Supabase |
| **Database** | Supabase (PostgreSQL) |
| **Blog** | MDX (next-mdx-remote) |
| **Automation** | n8n (Docker) |
| **Email** | Resend |
| **Analytics** | Google Analytics 4 |
| **Deployment** | Vercel |
| **CI/CD** | GitHub Actions |

<br />

## &#x1F680; Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/Ai-with-Gaurav/ai-with-gaurav-website.git
cd ai-with-gaurav-website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your API keys

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

### Database Setup

Run the SQL script in your Supabase SQL Editor to create the required tables:

```bash
# Copy contents of scripts/setup-supabase.sql into Supabase SQL Editor
```

<br />

## &#x1F4C1; Project Structure

```
ai-portfolio/
├── content/blog/          # MDX blog posts
├── public/                # Static assets
├── scripts/               # DB setup & ingestion scripts
├── src/
│   ├── app/
│   │   ├── api/           # API routes (chat, contact, feedback, RAG)
│   │   ├── blog/          # Blog pages
│   │   └── page.tsx       # Landing page
│   ├── components/
│   │   ├── ai/            # ChatWidget, VoiceAssistant
│   │   ├── blog/          # PostCard, MDXComponents, TOC
│   │   ├── layout/        # Header, Footer, Analytics
│   │   ├── sections/      # Hero, About, Services, etc.
│   │   └── ui/            # Button, Card, Badge, etc.
│   ├── data/              # Static data (projects, services, FAQs)
│   ├── lib/
│   │   ├── ai/            # System prompt
│   │   ├── rag/           # Embeddings, retriever, chain
│   │   ├── constants.ts   # Site config & nav links
│   │   ├── supabase.ts    # DB client
│   │   └── utils.ts       # Utility functions
│   └── types/             # TypeScript types
├── docker-compose.yml     # n8n self-hosted setup
└── vercel.json            # Deployment config
```

<br />

## &#x1F510; Environment Variables

Copy `.env.example` to `.env.local` and fill in your keys:

| Variable | Required | Description |
|----------|----------|-------------|
| `GROQ_API_KEY` | Yes | Groq API key for AI chat |
| `NEXT_PUBLIC_SUPABASE_URL` | Yes | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Yes | Supabase anonymous key |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | Supabase service role key |
| `NEXT_PUBLIC_VAPI_PUBLIC_KEY` | No | Vapi public key for voice AI |
| `VAPI_PRIVATE_KEY` | No | Vapi private key |
| `OPENAI_API_KEY` | No | OpenAI key for RAG embeddings |
| `RESEND_API_KEY` | No | Resend key for email notifications |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics measurement ID |

<br />

## &#x1F4E6; Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### n8n (Automation)

```bash
docker-compose up -d
```

<br />

## &#x1F4C4; License

This project is open source and available under the [MIT License](LICENSE).

<br />

<div align="center">

---

**Built with &#x1F49C; by Gaurav**

[![Portfolio](https://img.shields.io/badge/Portfolio-AI%20with%20Gaurav-7c3aed?style=for-the-badge)](https://github.com/Ai-with-Gaurav)

</div>
