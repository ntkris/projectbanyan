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
| Type | Literata (headings) + Public Sans (body) |
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
    section.tsx            Section / SectionHeading / Prose — the page shell
    header.tsx             sticky nav
    banyan-mark.tsx        the logo: a banyan — crown, hanging aerial roots, one landed trunk
    hero.tsx               headline and calls to action
    mission.tsx            why Project Banyan exists
    poem.tsx               a poem by Dr Nandakumar Jairam
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

## Design system

The direction is **Field Notes**: the site is built like a well-set reference
rather than a marketing page. A reading serif for headings, rules instead of
cards, a tight measure, and no elevation anywhere. If you are adding a section,
reach for a rule before you reach for a box.

Everything routes through three primitives in `src/components/section.tsx` —
`Section`, `SectionHeading` and `Prose` — so page width, vertical rhythm and the
heading treatment are decided once. Use them rather than hand-rolling a
`<section>`, or the containers drift apart again.

### Legibility floors

These are not stylistic preferences. Parkinson's depletes dopamine in the retina
as well as the brain, which measurably reduces contrast sensitivity; it also
makes saccades hypometric, so the eye undershoots the return sweep to the start
of the next line. The floors below follow from that, and **changing any of them
downward makes the site harder to read for the people it is for**.

| | Floor | Why |
| --- | --- | --- |
| Body text | 19px / 1.7 (`text-body`) | Acuity, and convergence insufficiency making reading tiring |
| Contrast | 7:1, WCAG AAA | Reduced retinal contrast sensitivity |
| Measure | 62ch (`max-w-measure`) | Hypometric saccades losing the return sweep |
| Font weight | 400 minimum | Thin strokes vanish at the affected spatial frequencies |
| Targets | 44px minimum, 48px default | Tremor and bradykinesia |
| Focus | 3px outline, never suppressed | Keyboard and switch access |
| Colour | never load-bearing on its own | Blue–yellow discrimination is affected |

The whole page currently sits at **7.46:1 or better**, and the widest column of
prose is 62 characters.

### Type scale

Sizes are named for their job, not their position in a scale, so the floor is
hard to break by accident: `text-label`, `text-small`, `text-body`, `text-lede`,
`text-h3`, `text-h2`, `text-h1`. Only `text-label` (16px, uppercase, tracked)
sits below the 17px mark, and it is reserved for section eyebrows — never prose.

### Colour

Defined once as hex in `:root` in `src/index.css`, with the measured contrast
ratio beside each. Change them there, not in components, and re-check the ratio
if you touch any value that carries text.

| Token | Value | On paper |
| --- | --- | --- |
| `--foreground` | `#191C18` | 16.6:1 |
| `--muted-foreground` | `#4A4F47` | 8.1:1 (7.5:1 on `--accent`) |
| `--primary` (ivy) | `#26543A` | 8.4:1, and 8.4:1 reversed |
| `--secondary` (slate) | `#3F5069` | 7.9:1 |
| `--border-strong` | `#85897A` | 3.5:1 — control outlines only |
| `--border` | `#DFE1D7` | decorative rules; carries no meaning |

### Dark mode

Not implemented, deliberately. `@custom-variant dark` stays in `src/index.css`
because removing it would let `dark:` fall back to `prefers-color-scheme`, and
the `dark:` utilities inside the shadcn primitives would then fire against light
tokens. With no `.dark` palette defined, the variant simply never activates.

## Deployment

`render.yaml` is a Render blueprint describing the static site: it runs
`npm ci && npm run build`, publishes `dist/`, serves `projectbanyan.org`, and
rewrites all routes to `index.html`. Pushing to the deployment branch is enough —
Render picks up the blueprint and builds from it.
