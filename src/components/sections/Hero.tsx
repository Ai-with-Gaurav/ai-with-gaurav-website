"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import VoiceAssistant from "@/components/ai/VoiceAssistant";

const roles = [
  "AI Chatbots",
  "Voice Assistants",
  "RAG Systems",
  "Workflow Automation",
  "Full-Stack Apps",
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative flex min-h-screen items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-primary/3 blur-[100px]" />
      </div>

      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="primary" className="mb-6 gap-1.5">
            <Sparkles className="h-3.5 w-3.5" />
            AI Solutions Architect
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold leading-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl"
        >
          I Build{" "}
          <span className="relative">
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              {roles[currentRole]}
            </span>
            <motion.span
              key={currentRole}
              initial={{ width: "100%" }}
              animate={{ width: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute bottom-0 right-0 top-0 bg-dark-900"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-text-muted sm:text-xl"
        >
          Hi, I&apos;m <span className="text-text-primary font-semibold">Gaurav</span>. I help
          businesses leverage AI to automate workflows, build intelligent
          assistants, and create production-grade AI systems.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button size="lg" href="/#projects">
            View Projects
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" href="/#contact">
            Get in Touch
          </Button>
        </motion.div>

        {/* Voice Assistant */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-2"
        >
          <VoiceAssistant />
          <p className="text-xs text-text-muted">Talk to my AI assistant</p>
        </motion.div>

      </Container>
    </section>
  );
}
