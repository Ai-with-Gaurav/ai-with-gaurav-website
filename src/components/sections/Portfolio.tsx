"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

const filters = ["All", "AI", "Web", "Automation"] as const;
type Filter = (typeof filters)[number];

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
              >
                <Card className="h-full flex flex-col">
                  {/* Placeholder image */}
                  <div className="mb-4 aspect-video rounded-lg bg-gradient-to-br from-dark-600 to-dark-700 flex items-center justify-center overflow-hidden">
                    <span className="text-3xl font-bold text-dark-500">
                      {project.title.charAt(0)}
                    </span>
                  </div>

                  <h3 className="mb-2 text-lg font-semibold text-text-primary">
                    {project.title}
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-text-muted leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="flex items-center gap-1.5 text-sm text-primary hover:text-primary-light transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors"
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                        Code
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
