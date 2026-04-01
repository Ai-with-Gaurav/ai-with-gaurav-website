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
} from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
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
              >
                <Card className="h-full">
                  <Icon className="mb-4 h-10 w-10 text-primary" />
                  <h3 className="mb-2 text-xl font-semibold text-text-primary">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-sm text-text-muted leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
