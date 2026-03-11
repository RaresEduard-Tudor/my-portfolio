"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      {/* Gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[var(--accent-purple)] opacity-[0.07] blur-[120px]" />
        <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-[var(--accent-blue)] opacity-[0.05] blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10"
      >
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border-accent)] bg-[var(--bg-card)] px-4 py-1.5 text-sm text-[var(--text-secondary)]">
          <span className="inline-block h-2 w-2 rounded-full bg-[var(--accent-emerald)] animate-pulse" />
          Available for opportunities
        </div>

        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Full-Stack Engineer{" "}
          <span className="bg-gradient-to-r from-[var(--accent-blue)] to-[var(--accent-purple)] bg-clip-text text-transparent">
            Specialized in Enterprise Java & AI Infrastructure
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--text-secondary)] sm:text-xl">
          Building high-performance backends and local AI tools. Maintaining a
          headless Linux environment for deployment and security research.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-4"
      >
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent-blue)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-blue)]/90"
        >
          View Projects
          <ChevronDown className="h-4 w-4" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-lg border border-[var(--border-accent)] bg-[var(--bg-card)] px-6 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-card-hover)]"
        >
          Get in Touch
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-[var(--text-muted)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
