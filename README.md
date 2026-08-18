# Project Banyan

The website for **Project Banyan** — a Parkinson's initiative creating impact for
people living with the disease, and for the carers, doctors, and researchers
around them. We start with knowledge and awareness, because understanding is the
first step toward change.

Live at **[projectbanyan.org](https://projectbanyan.org)**.

## Tech stack

| | |
| --- | --- |
| Framework | React 19 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS v4 |
| Components | shadcn + Base UI |
| Font | Geist Variable |
| Hosting | Render (static site) |

## Getting started

Requires Node.js 20 or newer.

```bash
npm install
npm run dev      # start the dev server at http://localhost:5173
```

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Dev server with hot module replacement |
| `npm run build` | Type-check (`tsc -b`) and build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint across the project |

## Project structure

```
src/
  App.tsx                  page composition — sections render in this order
  main.tsx                 React entry point
  index.css                Tailwind import and design tokens (colors, radii, fonts)
  components/
    header.tsx             sticky nav with the banyan tree mark
    hero.tsx               headline and calls to action
    mission.tsx            why Project Banyan exists
    poem.tsx               a poem by someone living with Parkinson's
    who-we-support.tsx     patients, carers, doctors, researchers
    get-involved.tsx       closing invitation
    footer.tsx             site footer
    ui/                    shadcn primitives
  lib/utils.ts             `cn()` class-name helper
public/                    static assets served as-is
```

The site is a single page. To add, remove, or reorder a section, edit the list of
components in `src/App.tsx` — each section owns its own `id` for anchor links,
and the nav links in `header.tsx` and `footer.tsx` point at those ids.

### Design tokens

Colors are defined once as CSS custom properties in `src/index.css` under
`:root`, and exposed to Tailwind through the `@theme inline` block. Change the
palette there rather than hard-coding colors in components — the site's green is
`--primary`, and sections alternate between `--background`, `--muted`, and
`--accent` to create rhythm down the page.

## Deployment

`render.yaml` is a Render blueprint describing the static site: it runs
`npm ci && npm run build`, publishes `dist/`, serves `projectbanyan.org`, and
rewrites all routes to `index.html`. Pushing to the deployment branch is enough —
Render picks up the blueprint and builds from it.
