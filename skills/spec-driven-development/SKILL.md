---
name: spec-driven-development
description: Write a structured specification before writing code. The spec is the shared source of truth between you and the human engineer.
when-to-use: New projects, ambiguous requirements, changes spanning multiple modules, architectural decisions.
---

# Spec-Driven Development

"Write a structured specification before writing code." The spec defines what we're building, why, and how we'll know it's done. It is the shared source of truth that prevents silent misunderstandings from cascading into wasted effort.

## When to Use

- Starting any new project, feature, or substantial change
- Requirements feel unclear or assumed
- The change spans multiple modules or interfaces
- An architectural decision is involved
- You want a shared source of truth before implementation begins

Skip for single-line fixes or straightforward, clearly-scoped corrections.

## Process

### Phase 1 — Specify

**Surface assumptions first:**

```
ASSUMPTIONS I'M MAKING:
1. [technology choice or constraint]
2. [architectural decision]
3. [scope boundary]
→ Correct me now or I'll proceed with these.
```

**Draft the six-part specification:**

1. **Objective** — What are we building and why? Who uses it?
2. **Commands / Entry Points** — How is this invoked or accessed?
3. **Structure** — What files, components, or modules will be created or modified?
4. **Style / Conventions** — What patterns apply? Reference CLAUDE.md and existing code conventions.
5. **Testing** — How do we verify this works? What constitutes a passing implementation?
6. **Boundaries** — What is explicitly out of scope?

### Phase 2 — Plan

Map components, dependencies, and risks. Identify verification checkpoints. Do not write implementation code.

### Phase 3 — Tasks

Break work into discrete, reviewable items with acceptance criteria. Each task must be independently testable.

### Phase 4 — Implement

Execute tasks following `skills/incremental-implementation/SKILL.md`. The spec remains the authority throughout.

## Artifacts

- **`SPEC.md`** — Written at the project root (or `docs/SPEC.md`). Committed to version control.
- **`tasks/plan.md`** — Dependency map and risk assessment
- **`tasks/todo.md`** — Ordered task list with acceptance criteria

## Approval Gate

Present the spec and **wait for explicit human approval** before writing any implementation code. Tentative responses do not count.

## Living Document

Update `SPEC.md` when decisions change, scope shifts, or new constraints emerge. The spec is not a one-time artifact — it tracks current reality.

## Red Flags

- Writing implementation code before the spec is approved
- A spec without acceptance criteria
- Skipping this step because "it's obvious"
- Treating the spec as immutable once written
