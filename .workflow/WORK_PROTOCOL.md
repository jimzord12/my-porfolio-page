# Work Protocol

Conventions for human and agent contributors working on this repository.

---

## Session Start Checklist

1. Read `HANDOFF.md` — understand what the last session left behind.
2. Check open GitHub Issues: `gh issue list` or the Issues tab on GitHub.
3. Verify the working branch matches the task (see Branching below).
4. Run `npm run lint && npm test -- --run && npx tsc --noEmit` to confirm a clean baseline before touching any code.

---

## Picking Up Work

- Choose an open issue to work on.
- Assign it to yourself (or note the session in a comment).
- Create a branch following the naming convention below.
- When starting, add a comment to the issue: `Starting work — branch: <branch-name>`.

---

## Branching

Pattern: `<type>/<issue-number>-<short-slug>`

```
fix/6-cn-type-signature
fix/7-button-inside-anchor
docs/9-update-agents-md
chore/17-archive-tasks
```

Types mirror commitlint: `fix`, `feat`, `docs`, `chore`, `ci`, `refactor`, `perf`, `test`.

---

## Commit Conventions

This repo enforces [Conventional Commits](https://www.conventionalcommits.org/) via commitlint. Every commit must follow:

```
<type>(<optional scope>): <description>

# Examples
fix(helpers): widen cn() type signature to ClassValue[]
docs(agents): update commands section and remove stale test claim
chore(footer): remove commented-out dead social links
```

The commit-msg hook will reject non-conforming messages.

---

## Definition of Done

A task is done when **all** of the following are true:

- [ ] Code change is made and matches the acceptance criteria in the issue.
- [ ] `npm run lint` passes with no errors.
- [ ] `npx tsc --noEmit` passes.
- [ ] `npm test -- --run` passes.
- [ ] `npm run format:check` passes (or `npm run format` was run).
- [ ] `npm run build` completes without error.
- [ ] The GitHub Issue is closed with a reference to the commit or PR.
- [ ] `HANDOFF.md` is updated before ending the session.

---

## GitHub Issues

Issues are the single source of truth for work to be done.

| Operation | Command |
|---|---|
| List open | `gh issue list` |
| View issue | `gh issue view <number>` |
| Create | `gh issue create --title "..." --body "..." --label bug` |
| Comment | `gh issue comment <number> --body "..."` |
| Close | `gh issue close <number>` |

**Labels in use:**
- `bug` — correctness or validity problem
- `enhancement` — improvement or new feature
- `documentation` — docs-only change

**Closing from a commit:** include `Closes #<number>` in the commit body and the issue closes automatically when merged to `main`.

---

## Session End Checklist

1. Ensure all staged work is committed and pushed.
2. Close or comment on any issues touched in this session.
3. **Update `HANDOFF.md`** — this is mandatory, not optional.
4. If a new tech quirk was discovered, add it to `KNOWLEDGE.md`.

---

## Directory Layout (quick reference)

```
src/
  app/          # Next.js App Router (layout, page, globals.css)
  sections/     # Full-page sections composed in page.tsx
  components/   # Shared UI primitives
  assets/
    icons/      # SVGs — import as React component or append ?url for URL string
    images/     # Static images with barrel index.ts per subdirectory
  utils/        # helpers.ts (cn, duplicateItemsBy)

.workflow/      # This protocol, handoff state, and knowledge base
docs/           # ⚠ BUILD OUTPUT — GitHub Pages static export. Do not add source files here.
```

---

## Key Commands

```bash
npm run dev             # Dev server → localhost:3000
npm run build           # Static export → /docs (GitHub Pages)
npm run lint            # ESLint
npm run lint:fix        # ESLint with auto-fix
npm run format          # Prettier write
npm run format:check    # Prettier check (used in CI)
npm run typecheck       # tsc --noEmit
npm test                # Vitest watch
npm run test:run        # Vitest single run
npm run test:coverage   # Vitest coverage report
npm run analyze         # Bundle analyzer (ANALYZE=true build)
npm run lighthouse      # Lighthouse CI
```
