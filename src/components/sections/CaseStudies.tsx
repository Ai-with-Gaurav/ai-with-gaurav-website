"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";

const caseStudies = [
  {
    title: "AI-Powered Customer Support for SaaS Platform",
    client: "TechFlow Inc.",
    problem:
      "Overwhelmed support team handling 500+ tickets/day with 48-hour average response time.",
    solution:
      "Built a RAG-powered chatbot trained on 10k+ support articles with smart escalation to human agents.",
    results: [
      { icon: TrendingUp, value: "60%", label: "Ticket Reduction" },
      { icon: Clock, value: "< 30s", label: "Response Time" },
      { icon: Users, value: "94%", label: "Resolution Rate" },
    ],
    tags: ["RAG", "ChatGPT", "LangChain", "Next.js"],
  },
  {
    title: "Voice AI Sales Agent for Real Estate",
    client: "PropertyHub",
    problem:
      "Sales team missing 70% of incoming leads due to response delays and limited availability.",
    solution:
      "Deployed a Vapi-powered voice agent that qualifies leads 24/7, books viewings, and syncs with CRM.",
    results: [
      { icon: TrendingUp, value: "3x", label: "Lead Conversion" },
      { icon: Clock, value: "24/7", label: "Availability" },
      { icon: Users, value: "85%", label: "Leads Qualified" },
    ],
    tags: ["Vapi", "OpenAI", "n8n", "HubSpot"],
  },
  {
    title: "Marketing Workflow Automation",
    client: "BrightEdge Media",
    problem:
      "Marketing team spending 30+ hours/week on repetitive tasks across 15+ disconnected tools.",
    solution:
      "Built n8n automation workflows connecting all tools — from content creation to publishing to analytics.",
    results: [
      { icon: TrendingUp, value: "80%", label: "Time Saved" },
      { icon: Clock, value: "15+", label: "Tools Connected" },
      { icon: Users, value: "2x", label: "Content Output" },
    ],
    tags: ["n8n", "APIs", "Slack", "Buffer"],
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 bg-dark-800/50">
      <Container>
        <SectionHeading
          label="Case Studies"
          title="Real Results, Real Impact"
          subtitle="Detailed look at how AI solutions transformed these businesses"
        />

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl border border-dark-600 bg-dark-800 p-6 sm:p-8"
            >
              <div className="mb-2 flex flex-wrap items-center gap-3">
                <Badge variant="primary">{study.client}</Badge>
                {study.tags.map((tag) => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>

              <h3 className="mb-6 text-2xl font-bold text-text-primary">
                {study.title}
              </h3>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-red-400">
                    The Problem
                  </h4>
                  <p className="text-text-muted leading-relaxed">
                    {study.problem}
                  </p>
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-green-400">
                    The Solution
                  </h4>
                  <p className="text-text-muted leading-relaxed">
                    {study.solution}
                  </p>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4 rounded-xl bg-dark-700/50 p-6">
                {study.results.map((result) => (
                  <div key={result.label} className="text-center">
                    <result.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
                    <p className="text-2xl font-bold text-primary sm:text-3xl">
                      {result.value}
                    </p>
                    <p className="mt-1 text-xs text-text-muted sm:text-sm">
                      {result.label}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
