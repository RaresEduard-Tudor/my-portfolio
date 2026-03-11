"use client";

import { motion } from "framer-motion";
import { Server, GitBranch } from "lucide-react";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    title: "Infrastructure",
    icon: Server,
    accentColor: "var(--accent-amber)",
    items: [
      "Self-hosted Headless Linux Server (Ubuntu)",
      "Docker Compose",
      "Cron-automated data scrapers",
    ],
  },
  {
    title: "DevOps",
    icon: GitBranch,
    accentColor: "var(--accent-purple)",
    items: [
      "CI/CD via GitHub Actions",
      "Vercel deployments",
      "Nginx reverse proxying",
    ],
  },
];

export default function TechDNA() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Skills"
          title="Technical DNA"
          subtitle="The infrastructure and tooling that powers every project."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-card)] p-6 transition-all duration-300 hover:border-[var(--border-accent)] hover:bg-[var(--bg-card-hover)] sm:p-8"
            >
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${cat.accentColor}15` }}
                >
                  <cat.icon
                    className="h-5 w-5"
                    style={{ color: cat.accentColor }}
                  />
                </div>
                <h3 className="text-lg font-semibold">{cat.title}</h3>
              </div>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[var(--text-secondary)]"
                  >
                    <span
                      className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full"
                      style={{ backgroundColor: cat.accentColor }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
