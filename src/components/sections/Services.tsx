"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Mic,
  Database,
  Workflow,
  Code,
  Lightbulb,
  Share2,
  Cpu,
  BarChart3,
  CheckCircle2,
  Clock,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  bot: Bot,
  mic: Mic,
  database: Database,
  workflow: Workflow,
  code: Code,
  lightbulb: Lightbulb,
  share: Share2,
  cpu: Cpu,
  barchart: BarChart3,
};

export default function Services() {
  return (
    <section id="services" className="py-20">
      <Container>
        <SectionHeading
          label="What I Do"
          title="Services & Expertise"
          subtitle="End-to-end AI solutions tailored to your business needs"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Bot;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="relative h-full rounded-2xl border border-dark-600 bg-dark-800 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 flex flex-col overflow-hidden">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Header row: icon + popular badge */}
                  <div className="relative flex items-start justify-between mb-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    {service.popular && (
                      <span className="rounded-full bg-primary/10 border border-primary/30 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="relative">
                    <h3 className="mb-2 text-xl font-bold text-text-primary">
                      {service.title}
                    </h3>
                    <p className="mb-5 text-sm text-text-muted leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature bullets */}
                  {service.features && (
                    <ul className="relative mb-5 space-y-2.5 flex-1">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm text-text-muted"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Timeline */}
                  {service.timeline && (
                    <div className="relative flex items-center gap-2 mb-5 text-xs text-text-muted">
                      <Clock className="h-3.5 w-3.5" />
                      {service.timeline}
                    </div>
                  )}

                  {/* Divider */}
                  <div className="relative border-t border-dark-600 pt-4 mt-auto">
                    <div className="flex items-center justify-between">
                      {/* Price */}
                      {service.price && (
                        <span className="text-lg font-bold text-primary">
                          {service.price}
                        </span>
                      )}

                      {/* CTA */}
                      <a
                        href="/#contact"
                        className="flex items-center gap-1.5 text-sm font-medium text-text-muted transition-colors hover:text-primary group/link"
                      >
                        Get started
                        <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
