# Code Hygiene Setup — Plan

## Current State

| Tool | Status |
|---|---|
| ESLint | Installed, minimal flat config (`next/core-web-vitals + next/typescript`) |
| Prettier | Installed, **no config file** (no `.prettierrc`) |
| Testing | **None** |
| Husky | **None** |
| Commitlint | **None** |
| lint-staged | **None** |
| GitHub Actions | **None** (no `.github/` directory) |
| EditorConfig | **None** |

TypeScript `strict: true` is already on — good baseline.

---

## Dependency Graph

```
EditorConfig (standalone)
    │
Prettier config (standalone)
    │
ESLint enhancements (depends on Prettier config for eslint-config-prettier)
    │
Vitest setup (standalone, only needs TS config)
    │
Husky install ──────────────────────────────────┐
    │                                            │
lint-staged (pre-commit hook via Husky)    Commitlint (commit-msg hook via Husky)
    │                                            │
    └──────────────────── CI (validates all of the above remotely)
```

Implementation order: **1 → 2 → 3 → 4 → 5 → 6 → 7**

---

## Risk Assessment

| Risk | Mitigation |
|---|---|
| Husky hooks block commits in CI | Add `CI=true` env var check; Husky v9 skips hooks when `CI` is set |
| Vitest conflicts with Next.js App Router server components | Use `jsdom` environment + wrap server-only code behind boundaries; test utils/components only |
| ESLint flat config incompatible with some community plugins | Pin versions; use only well-maintained plugins |
| `prettier-plugin-tailwindcss` already installed but no config | Add `.prettierrc` to activate it — without one Prettier silently ignores the plugin |

---

## Parallelization Opportunities

- Tasks 1 (EditorConfig) and 2 (Prettier) are completely independent — can be done together.
- Task 4 (Vitest) is independent of Task 3 (ESLint) — can be done in parallel.
- Task 6 (Husky) must follow Prettier/ESLint/Vitest being configured.
- Task 7 (CI) can be written alongside Task 6.

---

## Extra Recommendations (included in plan)

- `.editorconfig` — enforces consistent indent/EOL across editors, zero runtime cost.
- `eslint-config-prettier` — disables ESLint formatting rules that conflict with Prettier, so they don't fight each other.
- `@typescript-eslint/no-unused-vars` + `unused-imports` plugin — catch dead code early.
- `husky` `pre-push` hook running `tsc --noEmit` — catches type errors before they hit CI.
- Vitest over Jest — native ESM support, same API, ~10× faster, no Babel config needed for Next.js 15.
