# Performance Checklist

Quick reference for web performance. Use alongside `skills/performance-optimization/SKILL.md` and the `/webperf` command.

## Core Web Vitals Targets

| Metric                          | Good    | Needs Work | Poor    |
| ------------------------------- | ------- | ---------- | ------- |
| LCP (Largest Contentful Paint)  | ≤ 2.5s  | ≤ 4.0s     | > 4.0s  |
| INP (Interaction to Next Paint) | ≤ 200ms | ≤ 500ms    | > 500ms |
| CLS (Cumulative Layout Shift)   | ≤ 0.1   | ≤ 0.25     | > 0.25  |

## Images

- [ ] Modern formats (WebP, AVIF)
- [ ] Responsive sizing (`srcset` and `sizes`)
- [ ] Explicit `width` and `height` on all images (prevents CLS)
- [ ] Below-the-fold images use `loading="lazy"` and `decoding="async"`
- [ ] Hero/LCP image uses `fetchpriority="high"` and no lazy loading
- [ ] **Next.js note:** `next/image` handles most of the above automatically; `unoptimized: true` (set in this project) disables server-side optimization — ensure images are pre-optimized

## JavaScript

- [ ] Bundle size under 200KB gzipped (initial load)
- [ ] Code splitting with dynamic `import()` for routes and heavy features
- [ ] No blocking JavaScript in `<head>`
- [ ] `React.memo()` on expensive components that re-render with same props
- [ ] `useMemo()` / `useCallback()` only where profiling shows benefit (not by default)
- [ ] Long tasks (> 50ms) broken up with `scheduler.yield()` or `yieldToMain`
- [ ] Non-critical work (analytics, logging) deferred out of event handlers
- [ ] Third-party scripts loaded with `async` / `defer`

## CSS / Fonts

- [ ] Limited to 2–3 font families, 2–3 weights each
- [ ] WOFF2 format only
- [ ] LCP-critical fonts preloaded: `<link rel="preload" as="font" type="font/woff2" crossorigin>`
- [ ] `font-display: swap` to avoid FOIT blocking render
- [ ] Animations use `transform` and `opacity` (GPU-accelerated)
- [ ] No unnecessary full-page re-renders

## Network

- [ ] Static assets cached with long `max-age` + content hashing
- [ ] HTTP/2 or HTTP/3 enabled
- [ ] Resources preconnected for known origins: `<link rel="preconnect">`
- [ ] No unnecessary redirects

## Measurement

```bash
# Lighthouse
npx lighthouse https://localhost:3000 --output json --output-path ./report.json

# Web Vitals in code
import { onLCP, onINP, onCLS } from 'web-vitals';
onLCP(console.log);
onINP(console.log);
onCLS(console.log);
```

## Common Anti-Patterns

| Anti-Pattern         | Impact                         | Fix                                         |
| -------------------- | ------------------------------ | ------------------------------------------- |
| Unoptimized images   | Slow LCP, wasted bandwidth     | WebP, responsive sizes, explicit dimensions |
| Large bundles        | Slow TTI                       | Code split, tree shake, audit deps          |
| Blocking main thread | Poor INP                       | Chunk long tasks, offload to Web Workers    |
| Layout thrashing     | CLS, jank                      | Batch DOM reads then writes                 |
| Memory leaks         | Growing memory, eventual crash | Clean up listeners, intervals, refs         |
| No lazy loading      | Slow initial load              | Lazy-load below-fold images and routes      |
