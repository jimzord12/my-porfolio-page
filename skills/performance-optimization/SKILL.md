---
name: performance-optimization
description: Measure before optimizing. Performance work without measurement is guessing.
when-to-use: When Core Web Vitals are poor, when profiling reveals bottlenecks, or when /webperf surfaces issues.
---

# Performance Optimization

"Measure before optimizing. Performance work without measurement is guessing."

Don't optimize before you have evidence of a problem. Premature optimization adds complexity that costs more than the performance it gains.

## Workflow

1. **Measure** — Establish baseline metrics (Lighthouse, real user data)
2. **Identify** — Pinpoint actual bottlenecks through profiling
3. **Fix** — Address the specific issue
4. **Verify** — Confirm improvement with new measurements
5. **Guard** — Prevent regression through monitoring or performance budgets

## Targets

| Metric | Good | Needs Work |
|--------|------|------------|
| LCP | ≤ 2.5s | > 4.0s |
| INP | ≤ 200ms | > 500ms |
| CLS | ≤ 0.1 | > 0.25 |

## Common Issues and Fixes

### Images (most common LCP culprit)

- Use modern formats (WebP)
- Set explicit `width` and `height` to prevent CLS
- `loading="lazy"` for below-fold images
- `fetchpriority="high"` on the hero/LCP image
- **This project:** `next/image` is configured with `unoptimized: true` — pre-optimize images before adding them to `src/assets/images/`

### JavaScript

- Code split with dynamic `import()` for non-critical components
- Profile before using `React.memo()`, `useMemo()`, `useCallback()` — they add overhead when misapplied
- Break long tasks (> 50ms) with `scheduler.yield()` to keep INP low
- Defer non-critical work (analytics, logging) out of event handlers

### Fonts

- This project loads Inter and Calistoga via `next/font/google` — this is already optimal (automatic WOFF2, `font-display: swap`, subsets)
- Don't add additional Google Fonts outside of `layout.tsx` without going through `next/font`

### Animations

- Use `transform` and `opacity` for animations (GPU-accelerated, no layout reflow)
- The `motion` library (already in use) handles this correctly
- Respect `prefers-reduced-motion`: wrap animations in a media query check or use Motion's built-in support

### Bundle Size

```bash
npx next build && npx next-bundle-analyzer
```

Look for unexpectedly large dependencies. Common culprits: moment.js, lodash (use tree-shaken imports), icon libraries (import only what you use).

## Measurement Commands

```bash
# Lighthouse
npx lighthouse http://localhost:3000 --output json --output-path ./report.json

# Web Vitals in-code
import { onLCP, onINP, onCLS } from 'web-vitals';
onLCP(console.log);
onINP(console.log);
onCLS(console.log);
```

See `references/performance-checklist.md` for the complete checklist.
