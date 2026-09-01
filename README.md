# Muhammad Quways Al-Qarany — Software Engineer Portfolio

Portfolio for Junior / Associate Software Engineer, Full-Stack Developer, Backend Developer, and Frontend Developer roles.

**Live portfolio:** https://myporto-lime.vercel.app  
**GitHub:** https://github.com/nakamino24  
**LinkedIn:** https://www.linkedin.com/in/muhammadquways

## About

I am a Computer Engineering graduate with prior software engineering experience and current enterprise IT procurement experience. This portfolio focuses on code and project evidence rather than proficiency ratings or unverified performance claims.

## Strongest Engineering Sample — Stokku

**Source:** https://github.com/nakamino24/stokku  
**Live project:** https://stokku-nakamino24s-projects.vercel.app

Stokku is a public TypeScript monorepo for inventory and operations workflows. Repository evidence includes:

- Next.js 13 + React 18 web application
- Node.js + Express API written in TypeScript
- PostgreSQL data model managed with Prisma
- inventory entities for products, variants, suppliers, warehouses, bins, stock levels, and stock movements
- JWT authentication middleware that validates bearer access tokens
- organization-role and permission modeling in the database schema
- Jest test scripts for web/API packages and Playwright E2E scripts for the web package
- root build, lint, typecheck, and test commands coordinated with Turbo
- committed GitHub Actions workflow definitions

The portfolio case study separates implemented repository evidence from limitations and next improvements.

## This Portfolio Repository

The portfolio itself is intentionally smaller than Stokku. It demonstrates:

- React 18 components organized by feature
- reusable UI primitives under `src/shared/ui`
- dark/light theme state with React Context
- Tailwind CSS styling
- ESLint and Prettier configuration
- Vite build tooling
- direct email, LinkedIn, and GitHub contact actions

This repository is JavaScript/JSX, not TypeScript. It does not claim verified Lighthouse scores, WCAG conformance, test coverage, bundle-size targets, or production-readiness without supporting reports.

## Professional Work

Professional project descriptions are sanitized. Internal source code, proprietary architecture, user counts, performance metrics, credentials, and private deployment details are not published as portfolio evidence.

## Run Locally

Requirements: Node.js 20+ and npm.

```bash
git clone https://github.com/nakamino24/Portofolio.git
cd Portofolio
npm install
npm run dev
```

Useful checks:

```bash
npm run lint
npm run build
```

## Repository Structure

```text
src/
├── features/        # Hero, skills, projects, experience, contact, etc.
├── layout/          # Navbar, footer, page layout
├── shared/
│   ├── context/     # Theme context
│   ├── data/        # Portfolio content
│   ├── hooks/       # Shared hooks
│   ├── ui/          # Reusable UI primitives
│   └── utils/       # Small utilities
├── App.jsx
└── main.jsx
```

## Verification Notes

The previous README contained claims for Husky, code splitting/lazy loading, WCAG AA, Lighthouse scores, measured bundle sizes, and production readiness. Those claims were removed because this repository did not contain sufficient evidence to support them.

Testing and performance reporting remain worthwhile future improvements, but they should only be presented as completed when reproducible checks and reports exist.

## License

MIT — see `LICENSE`.
