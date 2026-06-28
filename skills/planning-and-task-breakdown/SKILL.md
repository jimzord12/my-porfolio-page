---
name: planning-and-task-breakdown
description: Decompose work into small, verifiable, dependency-ordered tasks. Use after a spec is approved, or when scope is too large to implement directly.
when-to-use: After spec approval, before beginning implementation of any feature larger than 2-3 files.
---

# Planning and Task Breakdown

"Good task breakdown is the difference between an agent that completes work reliably and one that produces a tangled mess."

Tasks should be small enough to implement, test, and verify in a single focused session.

## Process

### Step 1 — Read-Only Analysis

Enter read-only mode. Study the spec, existing patterns, and architectural constraints. **Do not write any implementation code during planning.**

### Step 2 — Map Dependencies

Identify which components depend on which. Build a mental or written dependency graph. Implementation follows this graph bottom-up: foundations before dependents.

### Step 3 — Slice Vertically

Organize tasks as complete end-to-end feature slices, not horizontal layers.

Instead of:

```
Task 1: Create all database schemas
Task 2: Create all API routes
Task 3: Create all UI components
```

Prefer:

```
Task 1: Implement "create item" end-to-end (schema + route + UI + test)
Task 2: Implement "list items" end-to-end
Task 3: Implement "delete item" end-to-end
```

### Step 4 — Write Structured Tasks

Each task must include:

| Field               | Required                                   |
| ------------------- | ------------------------------------------ |
| Description         | What specifically gets built               |
| Acceptance Criteria | Concrete, testable conditions for "done"   |
| Verification Steps  | Commands or checks that confirm completion |
| Dependencies        | Which tasks must be complete first         |
| Files Affected      | Approximate list                           |
| Size                | S / M / L (see sizing below)               |

**Sizing:**

- S — 1–2 files
- M — 3–4 files
- L — 5–8 files
- XL — needs decomposition; split before proceeding

### Step 5 — Add Phase Gates

Insert checkpoints between major phases to verify:

- Tests pass
- Build succeeds
- End-to-end behavior works before proceeding to the next phase

### Step 6 — Present for Approval

Write the plan to `tasks/plan.md` and the task list to `tasks/todo.md`. Present both for human review. **Wait for explicit approval before implementing.**

## Artifacts

- **`tasks/plan.md`** — Dependency map, phase gates, risk assessment, parallelization opportunities
- **`tasks/todo.md`** — Ordered task list, each with acceptance criteria and verification steps

## Red Flags

- Tasks missing acceptance criteria or verification steps
- All tasks sized XL
- Dependencies not identified or not ordered
- Starting implementation before the plan is approved
- Planning and implementing in the same session without a pause
