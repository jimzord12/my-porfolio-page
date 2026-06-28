---
name: git-workflow-and-versioning
description: Treat commits as save points, branches as isolated environments, and history as a record of decisions.
when-to-use: Before committing, branching, or reviewing git history.
---

# Git Workflow and Versioning

Git is your safety mechanism. Commits are save points. Branches are isolated work environments. History is a record of decisions — make it worth reading.

## Trunk-Based Development

- `main` is always deployable
- Feature work happens on short-lived branches (1–3 days maximum)
- Long-lived development branches are hidden costs: they diverge, create merge conflicts, and delay integration

**Branch naming:**

- `feature/description`
- `fix/description`
- `chore/description`

Delete branches after merging.

## Atomic Commits

Each commit accomplishes one logical task.

**Good:**

```
feat: add hero section animation on scroll
fix: correct contact form link in header
test: add unit tests for cn() utility
```

**Bad:**

```
various changes
update stuff
wip
```

## Commit Message Format

```
type: short description (≤ 72 chars)

[optional body explaining WHY, not what]
[reference issue or PR if relevant]
```

**Types:** `feat`, `fix`, `refactor`, `test`, `docs`, `chore`, `style`, `perf`

Explain _why_ a change exists, not just what it does. The diff shows the what; the message should capture the reasoning.

## Save Point Pattern

Make a change → test it → commit if successful → revert if it fails. Never lose more than one increment of work.

## Pre-Commit Checks

Before every commit:

- [ ] `git diff --cached | grep -i "password\|secret\|api_key\|token"` — no secrets
- [ ] Tests pass
- [ ] Lint passes (`npm run lint`)
- [ ] The staged diff contains only what's intended

## Change Summaries (for Pull Requests)

A good PR description includes:

- What changed and why
- What was intentionally left unchanged
- Any potential concerns or follow-up items

This helps reviewers understand scope decisions without guessing.

## Sizing

Target ~100 lines changed per commit. Up to 300 is acceptable for a single logical change. Above 1000 lines, split into smaller commits.

## Red Flags

- Accumulating large amounts of uncommitted changes
- Vague commit messages ("fix", "update", "changes")
- Mixing formatting changes with behavior changes in the same commit
- Committing generated files, build output, or `.env` files
- Using `git push --force` on shared branches
