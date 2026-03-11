"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  label,
  title,
  subtitle,
}: {
  label: string;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="text-center"
    >
      <span className="mb-2 inline-block rounded-full border border-[var(--border-accent)] bg-[var(--bg-card)] px-3 py-1 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
        {label}
      </span>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-[var(--text-secondary)]">
        {subtitle}
      </p>
    </motion.div>
  );
}
