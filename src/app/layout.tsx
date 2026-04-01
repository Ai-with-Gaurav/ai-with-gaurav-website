import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import SkipToContent from "@/components/ui/SkipToContent";
import ChatWidget from "@/components/ai/ChatWidget";
import { VercelAnalytics, GoogleAnalytics } from "@/components/layout/Analytics";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://aiwithgaurav.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "AI with Gaurav — AI Solutions Architect",
    template: "%s | AI with Gaurav",
  },
  description:
    "Building production AI systems — chatbots, voice assistants, RAG systems, and workflow automation.",
  keywords: [
    "AI",
    "Machine Learning",
    "Chatbot",
    "Voice Assistant",
    "RAG",
    "Automation",
    "AI with Gaurav",
    "AI Consultant",
    "LLM Integration",
  ],
  authors: [{ name: "Gaurav", url: siteUrl }],
  creator: "Gaurav",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "AI with Gaurav",
    title: "AI with Gaurav — AI Solutions Architect",
    description:
      "Building production AI systems — chatbots, voice assistants, RAG systems, and workflow automation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI with Gaurav — AI Solutions Architect",
    description:
      "Building production AI systems — chatbots, voice assistants, RAG systems, and workflow automation.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gaurav",
  url: siteUrl,
  jobTitle: "AI Solutions Architect",
  description:
    "Building production AI systems — chatbots, voice assistants, RAG systems, and workflow automation.",
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Chatbots",
    "Voice AI",
    "RAG Systems",
    "Workflow Automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-dark-900 text-text-primary font-sans antialiased">
        <SkipToContent />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <ScrollToTop />
        <ChatWidget />
        <VercelAnalytics />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
