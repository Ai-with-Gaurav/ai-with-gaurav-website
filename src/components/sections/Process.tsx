"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket, BarChart3 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We start with a deep dive into your business, goals, and pain points to identify the highest-impact AI opportunities.",
  },
  {
    icon: PenTool,
    title: "Design & Plan",
    description:
      "I create a detailed architecture and implementation plan — choosing the right models, tools, and integrations for your use case.",
  },
  {
    icon: Code,
    title: "Build & Iterate",
    description:
      "Rapid development with weekly demos. You see progress early and often, with room to adjust as we learn together.",
  },
  {
    icon: Rocket,
    title: "Launch & Deploy",
    description:
      "Battle-tested deployment with monitoring, error tracking, and documentation. Your AI system goes live with confidence.",
  },
  {
    icon: BarChart3,
    title: "Optimize & Scale",
    description:
      "Post-launch optimization based on real usage data. Continuous improvement to maximize performance and ROI.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 bg-dark-800/50">
      <Container>
        <SectionHeading
          label="How I Work"
          title="My Process"
          subtitle="A proven methodology for delivering AI solutions that work"
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-6"
              >
                {/* Step number */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-dark-800 border-2 border-primary text-primary">
                  <step.icon className="h-5 w-5" />
                </div>

                {/* Content */}
                <div className="rounded-xl border border-dark-600 bg-dark-800 p-5 flex-1">
                  <div className="mb-1 flex items-center gap-3">
                    <span className="text-xs font-bold text-primary">
                      STEP {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-text-primary">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
