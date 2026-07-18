# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` – Start development server with Vite (http://localhost:5173)
- `npm run build` – Production build output to `dist/`
- `npm run preview` – Preview production build locally
- `npm run lint` – Run ESLint on source files
- `npm run format` – Format code with Prettier

## Project Architecture

- **Framework**: React 18 with Vite bundler
- **Styling**: Tailwind CSS via `tailwind.config.js` and PostCSS
- **State Management**:
  - Theme context (`src/context/ThemeContext.jsx`) provides dark/light mode toggle persisted to `localStorage`
  - Custom `useTheme` hook (`src/hooks/useTheme.js`) consumes the context
- **Layout**:
  - `MainLayout` (`src/layout/MainLayout.jsx`) wraps pages, applies base classes, and includes `Navbar` and `Footer`
  - `Navbar` (`src/components/Navbar.jsx`) – navigation links, theme toggle
  - `Footer` (`src/layout/Footer.jsx`) – static footer content
- **Pages/Sections** (mounted via `App.jsx`):
  - Hero, About, Skills, Experience, Projects, Certifications, Contact
  - Each section is a self‑contained component under `src/components/`
- **Data**:
  - Static portfolio data lives in `src/data/cvData.js` (exported as a single object)
  - Components import data from this file where needed
- **UI Component Library**:
  - Reusable UI primitives under `src/components/ui/` (Button, Input, Card, Badge, etc.)
  - Built with Tailwind utility classes; accept props for variants and children
- **Assets**:
  - Public folder (`public/`) holds static assets like `vite.svg`
  - Images referenced in `cvData.js` should be placed in `public/` and accessed via `/image.png`

## Key Conventions

- File extensions: `.jsx` for React components, `.js` for plain JavaScript utilities
- Imports are absolute from `src/` (e.g., `import { useTheme } from '../hooks/useTheme'`)
- Components use functional syntax with arrow functions or regular function declarations
- Props are documented via PropTypes where present (see `MainLayout.propTypes`)
- Styling follows Tailwind utility‑first approach; avoid custom CSS unless absolutely necessary
- Dark mode is handled by adding/removing the `dark` class on `<html>` via ThemeContext effect
- Linting rules are defined in `.eslintrc.cjs`; formatting in `.prettierrc.js`
- Git hooks via Husky run lint‑staged on staged files (see `.lintstagedrc.json`)

## Adding a New Section

1. Create component file in `src/components/` (e.g., `NewSection.jsx`)
2. Import the component in `src/App.jsx` and place it in the desired order
3. If the section needs data, add it to `src/data/cvData.js` and import from there
4. Use existing UI primitives from `src/components/ui/` for consistency
5. Ensure the component follows the same prop‑driven pattern and uses the `useTheme` hook if it needs dark‑mode awareness

## Testing

Currently the project does not contain automated tests. When adding tests:

- Place test files alongside components with `.test.js` or `.test.jsx` suffix
- Use Vitest (bundled with Vite) or Jest if preferred
- Run tests via `npm test` after adding a test script to `package.json`

## Common Troubleshooting

- **Tailwind classes not applying**: Ensure `postcss.config.js` and `tailwind.config.js` are present and that the build step (`npm run dev`) is running.
- **Dark mode not persisting**: Verify `localStorage` key `darkMode` is being set; check browser console for errors in `ThemeContext.jsx`.
- **Build fails on asset import**: Assets should be imported as URL strings (`/logo.png`) or placed in `public/` and referenced relatively.
