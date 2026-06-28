# Code Hygiene — Task List

---

## Task 1 — EditorConfig (S)

**Description:** Add `.editorconfig` to enforce consistent indentation, line endings, and charset across all editors and contributors.

**Files Affected:** `.editorconfig`

**Acceptance Criteria:**

- File exists with rules for indent style (spaces, 2), charset (utf-8), EOL (lf), trailing newline.
- Rules applied to TS/TSX, JSON, YAML, and Markdown separately.

**Verification:** `cat .editorconfig` shows correct content. Any editor respecting EditorConfig will auto-apply settings.

**Dependencies:** None

---

## Task 2 — Prettier Configuration (S)

**Description:** Add `.prettierrc` and `.prettierignore` so Prettier's config is explicit and consistent for all contributors. The `prettier-plugin-tailwindcss` plugin is already installed but silently inactive without a config file.

**Files Affected:** `.prettierrc`, `.prettierignore`

**Acceptance Criteria:**

- `.prettierrc` activates `prettier-plugin-tailwindcss`.
- `npx prettier --check src/` exits 0 (or lists files to fix).
- `.prettierignore` excludes `node_modules`, `.next`, `docs`, `public`.

**Verification:** `npx prettier --check src/app/page.tsx` runs without error.

**Dependencies:** None

---

## Task 3 — ESLint Enhancements (S)

**Description:** Add `eslint-config-prettier` (disables formatting rules that conflict with Prettier) and `eslint-plugin-unused-imports` (catches dead imports). Update `eslint.config.mjs`.

**Files Affected:** `eslint.config.mjs`, `package.json`

**Acceptance Criteria:**

- `npm run lint` passes.
- Adding a dummy unused import triggers an ESLint error.
- Prettier formatting conflicts do not appear as ESLint errors.

**Verification:** `npm run lint` exits 0.

**Dependencies:** Task 2 (Prettier config must exist before disabling conflicting rules)

---

## Task 4 — Vitest Setup (M)

**Description:** Install Vitest, `@vitejs/plugin-react`, `@testing-library/react`, `@testing-library/jest-dom`, and `jsdom`. Configure `vitest.config.ts`. Add `test` and `test:coverage` scripts. Write a smoke test for the `cn()` helper in `src/utils/helpers.ts` to prove the harness works.

**Files Affected:** `vitest.config.ts`, `package.json`, `src/utils/helpers.test.ts`

**Acceptance Criteria:**

- `npm test` runs and passes.
- `npm run test:coverage` generates a coverage report.
- The `cn()` helper test exercises both the merging and conditional class logic.

**Verification:** `npm test -- --run` exits 0.

**Dependencies:** None (independent of linting tasks)

---

## Task 5 — Husky + lint-staged (M)

**Description:** Install Husky v9 and lint-staged. Configure a `pre-commit` hook that runs lint-staged on staged files. lint-staged should run Prettier (write) then ESLint (fix) on `.ts/.tsx` files, and Prettier-only on `.json/.md/.css` files.

**Files Affected:** `package.json`, `.husky/pre-commit`

**Acceptance Criteria:**

- `git commit` triggers the pre-commit hook.
- Staging a file with a lint error blocks the commit and shows the error.
- Staging a correctly formatted file commits successfully.
- `CI=true` environment skips hooks (Husky v9 default).

**Verification:** `npx husky` initialises without error; `.husky/pre-commit` is executable.

**Dependencies:** Tasks 2, 3 (Prettier and ESLint must be configured)

---

## Task 6 — Commitlint + commit-msg Hook (S)

**Description:** Install `@commitlint/cli` and `@commitlint/config-conventional`. Add `commitlint.config.ts`. Wire a `commit-msg` Husky hook.

**Conventional commit format:** `type(scope?): description`  
Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `ci`, `perf`, `build`.

**Files Affected:** `commitlint.config.ts`, `.husky/commit-msg`, `package.json`

**Acceptance Criteria:**

- `git commit -m "bad message"` is rejected with a helpful error.
- `git commit -m "feat: add dark mode"` is accepted.

**Verification:** `echo "bad" | npx commitlint` exits non-zero; `echo "feat: good" | npx commitlint` exits 0.

**Dependencies:** Task 5 (Husky must be initialised)

---

## Task 7 — GitHub Actions CI Workflow (M)

**Description:** Create `.github/workflows/ci.yml` with a single `ci` job that runs on `push` (all branches) and `pull_request` (targeting `main`). Steps: checkout → Node.js setup (cache npm) → install → lint → type-check → test → build.

**Files Affected:** `.github/workflows/ci.yml`

**Acceptance Criteria:**

- Workflow file is valid YAML and passes `actionlint` (or GitHub's schema check).
- All steps are named clearly.
- Node version matches `package.json` engines (or latest LTS, 20.x).
- Build step uses `npm run build` and verifies the `/docs` output exists.
- Workflow skips Husky hooks (`HUSKY=0` env var).

**Verification:** Push to branch → GitHub Actions tab shows green run.

**Dependencies:** Tasks 3, 4 (lint and test scripts must be defined in `package.json`)

---

## Phase Gate — Final Check

After all tasks:

```bash
npm run lint        # must pass
npm test -- --run   # must pass
npm run build       # must produce /docs
git commit -m "bad" # must be rejected by commitlint hook
git commit -m "chore: verify hygiene setup"  # must succeed
```

Push branch → CI workflow must go green.
