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
          <li><a href="https://rares-tudor.vercel.app" target="_blank" rel="noopener noreferrer">rares-tudor.vercel.app</a></li>
          <li><a href="https://github.com/RaresEduard-Tudor" target="_blank" rel="noopener noreferrer">github.com/RaresEduard-Tudor</a></li>
          <li><a href="https://www.linkedin.com/in/rares-eduard-tudor-6885952aa/" target="_blank" rel="noopener noreferrer">linkedin.com/in/rares-eduard-tudor</a></li>
          <li>East Flanders, Belgium</li>
        </ul>
      </header>

      <hr className="cv-divider" />

      {/* ── SUMMARY ────────────────────────────────────────── */}
      <section className="cv-section">
        <h2 className="cv-section-title">Profile</h2>
        <p className="cv-body">
          Applied Computer Science student at HOGENT with a strong self-driven track record of shipping
          production-grade software. I build high-performance backends in Java (Spring Boot) and Python (FastAPI),
          maintain a self-hosted Linux server for real deployments, and develop open-source AI tooling.
          I work well across the full stack, from PostgreSQL schema design to React dashboards,
          and bring a security-conscious mindset to every layer.
        </p>
      </section>

      {/* ── SKILLS ─────────────────────────────────────────── */}
      <section className="cv-section">
        <h2 className="cv-section-title">Technical Skills</h2>
        <dl className="cv-skills">
          <div className="cv-skill-row">
            <dt>Languages</dt>
            <dd>Java · Python · TypeScript · JavaScript · SQL · PHP · C# · HTML/CSS</dd>
          </div>
          <div className="cv-skill-row">
            <dt>Backend</dt>
            <dd>Spring Boot 3 · FastAPI · Node.js · REST · JWT Authentication · JSON-RPC / MCP</dd>
          </div>
          <div className="cv-skill-row">
            <dt>Frontend</dt>
            <dd>React · Next.js · React Native · Tailwind CSS · Framer Motion</dd>
          </div>
          <div className="cv-skill-row">
            <dt>Databases</dt>
            <dd>PostgreSQL · SQLite · Firebase (NoSQL)</dd>
          </div>
          <div className="cv-skill-row">
            <dt>Infrastructure</dt>
            <dd>Docker · Docker Compose · Linux (Ubuntu, headless) · Nginx · Cron · SSH · Certbot SSL</dd>
          </div>
          <div className="cv-skill-row">
            <dt>DevOps</dt>
            <dd>GitHub Actions · Vercel · Git (branching, rebasing) · Postman · Playwright</dd>
          </div>
          <div className="cv-skill-row">
            <dt>AI / Tooling</dt>
            <dd>Model Context Protocol (MCP) · FastMCP · LLM tool-calling · SQLite FTS5</dd>
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
              <a href="https://carlogix-app.vercel.app" target="_blank" rel="noopener noreferrer">Live</a>
            </span>
          </div>
          <p className="cv-project-stack">Java · Spring Boot 3 · PostgreSQL · React · React Native · Docker</p>
          <ul className="cv-bullets">
            <li>Rebuilt a real-time Firebase hobby app into an enterprise-grade system, migrating from NoSQL to a relational PostgreSQL schema with referential integrity.</li>
            <li>Implemented JWT-based authentication with role-based access control across a Spring Boot 3 REST API.</li>
            <li>Built a React dashboard and React Native mobile scanner; Dockerized the full stack for reproducible deployment.</li>
          </ul>
        </div>

        <div className="cv-project">
          <div className="cv-project-header">
            <span className="cv-project-title">Threat-IntelD</span>
            <span className="cv-project-links">
              <a href="https://github.com/RaresEduard-Tudor/Threat-IntelD" target="_blank" rel="noopener noreferrer">GitHub</a>
              {" · "}
              <a href="https://threat-inteld.vercel.app" target="_blank" rel="noopener noreferrer">Live</a>
            </span>
          </div>
          <p className="cv-project-stack">Python · FastAPI · React · TypeScript · Docker</p>
          <ul className="cv-bullets">
            <li>Engineered a FastAPI orchestration backend running 8 concurrent security checks (WHOIS, SSL, VirusTotal, Google Safe Browsing) with async I/O.</li>
            <li>Built a React + TypeScript dashboard that scores URLs 0–100 for threat level and renders real-time results from the API.</li>
            <li>Containerized with Docker Compose for one-command deployment.</li>
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
            <li>Published an open-source Model Context Protocol server exposing 460 OBD2 diagnostic codes to LLMs (Claude, GitHub Copilot) via 9 structured tools.</li>
            <li>Implemented SQLite FTS5 full-text search for sub-millisecond offline DTC lookups, no internet dependency at runtime.</li>
          </ul>
        </div>

        <div className="cv-project">
          <div className="cv-project-header">
            <span className="cv-project-title">Market-Scraper</span>
            <span className="cv-project-links">
              <a href="https://github.com/RaresEduard-Tudor/Market-Scraper" target="_blank" rel="noopener noreferrer">GitHub</a>
            </span>
          </div>
          <p className="cv-project-stack">Python · Playwright · SQLite · Linux Cron</p>
          <ul className="cv-bullets">
            <li>Built a Playwright-driven scraper covering 11 European vehicle markets with configurable filters, SQLite persistence, and CSV export.</li>
            <li>Deployed to a self-hosted headless Ubuntu server with cron-scheduled nightly runs and automated data hygiene.</li>
          </ul>
        </div>
      </section>

      {/* ── INFRASTRUCTURE ─────────────────────────────────── */}
      <section className="cv-section">
        <h2 className="cv-section-title">Infrastructure</h2>
        <p className="cv-body">
          Maintain a personal self-hosted Ubuntu server (headless) used for running Dockerized services,
          cron-scheduled scrapers, and security tooling. Configured Nginx as a reverse proxy with
          SSL/TLS via Certbot, manages static IPs, SSH tunnelling, and UFW firewall rules.
          Runs CI/CD pipelines via GitHub Actions with automated deployment to Vercel and Render.
        </p>
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
          <p className="cv-entry-sub">Maldegem, Belgium (Student job alongside studies)</p>
          <ul className="cv-bullets">
            <li>Developed reliability and time management skills while balancing a demanding engineering curriculum.</li>
          </ul>
        </div>
      </section>

      {/* ── LANGUAGES ──────────────────────────────────────── */}
      <section className="cv-section">
        <h2 className="cv-section-title">Languages</h2>
        <dl className="cv-skills">
          <div className="cv-skill-row">
            <dt>English</dt><dd>Professional proficiency</dd>
          </div>
          <div className="cv-skill-row">
            <dt>Dutch</dt><dd>Professional proficiency</dd>
          </div>
          <div className="cv-skill-row">
            <dt>Romanian</dt><dd>Native</dd>
          </div>
        </dl>
      </section>
    </div>
  );
}
