# Knowledge Base

Discovered quirks, gotchas, and non-obvious constraints. Read this before exploring — it may save you from re-deriving something already known.

---

## Build & Deployment

### `/docs` is the static export output — not a docs directory
`next.config.mjs` sets `output: 'export'`. `npm run build` writes the entire static site to `/docs`, which GitHub Pages serves. **Never place source files, markdown, or config in `/docs`** — they will either be overwritten by the next build or served publicly as raw files at `dim-stamatakis.dev/...`.

### `npm ci` requires `--legacy-peer-deps`
The CI workflow uses `npm ci --legacy-peer-deps`. Without this flag, npm throws peer dependency conflicts (likely from `@testing-library/react` + React 19). Always use this flag for clean installs.

### Next.js Image Optimization is disabled
`next.config.mjs` sets `images: { unoptimized: true }` because static export does not support the Next.js image optimization API. Do not use features that require a server-side image pipeline (remote blur placeholders, etc.). `<Image>` from `next/image` works for layout/sizing only.

---

## SVG Imports

SVGs are handled by `@svgr/webpack`. Two import modes:

```ts
// React component (default) — use for inline SVGs with className/style props
import ArrowDown from '@/assets/icons/arrow-down.svg';

// URL string — use when you need a src attribute or background-image
import arrowUrl from '@/assets/icons/arrow-down.svg?url';
```

Forgetting `?url` and passing the component to a `src` prop will produce `[object Object]` at runtime with no type error.

---

## Tailwind

### Custom breakpoints — not standard Tailwind values
`tailwind.config.ts` overrides the default breakpoints entirely:

| Name | Width |
|---|---|
| `sm` | 375px |
| `md` | 768px |
| `lg` | 1200px |

`xl` and `2xl` are not defined. Do not assume standard Tailwind breakpoint values.

### `lg:md:` prefix stacking is invalid
Tailwind does not support stacking responsive prefixes like `lg:md:grid-cols-3`. The class is silently ignored. Use a single prefix: `lg:grid-cols-3`. (See issue #13.)

### Custom utility classes (defined in `globals.css`)
These are defined with `@layer base` and are available as plain Tailwind classes:

| Class | Effect |
|---|---|
| `.gradient-text` | green-400 → sky-500 gradient on text |
| `.gradient-bg` | green-400 → sky-500 gradient background |
| `.hero-glow-ring` | centered ring with emerald glow |
| `.center-abs-obj` | absolute centering (translate -50% -50%) |
| `.secondary-text-color` | `text-white/40` |
| `.tape-mask-edges` | fade-out left/right mask for scrolling tape |
| `.nav-item` / `.selected-nav-item` | header pill nav styles |

`.container` is also overridden in `@layer utilities` to set `lg:max-w-5xl`.

---

## `cn()` Utility

`src/utils/helpers.ts` exports `cn()` which wraps `clsx + twMerge`. As of the current code, its signature is `...string[]` — which means passing objects or arrays will fail at the type level. See issue #6 for the fix. Until resolved, only pass string arguments.

### Inconsistent usage across components
`Button.tsx`, `Card.tsx`, and `ToolBoxItems.tsx` import `twMerge` or `clsx` directly instead of using `cn()`. This is a known inconsistency tracked in issue #12. Prefer `cn()` in all new code.

---

## TypeScript

### `strict: true` is enabled
All new code must satisfy strict TypeScript. Pay attention to: `noImplicitAny`, `strictNullChecks`, `strictFunctionTypes`.

### Path alias
`@/` maps to `src/`. Configured in both `tsconfig.json` and `vitest.config.ts`.

---

## Testing

### Vitest — not Jest
The test runner is Vitest with jsdom. The config is in `vitest.config.ts`. Test files follow the `*.test.ts` / `*.test.tsx` convention co-located with source files or in `src/test/`.

### Server Components cannot be tested directly
Next.js App Router Server Components use async patterns that jsdom cannot render. Only test utilities, hooks, and Client Components (`'use client'`). The current test coverage is limited to `src/utils/helpers.ts`.

---

## Husky Hooks

Three hooks are active:

| Hook | Runs | Command |
|---|---|---|
| `pre-commit` | On every commit | `npx lint-staged` (Prettier + ESLint on staged files) |
| `pre-push` | On every push | `npx tsc --noEmit` |
| `commit-msg` | On every commit | `npx commitlint` (enforces conventional commits) |

In CI, set `HUSKY=0` to skip all hooks. The GitHub Actions workflow already does this.

---

## Known Typos (existing in codebase — tracked in issue #10)

| File | Location | Typo |
|---|---|---|
| `src/sections/Hero.tsx:100` | User-visible text | `desings` → `designs` |
| `src/sections/About.tsx:130` | User-visible text | `expeptional` → `exceptional` |
| `src/sections/About.tsx:101` | Variable name | `constraitRef` → `constraintRef` |
| `src/sections/Contact.tsx:6-7` | Gmail URL body | `Intresting` / `teresting` → `Interesting` |
| `src/assets/icons/techLogos/index.ts:5` | Export name | `EthereumIcom` → `EthereumIcon` |

The `EthereumIcom` typo is used by name in `About.tsx` — fix both the barrel export and the import site together.
