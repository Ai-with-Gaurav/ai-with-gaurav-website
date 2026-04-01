"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, CheckCircle2, TrendingUp, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

const filters = ["All", "AI", "Web", "Automation"] as const;
type Filter = (typeof filters)[number];

const categoryColors: Record<string, string> = {
  ai: "bg-violet-500/10 text-violet-400 border-violet-500/30",
  web: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  automation: "bg-amber-500/10 text-amber-400 border-amber-500/30",
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filteredProjects = projects.filter(
    (p) => activeFilter === "All" || p.category === activeFilter.toLowerCase()
  );

  return (
    <section id="projects" className="py-20">
      <Container>
        <SectionHeading
          label="My Work"
          title="Featured Projects"
          subtitle="Real-world AI solutions delivering measurable results"
        />

        {/* Filters */}
        <div className="mb-10 flex justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all cursor-pointer ${
                activeFilter === filter
                  ? "bg-primary text-dark-900"
                  : "bg-dark-700 text-text-muted hover:text-text-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <div className="relative h-full rounded-2xl border border-dark-600 bg-dark-800 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 flex flex-col overflow-hidden">
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Category badge */}
                  <div className="relative mb-4">
                    <span
                      className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                        categoryColors[project.category] || categoryColors.ai
                      }`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="relative">
                    <h3 className="mb-2 text-xl font-bold text-text-primary group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="mb-4 text-sm text-text-muted leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  {project.highlights && (
                    <ul className="relative mb-4 space-y-2 flex-1">
                      {project.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2.5 text-sm text-text-muted"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Result badge */}
                  {project.result && (
                    <div className="relative mb-4 flex items-center gap-2 rounded-lg bg-green-500/10 border border-green-500/20 px-3 py-2">
                      <TrendingUp className="h-4 w-4 text-green-400 shrink-0" />
                      <span className="text-sm font-medium text-green-400">
                        {project.result}
                      </span>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="relative mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>

                  {/* Divider + Links */}
                  <div className="relative border-t border-dark-600 pt-4 mt-auto">
                    <div className="flex items-center gap-4">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          className="flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary-light transition-colors group/link"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                          <ArrowRight className="h-3 w-3 transition-transform group-hover/link:translate-x-0.5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          className="flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors"
                        >
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                          </svg>
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
