"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, MapPin, Briefcase, GraduationCap } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

const skills = [
  "Python",
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "LangChain",
  "OpenAI API",
  "Claude API",
  "Vapi",
  "n8n",
  "Supabase",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Tailwind CSS",
  "Framer Motion",
];

const highlights = [
  { icon: Briefcase, label: "3+ Years Experience" },
  { icon: MapPin, label: "Available Worldwide" },
  { icon: GraduationCap, label: "Continuous Learner" },
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <Container>
        <SectionHeading
          label="About Me"
          title="The Person Behind the Code"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Photo / Avatar Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="h-72 w-72 overflow-hidden rounded-2xl sm:h-80 sm:w-80">
                <Image
                  src="/images/gaurav.jpeg"
                  alt="Gaurav"
                  width={320}
                  height={320}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 -right-3 h-72 w-72 rounded-2xl border-2 border-primary/20 -z-10 sm:h-80 sm:w-80" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Hi, I&apos;m Gaurav
            </h3>

            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                I&apos;m an AI Solutions Architect passionate about building
                intelligent systems that solve real business problems. From
                chatbots and voice assistants to RAG systems and workflow
                automation — I turn complex AI concepts into production-ready
                solutions.
              </p>
              <p>
                My approach combines deep technical expertise with a strong
                understanding of business needs. I don&apos;t just build AI for
                the sake of it — I build AI that delivers measurable ROI.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-6 flex flex-wrap gap-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 text-sm text-text-muted"
                >
                  <item.icon className="h-4 w-4 text-primary" />
                  {item.label}
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="mt-6">
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-text-muted">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <Button href="#" variant="secondary">
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
