# Rares Tudor — Portfolio

> Live: [rares-tudor.vercel.app](https://rares-tudor.vercel.app)

A high-performance engineering portfolio built as a technical project in its own right — not a static link tree. Features a dashboard aesthetic, animated bento grid, GitHub README popups, and full dark/light mode.

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router, Static Export) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Markdown | react-markdown |
| Deployment | Vercel |

## Features

- **Bento grid project cards** — Problem/Solution layout with colored tech badges
- **GitHub README popups** — Click any project card to load its README live from GitHub
- **Live site links** — Direct links to deployed projects where available
- **Technical DNA section** — 3-column infrastructure/devops/architecture breakdown
- **Dark/Light mode** — System-aware with manual toggle, persisted in localStorage
- **Responsive navbar** — Smooth scroll navigation with frosted glass effect on scroll, mobile hamburger menu
- **Animations** — Scroll-triggered entrance animations on all sections

## Projects Featured

| Project | Stack | Live |
|---------|-------|------|
| [CarLogix](https://github.com/RaresEduard-Tudor/CarLogix) | Java · Spring Boot · PostgreSQL · React · Docker | [carlogix-app.vercel.app](https://carlogix-app.vercel.app) |
| [Threat-IntelD](https://github.com/RaresEduard-Tudor/Threat-IntelD) | Python · FastAPI · React · Docker · TypeScript | [threat-inteld.vercel.app](https://threat-inteld.vercel.app) |
| [OBD2-MCP-Server](https://github.com/RaresEduard-Tudor/obd2-mcp-server) | Python · FastMCP · SQLite · JSON-RPC | — |
| [Market-Scraper](https://github.com/RaresEduard-Tudor/Market-Scraper) | Python · Playwright · SQLite · Linux Cron | — |
| [F1-Telemetry](https://github.com/RaresEduard-Tudor/F1-Telemetry) | Python · FastF1 · Matplotlib · CLI | — |

## Project Structure

```
src/
├── app/
│   ├── globals.css          # CSS variables (dark/light themes), prose styles
│   ├── layout.tsx           # Root layout with ThemeProvider
│   └── page.tsx             # Page composition
└── components/
    ├── Navbar.tsx            # Sticky nav with smooth scroll + mobile menu
    ├── Hero.tsx              # Landing section
    ├── Projects.tsx          # Project data + grid layout
    ├── ProjectCard.tsx       # Individual card with hover effects
    ├── ProjectModal.tsx      # Full-screen README popup
    ├── TechBadge.tsx         # Colored tech stack badges
    ├── TechDNA.tsx           # Infrastructure/skills section
    ├── Contact.tsx           # GitHub, LinkedIn, Resume links
    ├── SectionHeading.tsx    # Reusable section header
    ├── ThemeProvider.tsx     # Context + localStorage theme persistence
    └── ThemeToggle.tsx       # Standalone toggle (superseded by Navbar)
```

## Local Development

```bash
nvm use        # ensure correct Node version
npm install
npm run dev    # starts on localhost:3000
```

## Deploy

The project auto-deploys on push to `main` via Vercel's GitHub integration. To deploy manually:

```bash
vercel --prod --yes
```

To update the Vercel alias:

```bash
vercel alias set <deployment-url> rares-tudor.vercel.app
```

## Adding a Project

1. Open `src/components/Projects.tsx`
2. Add a new entry to the `projects` array — see existing entries for the shape
3. Add tech badge colors/icons to `src/components/TechBadge.tsx` if needed
4. Commit and push — Vercel auto-deploys

## Resume

Place `resume.pdf` in the `/public` folder. The Contact section links to `/resume.pdf` automatically.
