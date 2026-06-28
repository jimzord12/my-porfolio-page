# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at localhost:3000
npm run build     # Static export to /docs (used for GitHub Pages deployment)
npm run lint      # Run ESLint via next lint
```

No test suite is configured. Format code with Prettier before committing:

```bash
npx prettier --write .
```

## Architecture

Single-page portfolio for Dimitris Stamatakis (Full-Stack Web3 Developer). The entire page is assembled in `src/app/page.tsx` by composing section components in order: Header → Hero → Projects → Tape → Testimonials → About → Contact → Footer.

**Directory layout:**
- `src/sections/` — top-level page sections, each a self-contained component
- `src/components/` — shared primitives (`Card`, `CardHeader`, `SectionHeader`, `Button`, `GrainBG`, `HeroOrbit`, `TechIcon`, `ToolBoxItems`)
- `src/assets/icons/` — SVG icons (general) and `techLogos/` (tech stack icons with barrel `index.ts`)
- `src/assets/images/` — static images with barrel `index.ts` files per subdirectory
- `src/utils/helpers.ts` — `cn()` (clsx + twMerge) and `duplicateItemsBy()` for infinite-scroll tape

**Path alias:** `@/` maps to `src/`.

## Key Patterns

**SVG imports** use `@svgr/webpack` — SVGs are React components by default. Append `?url` to get a URL string instead:

```ts
import ArrowDown from '@/assets/icons/arrow-down.svg';   // React component
import url from '@/assets/icons/arrow-down.svg?url';     // URL string
```

**Styling** — Tailwind with custom utility classes defined in `src/app/globals.css`:
- `.gradient-text` / `.gradient-bg` — green-400 → sky-500 gradient
- `.hero-glow-ring` — centered ring with emerald glow shadow
- `.center-abs-obj` — absolute centering helper
- `.secondary-text-color` — `text-white/40`
- `.tape-mask-edges` — fade-out mask on left/right edges
- `.nav-item` / `.selected-nav-item` — header nav pill styles

Use `cn()` from `@/utils/helpers` for conditional Tailwind classes (combines clsx + tailwind-merge). Prettier sorts Tailwind classes automatically via `prettier-plugin-tailwindcss`.

**Fonts:** Inter (`--font-sans`) and Calistoga (`--font-serif`) loaded via `next/font/google` in `layout.tsx`. Use `font-sans` / `font-serif` Tailwind classes to apply them.

**Animations:** The `motion` package (Motion for React, formerly Framer Motion) is used for drag interactions in `About.tsx` and scroll-based animations. `About.tsx` is a Client Component (`'use client'`) due to hooks and motion usage.

## Static Export & Deployment

`next.config.mjs` sets `output: 'export'` — `npm run build` writes to `/docs` which is served as GitHub Pages. Next.js Image Optimization is disabled (`unoptimized: true`) because static export doesn't support the image API. Do not use `next/image` features that require a server (blur placeholders from remote URLs, etc.).
