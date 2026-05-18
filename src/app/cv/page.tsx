import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV, Rares-Eduard Tudor",
  description: "CV of Rares-Eduard Tudor, Full-Stack Engineer specializing in Enterprise Java & AI Infrastructure.",
};

export default function CVPage() {
  return (
    <div className="cv-page">
      {/* ── HEADER ─────────────────────────────────────────── */}
      <header className="cv-header">
        <div>
          <h1>Rares-Eduard Tudor</h1>
          <p className="cv-title">Full-Stack Engineer · Enterprise Java &amp; AI Infrastructure</p>
        </div>
        <ul className="cv-contact">
          <li><a href="mailto:rarestudor5@gmail.com">rarestudor5@gmail.com</a></li>
          <li><a href="https://rarestudor.com" target="_blank" rel="noopener noreferrer">rarestudor.com</a></li>
          <li><a href="https://github.com/RaresEduard-Tudor" target="_blank" rel="noopener noreferrer">github.com/RaresEduard-Tudor</a></li>
          <li>East Flanders, Belgium</li>
        </ul>
      </header>

      <hr className="cv-divider" />

      {/* ── SUMMARY ────────────────────────────────────────── */}
      <section className="cv-section">
        <h2 className="cv-section-title">Profile</h2>
        <p className="cv-body">
          Applied Computer Science student at HOGENT building full-stack applications and data tooling.
          Open-source contributor in the MCP ecosystem; self-hosted Ubuntu server for live deployments.
          Seeking a software engineering internship to work on production systems.
        </p>
      </section>

      {/* ── SKILLS ─────────────────────────────────────────── */}
      <section className="cv-section">
        <h2 className="cv-section-title">Technical Skills</h2>
        <dl className="cv-skills">
          <div className="cv-skill-row">
            <dt>Languages</dt>
            <dd>Java · Python · TypeScript · JavaScript · C++ · SQL · C#</dd>
          </div>
          <div className="cv-skill-row">
            <dt>Frontend</dt>
            <dd>React · Next.js · React Native · Tailwind CSS · HTML/CSS</dd>
          </div>
          <div className="cv-skill-row">
            <dt>Backend</dt>
            <dd>Spring Boot 3 · FastAPI · Node.js · REST · JWT · JSON-RPC / MCP</dd>
          </div>
          <div className="cv-skill-row">
            <dt>Databases</dt>
            <dd>PostgreSQL · SQLite · Firebase</dd>
          </div>
          <div className="cv-skill-row">
            <dt>DevOps &amp; Infra</dt>
            <dd>Docker · Linux (Ubuntu) · Nginx · Git · GitHub Actions · Cron · Playwright</dd>
          </div>
        </dl>
      </section>

      {/* ── PROJECTS ───────────────────────────────────────── */}
      <section className="cv-section">
        <h2 className="cv-section-title">Projects</h2>

        <div className="cv-project">
          <div className="cv-project-header">
            <span className="cv-project-title">CarLogix</span>
            <span className="cv-project-links">
              <a href="https://github.com/RaresEduard-Tudor/CarLogix" target="_blank" rel="noopener noreferrer">GitHub</a>
              {" · "}
              <a href="https://carlogix.rarestudor.com" target="_blank" rel="noopener noreferrer">carlogix.rarestudor.com</a>
            </span>
          </div>
          <p className="cv-project-stack">Java · Spring Boot 3 · PostgreSQL · React Native · Docker</p>
          <ul className="cv-bullets">
            <li>Migrated a NoSQL Firebase app to a relational PostgreSQL schema with strict referential integrity, redesigning the datamodel from scratch.</li>
            <li>Secured a Spring Boot REST API with JWT-based authentication and role-based access control; Dockerized the full stack for reproducible deployment.</li>
          </ul>
        </div>

        <div className="cv-project">
          <div className="cv-project-header">
            <span className="cv-project-title">Threat-IntelD</span>
            <span className="cv-project-links">
              <a href="https://github.com/RaresEduard-Tudor/Threat-IntelD" target="_blank" rel="noopener noreferrer">GitHub</a>
              {" · "}
              <a href="https://threat.rarestudor.com" target="_blank" rel="noopener noreferrer">threat.rarestudor.com</a>
            </span>
          </div>
          <p className="cv-project-stack">Python · FastAPI · React · TypeScript · Docker</p>
          <ul className="cv-bullets">
            <li>Engineered a FastAPI backend with async I/O running 8 concurrent security checks (VirusTotal, WHOIS, SSL, Google Safe Browsing).</li>
            <li>Built a React + TypeScript dashboard scoring URLs 0–100 for threat level; containerized with Docker Compose for one-command deployment.</li>
          </ul>
        </div>

        <div className="cv-project">
          <div className="cv-project-header">
            <span className="cv-project-title">OBD2-MCP-Server</span>
            <span className="cv-project-links">
              <a href="https://github.com/RaresEduard-Tudor/obd2-mcp-server" target="_blank" rel="noopener noreferrer">GitHub</a>
            </span>
          </div>
          <p className="cv-project-stack">Python · FastMCP · SQLite · JSON-RPC</p>
          <ul className="cv-bullets">
            <li>Open-source MCP server exposing 460 OBD2 diagnostic codes to LLMs via 9 structured tools.</li>
            <li>Implemented SQLite FTS5 for sub-millisecond offline full-text search with no internet dependency at runtime.</li>
          </ul>
        </div>

        <div className="cv-project">
          <div className="cv-project-header">
            <span className="cv-project-title">F1-Telemetry</span>
            <span className="cv-project-links">
              <a href="https://github.com/RaresEduard-Tudor/F1-Telemetry" target="_blank" rel="noopener noreferrer">GitHub</a>
            </span>
          </div>
          <p className="cv-project-stack">Python · FastF1 · Matplotlib · CLI</p>
          <ul className="cv-bullets">
            <li>CLI tool for Formula 1 race data analysis: fastest lap comparisons, full season stats, and two-panel speed-trace visualizations.</li>
            <li>Local caching via FastF1 for instant replay after first run; outputs structured CSV telemetry for downstream analysis.</li>
          </ul>
        </div>

        <div className="cv-project">
          <div className="cv-project-header">
            <span className="cv-project-title">Market-Scraper</span>
            <span className="cv-project-links">
              <a href="https://github.com/RaresEduard-Tudor/Market-Scraper" target="_blank" rel="noopener noreferrer">GitHub</a>
            </span>
          </div>
          <p className="cv-project-stack">Python · Playwright · SQLite · Linux · Cron</p>
          <ul className="cv-bullets">
            <li>Playwright scraper covering 11 European vehicle markets with configurable filters, SQLite persistence, and CSV export.</li>
            <li>Deployed to a self-hosted Ubuntu server with cron-scheduled nightly runs and automated data hygiene.</li>
          </ul>
        </div>
      </section>

      {/* ── AWARDS ─────────────────────────────────────────── */}
      <section className="cv-section">
        <h2 className="cv-section-title">Awards</h2>
        <div className="cv-entry">
          <div className="cv-entry-header">
            <span className="cv-entry-title">1st Place – RoboCup Junior Belgium</span>
            <span className="cv-entry-date">2023</span>
          </div>
          <p className="cv-entry-sub">C++ · Micro:bit</p>
          <ul className="cv-bullets">
            <li>Collaborated in a 3-person team to design and build a competition robot.</li>
            <li>Programmed hardware logic in C++ and Micro:bit, securing the gold medal at the national Technopolis event.</li>
          </ul>
        </div>
      </section>

      {/* ── EDUCATION ──────────────────────────────────────── */}
      <section className="cv-section">
        <h2 className="cv-section-title">Education</h2>
        <div className="cv-entry">
          <div className="cv-entry-header">
            <span className="cv-entry-title">Bachelor&rsquo;s degree, Applied Information Technology</span>
            <span className="cv-entry-date">Sep 2023 – Sep 2027</span>
          </div>
          <p className="cv-entry-sub">HOGENT · East Flanders, Belgium</p>
        </div>
      </section>

      {/* ── EXPERIENCE ─────────────────────────────────────── */}
      <section className="cv-section">
        <h2 className="cv-section-title">Experience</h2>
        <div className="cv-entry">
          <div className="cv-entry-header">
            <span className="cv-entry-title">Food Service Worker, McDonald&rsquo;s</span>
            <span className="cv-entry-date">Nov 2023 – Present</span>
          </div>
          <p className="cv-entry-sub">Maldegem, Belgium</p>
          <ul className="cv-bullets">
            <li>Maintained a consistent work schedule alongside full-time technical studies, demonstrating reliability under pressure.</li>
          </ul>
        </div>
      </section>

      {/* ── LANGUAGES ──────────────────────────────────────── */}
      <section className="cv-section">
        <h2 className="cv-section-title">Languages</h2>
        <dl className="cv-skills">
          <div className="cv-skill-row">
            <dt>Romanian</dt><dd>Native</dd>
          </div>
          <div className="cv-skill-row">
            <dt>English</dt><dd>Professional proficiency</dd>
          </div>
          <div className="cv-skill-row">
            <dt>Dutch</dt><dd>Professional proficiency</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}