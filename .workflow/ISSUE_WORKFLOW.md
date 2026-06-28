# Issue Workflow

How to move from a GitHub Issue to a closed issue using the skills available in this repo. This is a routing guide — it tells you which skills to invoke and in what order based on issue type and size.

---

## Step 0 — Always do this first

1. Read `HANDOFF.md` and `KNOWLEDGE.md`.
2. Pick an open issue and assign it to yourself (or note the session in a comment).
3. Create a branch: `<type>/<issue-number>-<slug>` (see `WORK_PROTOCOL.md`).
4. Confirm a clean baseline: `npm run lint && npm test -- --run && npx tsc --noEmit`.

---

## Sizing an Issue

Before picking a workflow, size the issue:

| Size | Signal | Examples from open issues |
|---|---|---|
| **S** | Single file, < 20 lines, no behaviour change | #10 (typos), #13 (Tailwind prefix), #16 (dead code), #17 (stale files) |
| **M** | 2–5 files, clear scope, bounded change | #6 (cn type), #7 (button/anchor), #9 (AGENTS.md), #12 (cn consistency), #14 (CI step), #15 (README), #18 (robots/sitemap) |
| **L** | Multi-file, new behaviour, or unclear requirements | #8 (og-image), #11 (scroll nav) |

When in doubt, size up.

---

## Workflows by Size

### S — Small
> Typos, one-liner fixes, config tweaks, docs-only changes.

```
fix → /review → commit (Closes #N) → close issue
```

- Skip `/spec` and `/plan` — the issue body is the spec.
- `/review` is still required. One-liners can break things.
- Commit message must reference the issue: `fix(hero): correct typo in CTA text — Closes #10`

---

### M — Medium
> Multi-file bugs, small enhancements, CI or config changes, documentation rewrites.

```
/plan → implement (/build) → /test (if logic changed) → /review → commit → close issue
```

- **`/plan`** — Read the issue, map out affected files, list tasks in order. Don't write code yet.
- **`/build`** — Implement one task at a time. Commit after each passing slice.
- **`/test`** — Write or update tests if any logic changed. Not required for pure docs or config.
- **`/review`** — Run before pushing. Fix anything flagged as Required or Critical.

---

### L — Large
> New behaviour, architectural changes, anything spanning more than 5 files or touching shared components.

```
/spec → /plan → /build → /test → /code-simplify → /review → /ship → commit → close issue
```

- **`/spec`** — Write a structured spec first. Get confirmation before coding.
- **`/plan`** — Decompose the approved spec into ordered, verifiable tasks.
- **`/build`** — Implement in thin vertical slices. Each slice must leave the app in a working state.
- **`/test`** — TDD cycle: red → green → refactor. Tests before code for new behaviour.
- **`/code-simplify`** — After implementation, check for complexity that crept in.
- **`/review`** — Full five-axis review.
- **`/ship`** — Pre-launch checklist. Runs code-reviewer, security-auditor, and web-performance-auditor in parallel. Required before merging any L issue to `main`.

---

## Modifiers — Add These When the Issue Involves…

These stack on top of the size workflow. Apply as relevant.

| Context | Add this skill | When |
|---|---|---|
| Any UI change | `frontend-ui-engineering` skill | Before starting implementation |
| HTML, CSS, or browser API | `modern-web-guidance` skill | Before starting implementation — web APIs evolve fast |
| Performance concern | `/webperf` | Run before and after — compare scores |
| Security-sensitive code | `security-and-hardening` skill | During implementation and in `/review` |

---

## Skill Quick Reference

| Slash Command | What it does | When to reach for it |
|---|---|---|
| `/spec` | Writes a structured spec for approval before any code | Ambiguous requirements, new feature, multi-module change |
| `/plan` | Breaks a spec into ordered, verifiable tasks | After spec is approved, or before any M/L implementation |
| `/build` | Implements one task at a time in thin vertical slices | During implementation of any planned task |
| `/test` | TDD cycle — failing test first, then minimal code | Any new behaviour or bug fix with logic changes |
| `/review` | Five-axis code review (correctness, readability, arch, security, perf) | Before every merge, regardless of size |
| `/code-simplify` | Reduces complexity without changing behaviour | After implementing, when code feels harder to read than it should |
| `/ship` | Parallel pre-launch review (3 agents: code, security, perf) | Before merging L issues to `main` |
| `/webperf` | Performance audit against Lighthouse / CWV data | When perf is a concern or after a significant UI change |

---

## Closing an Issue

A closed issue must satisfy the Definition of Done in `WORK_PROTOCOL.md`. The short version:

- `npm run lint` ✓
- `npx tsc --noEmit` ✓
- `npm test -- --run` ✓
- `npm run format:check` ✓
- `npm run build` ✓
- `/review` was run and findings addressed
- Commit body includes `Closes #<number>`
- `HANDOFF.md` updated before ending the session
