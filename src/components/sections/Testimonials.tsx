"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const prev = () =>
    setCurrent(
      (c) => (c - 1 + testimonials.length) % testimonials.length
    );
  const next = () =>
    setCurrent((c) => (c + 1) % testimonials.length);

  const testimonial = testimonials[current];

  return (
    <section id="testimonials" className="py-20">
      <Container>
        <SectionHeading
          label="Testimonials"
          title="What Clients Say"
          subtitle="Feedback from businesses I've helped transform with AI"
        />

        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl border border-dark-600 bg-dark-800 p-8 sm:p-10 text-center"
            >
              <Quote className="mx-auto mb-6 h-10 w-10 text-primary/30" />

              <p className="text-lg text-text-primary leading-relaxed sm:text-xl">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Rating */}
              {testimonial.rating && (
                <div className="mt-6 flex justify-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              )}

              {/* Author */}
              <div className="mt-6">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <p className="font-semibold text-text-primary">
                  {testimonial.name}
                </p>
                <p className="text-sm text-text-muted">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-700 text-text-muted transition-colors hover:bg-dark-600 hover:text-text-primary cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    index === current
                      ? "w-8 bg-primary"
                      : "w-2 bg-dark-600 hover:bg-dark-500"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-dark-700 text-text-muted transition-colors hover:bg-dark-600 hover:text-text-primary cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
