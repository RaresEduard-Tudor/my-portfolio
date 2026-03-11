"use client";

import { motion } from "framer-motion";
import { Server, GitBranch, Shield } from "lucide-react";
import SectionHeading from "./SectionHeading";

const categories = [
  {
    title: "Infrastructure",
    icon: Server,
    accentColor: "var(--accent-amber)",
    items: [
      "Linux Administration — Self-hosted Headless Ubuntu Server",
      "Virtualization — Docker & Docker Compose orchestration",
      "Database Management — PostgreSQL (Relational) & SQLite (Embedded)",
      "Automation — Cron-scheduled Python scrapers & system maintenance",
      "Networking — Static IP, SSH tunneling, and firewall management",
    ],
  },
  {
    title: "DevOps & Tooling",
    icon: GitBranch,
    accentColor: "var(--accent-purple)",
    items: [
      "CI/CD Pipeline — Automated testing & deployment via GitHub Actions",
      "Web Servers — Nginx Reverse Proxy with SSL/TLS (Certbot)",
      "Cloud Hosting — Vercel (Frontend) & Render/Self-hosted (Backend)",
      "Version Control — Advanced Git (branching, rebasing, conflict resolution)",
      "API Testing — Postman & Insomnia for RESTful endpoint validation",
    ],
  },
  {
    title: "Architecture & AI",
    icon: Shield,
    accentColor: "var(--accent-emerald)",
    items: [
      "Agentic AI — Model Context Protocol (MCP) servers for LLM tool-calling",
      "State Management — NoSQL (Firebase) to Relational (PostgreSQL) migrations",
      "Security First — JWT authentication, env variable protection, SSL enforcement",
      "Backend Architecture — Spring Boot microservices, FastAPI orchestration engines",
      "Micro-utilities — Python CLI tools to automate data workflows",
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
          subtitle="The infrastructure, tooling, and architecture that powers every project."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
