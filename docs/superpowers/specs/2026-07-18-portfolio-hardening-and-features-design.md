# Portfolio Hardening & Features — Design

**Date:** 2026-07-18
**Status:** Approved
**Author:** Brainstorming session

## Context

The portfolio (Vite + React) is feature-complete at MVP. The user wants the
next batch of work to be a single design covering features, polish, and
architecture together. All ten items below were chosen by the user.

## Goals (in priority order)

1. Ship **project detail pages** so each project card is clickable.
2. Ship a **functional contact form** that delivers email.
3. Pass **WCAG 2.1 AA** on every route (a11y audit).
4. Hit **Lighthouse ≥ 90 perf / ≥ 95 a11y** on home and project detail.
5. Provide **SEO + meta** so the site is shareable on LinkedIn / Twitter.
6. **Responsive QA** pass on mobile / tablet / desktop.
7. Add a **test suite** so future changes have a safety net.
8. Add **CI/CD** so PRs cannot merge a broken build.
9. **Refactor the data layer** to live in `/content` with Zod validation.
10. **Dead code cleanup** so the tree only contains used code.

## Non-Goals

- New content sections (no testimonials, no blog, no timeline).
- i18n.
- CMS integration.
- Migrating off Vite (stays on Vite + React).

## Architecture

```
src/
  api/              contact.js (client → /api/contact)
  components/
    ui/             Button, Card, Badge, Input (unchanged)
    sections/       Hero, About, Skills, Experience, Projects,
                    Certifications, Contact (moved from components/)
    project/        ProjectCard, ProjectDetail (new)
  data/
    schemas/        project.ts, experience.ts, skills.ts (Zod)
    loaders.ts      typed loaders, parses JSON, throws on invalid
    index.ts        re-exports
  hooks/            useTheme, useProjects, useForm (new: useForm)
  layout/           MainLayout, Navbar, Footer
  pages/            HomePage, ProjectPage, NotFoundPage (new)
  utils/            format.ts, seo.ts (new: seo)
  test/             setup.ts, helpers.tsx
content/            projects.json, experience.json, skills.json (new)
api/                contact.js (Vercel serverless) (new)
.github/workflows/  ci.yml (new)
```

## Stack Additions

- `react-router-dom@6` — routing
- `react-hook-form` + `@hookform/resolvers` — form state + Zod
- `zod` — schema validation (client + server)
- `react-helmet-async` — per-page `<head>`
- `vitest` + `@testing-library/react` + `jsdom` — unit + component
- `@testing-library/user-event` — interaction
- `@vitest/coverage-v8` — coverage
- `@axe-core/playwright` — a11y in e2e
- `@playwright/test` — e2e
- `@lhci/cli` — Lighthouse CI
- `resend` (npm, server-side) — contact email
- `vite-plugin-pwa` — PWA manifest + service worker (optional, gated)

No major version bumps to React or Vite. React stays at 18.

## Data Flow

```
content/*.json
   ↓
Zod schema (src/data/schemas/*.ts)
   ↓ (parse at import, throw with path on invalid)
Typed loader (src/data/loaders.ts)
   ↓
Component prop
   ↓
Render
```

Validation runs at **build time** via a Vite plugin (`vite-plugin-zod-check`)
or a `prebuild` script. A malformed JSON file fails the build.

## Routes

| Path              | Component      | Notes                         |
| ----------------- | -------------- | ----------------------------- |
| `/`               | `HomePage`     | All sections, anchor links    |
| `/projects/:slug` | `ProjectPage`  | Lazy chunk, Suspense boundary |
| `*`               | `NotFoundPage` | 404 with link home            |

Anchor links on home (`#about`, `#skills`, ...) remain scroll-spy. They work
on the home page only; the navbar shows section links when on `/`.

## Project Detail Page

- Click `ProjectCard` → navigate to `/projects/:slug`.
- Page renders:
  - Hero (title, cover image, tech badges, links to demo / repo)
  - Description (markdown rendered)
  - Gallery (lazy-loaded images with width/height)
  - Related projects (same category, max 3)
- Uses `useParams()` to resolve slug.
- 404 if slug not in `projects.json`.
- Code-split chunk: `ProjectPage.chunk.js` ≤ 30KB gz.

## Contact Form

### Flow

1. User fills `ContactForm` (name, email, message).
2. Client validates with Zod (`/src/data/schemas/contact.ts`).
3. `POST /api/contact` with JSON body.
4. Vercel function:
   - Re-validates with same Zod schema.
   - Honeypot check (`company` field must be empty).
   - Rate limit: 5 / hour / IP via Upstash Redis (free tier) OR
     in-memory map (dev only).
   - Sends via Resend API to `CONTACT_TO_EMAIL`.
   - Returns `{ ok: true, id }` or `{ ok: false, error }`.
5. UI shows success toast or inline error.
6. Auto-reply email sent to submitter (optional, gated by env).

### File: `api/contact.js`

```js
import { Resend } from 'resend'
import { z } from 'zod'

const ContactSchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(5000),
  company: z.string().max(0).optional(), // honeypot
})

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()
  const parsed = ContactSchema.safeParse(req.body)
  if (!parsed.success)
    return res.status(400).json({ ok: false, error: parsed.error.flatten() })
  if (parsed.data.company) return res.status(200).json({ ok: true }) // bot
  const resend = new Resend(process.env.RESEND_API_KEY)
  const { name, email, message } = parsed.data
  const { data, error } = await resend.emails.send({
    from: 'Portfolio <noreply@quways.dev>',
    to: process.env.CONTACT_TO_EMAIL,
    reply_to: email,
    subject: `Portfolio contact: ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  })
  if (error) return res.status(500).json({ ok: false, error: 'send_failed' })
  return res.status(200).json({ ok: true, id: data.id })
}
```

### Env

- `RESEND_API_KEY` — required
- `CONTACT_TO_EMAIL` — required (e.g. `hi@quways.dev`)
- `RATE_LIMIT_REDIS_URL` — optional, recommended for prod

## SEO

- `react-helmet-async` wraps app in `main.jsx`.
- Each page renders `<title>`, `<meta name="description">`,
  `<meta property="og:*">`, `<meta name="twitter:*">`.
- Default values from `utils/seo.ts` (title template, OG image).
- `public/robots.txt` allows all, points to sitemap.
- Sitemap generated at build: `vite-plugin-sitemap` writes
  `public/sitemap.xml` from `content/projects.json` slugs.
- Structured data: `Person` JSON-LD on home, `CreativeWork` on detail.

## Performance

Targets:

- LCP < 2.5s
- TBT < 200ms
- CLS < 0.1
- Main bundle ≤ 100KB gz
- Project detail chunk ≤ 30KB gz

Tactics:

- Lazy-load `ProjectPage` via `React.lazy`.
- Self-host Inter via `@fontsource/inter` (subset latin) — no Google Fonts.
- All images use explicit `width`/`height`.
- Below-fold sections lazy-load with `IntersectionObserver`.
- `prefers-reduced-motion` disables animations.
- `vite build` runs `vite-plugin-compression` (gzip + brotli).

## Accessibility

- Skip-to-content link first in DOM, visible on focus.
- All interactives have visible focus ring (`focus-visible:` only).
- Route change → focus moves to `<h1>`.
- Color contrast 4.5:1 text, 3:1 UI.
- All images have `alt` (decorative = `alt=""`).
- Form fields: `<label>` + `aria-describedby` for errors.
- Live regions: form submit, toast (`role="status"`).
- `axe-core` runs in Playwright e2e — zero serious violations on every route.

## Testing

### Pyramid

| Layer      | Tool                      | Target                            |
| ---------- | ------------------------- | --------------------------------- |
| utils      | Vitest                    | 70% line                          |
| hooks      | Vitest + RTL              | 60% line                          |
| components | Vitest + RTL + user-event | 50% line                          |
| e2e        | Playwright                | 1 happy per route                 |
| a11y       | Playwright + axe-core     | 0 serious                         |
| perf       | Lighthouse CI             | perf≥90 a11y≥95 best-practices≥85 |

### Must-cover

- `data/loaders.ts` parses valid + rejects malformed JSON.
- `api/contact.js` validates, blocks bot, returns 200/400/500.
- `ContactForm` shows errors, submits, shows success.
- `ProjectPage` renders, handles unknown slug.
- Smoke e2e: home loads, project click navigates, contact submits (mocked).

## Error Handling

- `ErrorBoundary` per route (catches render errors).
- `useRouteError()` in `errorElement` shows friendly fallback.
- Network errors → toast (`useToast` hook) + retry button.
- 404 → `NotFoundPage` with link home.
- Loading: `Suspense` + skeleton for project detail.

## CI/CD

`.github/workflows/ci.yml`:

```yaml
on: [push, pull_request]
jobs:
  lint: { steps: [checkout, setup-node, npm ci, run: npm run lint] }
  test: { steps: [..., run: npm test -- --coverage] }
  build: { steps: [..., run: npm run build] }
  e2e: { steps: [..., run: npx playwright install --with-deps && npm run e2e] }
  lhci: { steps: [..., run: npx lhci autorun] }
```

- All jobs must pass to merge.
- Vercel auto-deploys on `main` push.
- Preview deploys per PR.
- Env vars set in Vercel dashboard, not in repo.

## Data Layer Refactor

- Move `src/data/cvData.{js,json}` → `content/*.json` split by domain:
  - `content/personal.json` — name, role, contact, summary
  - `content/experience.json` — jobs array
  - `content/education.json` — degrees, GPA
  - `content/skills.json` — categories with skills array
  - `content/projects.json` — projects array with slug
  - `content/certifications.json` — certs array
- `src/data/schemas/*.ts` — Zod schemas (single source of truth for shape).
- `src/data/loaders.ts` — imports + parses + re-exports typed objects.
- `src/data/index.ts` — public API, components import from here.
- `prebuild` script runs `node scripts/validate-content.mjs` which uses
  Zod to validate all JSON files; fails build on error.

## Dead Code Cleanup

Remove (verified unused):

- `src/components/WorkTracker.jsx`
- `src/components/test.js`
- `src/components/test.txt`
- `src/index.css.backup`
- `src/layout/Header.jsx`
- `src/layout/Sidebar.jsx` (Sidebar is dead since navbar landed; layout
  files in `/layout/` are Header, Footer, MainLayout, Sidebar — keep
  Footer + MainLayout only)

Verify with `npx ts-prune` and `npx depcheck` before final commit.

## Risks

- **Resend deliverability:** use verified domain, monitor bounce rate.
- **Rate limit memory leak (dev):** document that prod must use Redis.
- **Lighthouse flakiness:** CI runs 3 times, takes median.
- **Bundle bloat from `react-hook-form`:** keep it; alternatives
  (`formik`) are heavier.
- **Migration breakage:** `cvData` consumers updated in same PR.

## Open Questions (none — resolved during brainstorm)

All choices confirmed:

- Stack: Vite + React (no Next.js / Astro)
- Contact: custom Vercel function + Resend (not Formspree / EmailJS)
- Deploy: Vercel
- Scope: full spec, all 10 items

## Definition of Done

- [ ] All 10 items shipped, each with its own commit and PR.
- [ ] Lighthouse perf ≥ 90, a11y ≥ 95, BP ≥ 85 on home + detail.
- [ ] axe-core: 0 serious, 0 critical violations.
- [ ] Coverage meets pyramid targets.
- [ ] CI green on `main`.
- [ ] Vercel production deploy reachable at the production URL.
- [ ] Contact form end-to-end tested with real Resend sandbox.
- [ ] Dead code removed; `ts-prune` + `depcheck` clean.
