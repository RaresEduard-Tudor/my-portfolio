"use client";

import { motion } from "framer-motion";
import { type LucideIcon, ExternalLink, Github } from "lucide-react";
import TechBadge from "./TechBadge";

export interface Project {
  title: string;
  problem: string;
  solution: string;
  tech: string[];
  icon: LucideIcon;
  accentColor: string;
  repoUrl: string;
  liveUrl?: string;
  span?: string;
}

export default function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 transition-all duration-300 hover:border-[var(--border-accent)] hover:bg-[var(--bg-card-hover)] sm:p-8 ${project.span ?? ""}`}
    >
      {/* Accent glow on hover */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full opacity-0 blur-[80px] transition-opacity duration-500 group-hover:opacity-100"
        style={{ backgroundColor: project.accentColor }}
      />

      <div className="relative z-10">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="flex h-10 w-10 items-center justify-center rounded-lg"
              style={{ backgroundColor: `${project.accentColor}15` }}
            >
              <project.icon
                className="h-5 w-5"
                style={{ color: project.accentColor }}
              />
            </div>
            <h3 className="text-lg font-semibold">{project.title}</h3>
          </div>
          <div className="flex items-center gap-1.5">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--text-muted)] transition-colors hover:bg-[var(--bg-secondary)] hover:text-[var(--accent-blue)]"
                title="Live site"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-[var(--text-muted)] transition-colors hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]"
              title="GitHub repo"
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
              The Problem
            </span>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              {project.problem}
            </p>
          </div>
          <div>
            <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
              The Solution
            </span>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <TechBadge key={t} name={t} />
          ))}
        </div>

        <p className="mt-4 text-xs text-[var(--text-muted)] opacity-0 transition-opacity group-hover:opacity-100">
          Click to view full documentation
        </p>
      </div>
    </motion.div>
  );
}
