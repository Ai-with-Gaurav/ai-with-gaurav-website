"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Accordion from "@/components/ui/Accordion";
import { faqs } from "@/data/faq";

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-dark-800/50">
      <Container>
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions about working together"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion items={faqs} />
        </motion.div>
      </Container>
    </section>
  );
}
