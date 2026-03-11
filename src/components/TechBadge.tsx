"use client";

const TECH_CONFIG: Record<string, { color: string; icon: string }> = {
  // Languages
  Java: { color: "#f89820", icon: "☕" },
  Python: { color: "#3776ab", icon: "🐍" },
  TypeScript: { color: "#3178c6", icon: "TS" },

  // Backend frameworks
  "Spring Boot": { color: "#6db33f", icon: "🍃" },
  FastAPI: { color: "#009688", icon: "⚡" },
  FastMCP: { color: "#10b981", icon: "🔌" },

  // Frontend
  React: { color: "#61dafb", icon: "⚛" },

  // Databases
  PostgreSQL: { color: "#336791", icon: "🐘" },
  SQLite: { color: "#003b57", icon: "💾" },

  // Infra & tools
  Docker: { color: "#2496ed", icon: "🐳" },
  "Linux Cron": { color: "#f59e0b", icon: "⏰" },

  // Protocols & formats
  "JSON-RPC": { color: "#8b5cf6", icon: "{}" },
  "REST Orchestration": { color: "#8b5cf6", icon: "🔗" },

  // Data & viz
  Playwright: { color: "#2ead33", icon: "🎭" },
  FastF1: { color: "#e10600", icon: "🏎" },
  Matplotlib: { color: "#11557c", icon: "📊" },
  CLI: { color: "#a1a1aa", icon: ">" },
};

export default function TechBadge({ name }: { name: string }) {
  const config = TECH_CONFIG[name];

  if (!config) {
    return (
      <span className="rounded-md border border-[var(--border-subtle)] bg-[var(--bg-secondary)] px-2.5 py-1 text-xs text-[var(--text-muted)]">
        {name}
      </span>
    );
  }

  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium"
      style={{
        borderColor: `${config.color}30`,
        backgroundColor: `${config.color}10`,
        color: config.color,
      }}
    >
      <span className="text-[10px] leading-none">{config.icon}</span>
      {name}
    </span>
  );
}
