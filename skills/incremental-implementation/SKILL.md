---
name: incremental-implementation
description: Build features in thin vertical slices. Each increment leaves the system in a working, testable state before moving to the next.
when-to-use: Any time you're implementing code from a task list.
---

# Incremental Implementation

"Build in thin vertical slices — implement one piece, test it, verify it, then expand."

The cycle: **implement → test → verify → commit → next slice.**

## Core Principles

**Simplicity first:** Avoid premature abstraction. Three similar lines beat one generic abstraction. Add indirection only when a concrete reason exists.

**Scope discipline:** Touch only the files needed for this task. Don't refactor adjacent code or add unspecified features.

**One thing per increment:** Separate unrelated changes into distinct commits.

**Keep it compilable:** The project must build and tests must pass between every slice.

## Workflow

### For Each Task

1. Select the next incomplete task and read its acceptance criteria
2. Review existing code and patterns relevant to the task
3. Write a failing test (RED) — see `skills/test-driven-development/SKILL.md`
4. Write the minimal code to make the test pass (GREEN)
5. Run the full test suite; confirm no regressions
6. Verify the build succeeds
7. Create a descriptive atomic commit
8. Mark the task complete

### Slicing Strategies

**Vertical slices** — Complete end-to-end functionality per slice (preferred)

**Contract-first** — Define the interface before implementing either side (good for parallel work)

**Risk-first** — Tackle the uncertain, risky piece first to fail fast

## Safety Measures

- Use feature flags for incomplete features visible to users
- Default to conservative, additive changes over destructive ones
- Make each increment independently revertable

## Blocker Protocol

Pause and request human decision when you encounter:

- Failing tests with unclear cause
- Build failures
- Spec ambiguity or conflicting requirements
- High-risk changes (auth, data deletion, secrets, deploys)
- Irreversible operations

## Red Flags

- Writing more than 100 lines without running tests
- Mixing unrelated changes in one commit
- Breaking the build between increments
- Skipping the RED phase (writing implementation before failing test)
- Adding features not in the spec because they "seem useful"
