"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { Project } from "./ProjectCard";
import TechBadge from "./TechBadge";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const [readme, setReadme] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchReadme = useCallback(async (repoUrl: string) => {
    setLoading(true);
    setError(false);
    setReadme(null);

    const repoPath = repoUrl.replace("https://github.com/", "");
    const branches = ["main", "master"];

    for (const branch of branches) {
      try {
        const res = await fetch(
          `https://raw.githubusercontent.com/${repoPath}/${branch}/README.md`
        );
        if (res.ok) {
          const text = await res.text();
          setReadme(text);
          setLoading(false);
          return;
        }
      } catch {
        // try next branch
      }
    }

    setError(true);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (project?.repoUrl) {
      fetchReadme(project.repoUrl);
    }
    return () => {
      setReadme(null);
      setLoading(false);
      setError(false);
    };
  }, [project, fetchReadme]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto px-4 py-10 sm:py-20"
          onClick={onClose}
          style={{ backgroundColor: "var(--overlay)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] px-6 py-4">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-lg"
                  style={{
                    backgroundColor: `${project.accentColor}15`,
                  }}
                >
                  <project.icon
                    className="h-4 w-4"
                    style={{ color: project.accentColor }}
                  />
                </div>
                <h2 className="text-lg font-semibold">{project.title}</h2>
              </div>
              <div className="flex items-center gap-2">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 items-center gap-1.5 rounded-lg border border-[var(--border-accent)] bg-[var(--bg-secondary)] px-3 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                  >
                    <ExternalLink className="h-3 w-3" />
                    Live
                  </a>
                )}
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 items-center gap-1.5 rounded-lg border border-[var(--border-accent)] bg-[var(--bg-secondary)] px-3 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  <Github className="h-3 w-3" />
                  Repo
                </a>
                <button
                  onClick={onClose}
                  className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg text-[var(--text-muted)] transition-colors hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2 border-b border-[var(--border-subtle)] px-6 py-3">
              {project.tech.map((t) => (
                <TechBadge key={t} name={t} />
              ))}
            </div>

            {/* README content */}
            <div className="max-h-[70vh] overflow-y-auto px-8 py-6">
              {loading && (
                <div className="flex items-center justify-center py-20">
                  <Loader2 className="h-6 w-6 animate-spin text-[var(--text-muted)]" />
                </div>
              )}
              {error && (
                <div className="py-10 text-center text-sm text-[var(--text-muted)]">
                  <p>Could not load README from GitHub.</p>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-[var(--accent-blue)] hover:underline"
                  >
                    View on GitHub
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              )}
              {readme && (
                <div className="prose-custom">
                  <ReactMarkdown>{readme}</ReactMarkdown>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
