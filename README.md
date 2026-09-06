# Muhammad Quways Al-Qarany — Full-Stack Developer

Recruiter-facing portfolio for Muhammad Quways Al-Qarany, a Computer Engineering graduate building reliable web and mobile products.

**Live portfolio:** https://portofolio-eight-liart.vercel.app
**GitHub:** https://github.com/nakamino24
**LinkedIn:** https://www.linkedin.com/in/muhammadquways

## Featured projects

### Stokku

Source: https://github.com/nakamino24/stokku
Live application: https://stokku-nakamino24s-projects.vercel.app

An inventory and operations platform for products, suppliers, warehouses, stock levels, and stock movements. The public repository contains a TypeScript monorepo with a Next.js/React web app, Node.js/Express API, PostgreSQL/Prisma data layer, organization-aware modeling, authentication, validation, automated tests, and GitHub Actions checks.

### Wallume

Source: https://github.com/nakamino24/Wallume

A personal finance mobile platform for wallets, transactions, budgets, goals, recurring bills, investments, and financial health. The repository combines an Expo SDK 54 / React Native client with a Python/FastAPI backend and MongoDB. It currently targets an internal preview; no public demo or current APK is advertised.

## Portfolio architecture

This site is a small React 18 + Vite application using feature-oriented components, reusable UI helpers, Tailwind CSS, and a React Context theme switcher. Portfolio content is kept in `src/shared/data/cvData.js`; project cards are rendered from that data rather than separate hardcoded case-study components.

The portfolio itself is JavaScript/JSX. It demonstrates responsive UI composition, accessible navigation, semantic sections, light/dark themes, and direct links to public source code and contact channels.

## Run locally

Requirements: Node.js 20+ and npm.

```bash
git clone https://github.com/nakamino24/Portofolio.git
cd Portofolio
npm ci
npm run dev
```

Useful checks:

```bash
npm run lint
npm run build
```

## Repository structure

```text
src/
├── features/        # page sections
├── layout/          # navbar, page shell, footer
├── shared/context/  # theme state
├── shared/data/     # evidence-based portfolio content
├── shared/ui/       # reusable primitives
└── shared/utils/    # small helpers
public/              # favicon, project screenshots, social image
```

Claims in this README and on the site are intentionally limited to evidence visible in the portfolio, Stokku, and Wallume repositories. No performance score, user count, coverage percentage, accessibility certification, revenue impact, or production scale is claimed.

## License

MIT — see [LICENSE](LICENSE).
