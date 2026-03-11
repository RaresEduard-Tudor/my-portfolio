# Portfolio Guidelines

Reference for maintaining and extending this project.

---

## Deployment Workflow

Every push to `main` auto-deploys via Vercel's GitHub integration.

For a manual deploy from the terminal:

```bash
source ~/.nvm/nvm.sh
vercel --prod --yes
```

To update the clean alias after a manual deploy:

```bash
vercel alias set <new-deployment-url> rares-tudor.vercel.app
```

GitHub push requires SSH (HTTPS auth doesn't work in WSL):

```bash
git push origin main   # SSH remote already configured
```

---

## Adding or Updating a Project

**1. Edit the project list**

Open `src/components/Projects.tsx` and add to the `projects` array:

```ts
{
  title: "Project Name",
  problem: "One sentence: what pain does it solve.",
  solution: "One sentence: how it solves it, with key metrics if any.",
  tech: ["Tech1", "Tech2"],
  icon: IconName,           // import from lucide-react
  accentColor: "var(--accent-blue)",  // see accent vars below
  repoUrl: "https://github.com/RaresEduard-Tudor/...",
  liveUrl: "https://...",   // optional — shows ExternalLink icon on card
  span: "sm:col-span-2",    // optional — makes the card wider (use for flagship projects only)
}
```

Available accent colors: `--accent-blue` · `--accent-purple` · `--accent-emerald` · `--accent-amber` · `--accent-rose`

**2. Add tech badge config (if new tech)**

Open `src/components/TechBadge.tsx` and add to `TECH_CONFIG`:

```ts
"TechName": { color: "#hexcolor", icon: "emoji or short text" },
```

If a tech has no entry it still renders, just without color.

---

## Updating the Technical DNA Section

Open `src/components/TechDNA.tsx` and edit the `categories` array. Each category has:

- `title` — card heading
- `icon` — Lucide icon component
- `accentColor` — one of the CSS accent vars
- `items` — bullet strings, format: `"Category — Detail"`

The grid is `lg:grid-cols-3` — keep it at 3 cards to avoid layout issues.

---

## Theme System

Themes are CSS custom properties defined in `src/app/globals.css`.

| Variable | Dark | Light | Usage |
| --- | --- | --- | --- |
| `--bg-primary` | `#0a0a0f` | `#f8f9fc` | Page background |
| `--bg-card` | `#16161f` | `#ffffff` | Card backgrounds |
| `--text-primary` | `#e4e4e7` | `#1a1a2e` | Headings, body |
| `--text-secondary` | `#a1a1aa` | `#4a4a5a` | Descriptions |
| `--text-muted` | `#71717a` | `#7a7a8a` | Labels, hints |
| `--border-subtle` | `#1e1e2e` | `#e2e4ea` | Card borders |
| `--accent-blue` | `#3b82f6` | `#2563eb` | Primary CTA |

Theme is persisted in `localStorage` under the key `theme` and applied as `data-theme` on `<html>`.

---

## Resume

Drop `resume.pdf` into the `/public` folder. The Contact section already links to `/resume.pdf`. After adding it, redeploy.

---

## Project Modal (README Popup)

Clicking a project card fetches the README from:

```
https://raw.githubusercontent.com/RaresEduard-Tudor/<repo>/main/README.md
```

Falls back to `master` branch if `main` returns 404. If both fail, shows a "View on GitHub" fallback link.

The modal renders full Markdown — headings, code blocks, tables, images — via the `.prose-custom` styles in `globals.css`.

---

## Key Files at a Glance

| File | What to change |
| --- | --- |
| `src/components/Projects.tsx` | Add/remove/edit projects |
| `src/components/TechBadge.tsx` | Add tech badge colors |
| `src/components/TechDNA.tsx` | Edit skills/infrastructure section |
| `src/components/Contact.tsx` | Update GitHub, LinkedIn, Resume URLs |
| `src/app/globals.css` | Theme colors, markdown prose styles |
| `public/resume.pdf` | Resume file (add manually) |
