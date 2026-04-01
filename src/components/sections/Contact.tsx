"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, Calendar } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setIsSubmitted(true);
      setFormData({ name: "", email: "", budget: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <Container>
        <SectionHeading
          label="Get in Touch"
          title="Let's Build Something Amazing"
          subtitle="Have a project in mind? Let's discuss how AI can help your business"
        />

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-5">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-text-primary">Email</h4>
                <p className="text-sm text-text-muted">
                  g33227476@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-text-primary">Location</h4>
                <p className="text-sm text-text-muted">
                  Taiwan (Available Worldwide)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-semibold text-text-primary">
                  Book a Call
                </h4>
                <p className="text-sm text-text-muted">
                  Schedule a free 30-min consultation
                </p>
                <a
                  href="https://cal.com/gaurav-ybpste"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block text-sm text-primary hover:text-primary-light transition-colors"
                >
                  Book on Cal.com →
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-dark-600 bg-dark-800 p-5 mt-8">
              <p className="text-sm text-text-muted leading-relaxed">
                <span className="text-primary font-semibold">
                  Typical response time:
                </span>{" "}
                Within 24 hours. I read every message personally and will get
                back to you with thoughtful feedback on your project idea.
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            {isSubmitted ? (
              <div className="flex h-full items-center justify-center rounded-2xl border border-green-500/30 bg-green-500/5 p-12 text-center">
                <div>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                    <Send className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-text-muted">
                    Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-sm text-primary hover:text-primary-light cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-text-primary"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-lg border border-dark-600 bg-dark-700 px-4 py-3 text-text-primary placeholder-dark-500 transition-colors focus:border-primary focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-text-primary"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-lg border border-dark-600 bg-dark-700 px-4 py-3 text-text-primary placeholder-dark-500 transition-colors focus:border-primary focus:outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="budget"
                    className="mb-2 block text-sm font-medium text-text-primary"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full rounded-lg border border-dark-600 bg-dark-700 px-4 py-3 text-text-primary transition-colors focus:border-primary focus:outline-none"
                  >
                    <option value="">Select a range</option>
                    <option value="< $2k">Less than $2,000</option>
                    <option value="$2k-$5k">$2,000 - $5,000</option>
                    <option value="$5k-$10k">$5,000 - $10,000</option>
                    <option value="$10k-$25k">$10,000 - $25,000</option>
                    <option value="$25k+">$25,000+</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-text-primary"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full resize-none rounded-lg border border-dark-600 bg-dark-700 px-4 py-3 text-text-primary placeholder-dark-500 transition-colors focus:border-primary focus:outline-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button type="submit" size="lg" isLoading={isSubmitting} className="w-full sm:w-auto">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
