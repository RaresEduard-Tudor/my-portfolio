"use client";

import { useState } from "react";
import { Car, Shield, Cpu, TrendingUp, Film, Gauge } from "lucide-react";
import ProjectCard, { type Project } from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import SectionHeading from "./SectionHeading";

const projects: Project[] = [
  {
    title: "CarLogix",
    problem:
      "Scaling a real-time NoSQL (Firebase) hobby app for enterprise data integrity.",
    solution:
      "A Spring Boot 3 + PostgreSQL system with JWT security, React dashboard, React Native mobile scanner, and Dockerized deployment.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "React", "Docker"],
    icon: Car,
    accentColor: "var(--accent-blue)",
    repoUrl: "https://github.com/RaresEduard-Tudor/CarLogix",
    span: "sm:col-span-2",
  },
  {
    title: "Threat-IntelD",
    problem:
      "Manually verifying malicious URLs is slow and fragmented across multiple tools.",
    solution:
      "A FastAPI orchestration engine running 8 concurrent security checks (WHOIS, SSL, VirusTotal, Google Safe Browsing) with a React dashboard scoring threats 0–100.",
    tech: ["Python", "FastAPI", "React", "Docker", "TypeScript"],
    icon: Shield,
    accentColor: "var(--accent-rose)",
    repoUrl: "https://github.com/RaresEduard-Tudor/Threat-IntelD",
  },
  {
    title: "OBD2-MCP-Server",
    problem:
      "AI models (Claude/Copilot) lack real-time, offline access to technical automotive diagnostics.",
    solution:
      "An open-source MCP server with 460 DTC codes, 9 tools, FTS5 search, built with FastMCP and SQLite — turns Copilot into a mechanic's reference.",
    tech: ["Python", "FastMCP", "SQLite", "JSON-RPC"],
    icon: Cpu,
    accentColor: "var(--accent-emerald)",
    repoUrl: "https://github.com/RaresEduard-Tudor/obd2-mcp-server",
  },
  {
    title: "Market-Scraper",
    problem:
      "Tracking European vehicle market prices manually is tedious and inconsistent.",
    solution:
      "A Playwright-driven scraper with configurable filters across 11 markets, SQLite persistence, CSV exports, and cron-automated nightly runs on a headless Linux server.",
    tech: ["Python", "Playwright", "SQLite", "Linux Cron"],
    icon: TrendingUp,
    accentColor: "var(--accent-amber)",
    repoUrl: "https://github.com/RaresEduard-Tudor/Market-Scraper",
  },
  {
    title: "Media-Conversion",
    problem:
      "Converting media files between formats requires installing heavy desktop apps.",
    solution:
      "A lightweight Dockerized media conversion service for fast, reproducible format transformations.",
    tech: ["Docker", "Python"],
    icon: Film,
    accentColor: "var(--accent-purple)",
    repoUrl: "https://github.com/RaresEduard-Tudor/Media-Conversion",
  },
  {
    title: "F1-Telemetry",
    problem:
      "Comparing F1 driver performance requires sifting through raw timing data manually.",
    solution:
      "A CLI tool using FastF1 to compare fastest laps, view season stats, and generate speed-trace visualizations — with local caching for instant replays.",
    tech: ["Python", "FastF1", "Matplotlib", "CLI"],
    icon: Gauge,
    accentColor: "var(--accent-blue)",
    repoUrl: "https://github.com/RaresEduard-Tudor/F1-Telemetry",
  },
];

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Projects"
          title="What I've Built"
          subtitle="Problem-driven engineering — each project solves a real constraint."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              onClick={() => setSelected(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
