# Dimitris Stamatakis — Portfolio

Personal portfolio for Dimitris Stamatakis, Full-Stack Web3 Developer.

**Live site:** https://dim-stamatakis.dev

## Local Development

```bash
npm install
npm run dev      # dev server at http://localhost:3000
```

## Scripts

| Command                 | Description                             |
| ----------------------- | --------------------------------------- |
| `npm run dev`           | Start dev server at localhost:3000      |
| `npm run build`         | Static export to `/docs` (GitHub Pages) |
| `npm run lint`          | Run ESLint                              |
| `npm run lint:fix`      | Run ESLint with auto-fix                |
| `npm run typecheck`     | TypeScript type check                   |
| `npm run format`        | Format all files with Prettier          |
| `npm run format:check`  | Check formatting without writing        |
| `npm test`              | Run Vitest in watch mode                |
| `npm run test:run`      | Run Vitest once                         |
| `npm run test:coverage` | Run Vitest with coverage report         |
| `npm run analyze`       | Bundle analyzer (`ANALYZE=true` build)  |

## Deployment

`npm run build` writes a static export to `/docs`, which is served via GitHub Pages. The project uses `output: 'export'` in `next.config.mjs`.

## Architecture

The page is assembled in `src/app/page.tsx` by composing section components:

```
Header → Hero → Projects → Tape → Testimonials → About → Contact → Footer
```

- `src/sections/` — top-level page sections
- `src/components/` — shared primitives (Card, Button, HeroOrbit, etc.)
- `src/assets/` — SVG icons and images
- `src/utils/helpers.ts` — `cn()` and `duplicateItemsBy()`

For agent and contributor guidance, see [AGENTS.md](./AGENTS.md).
