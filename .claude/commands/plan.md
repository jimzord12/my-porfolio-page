# Planning and Task Breakdown

Decompose a specification into small, verifiable, dependency-ordered tasks. Use this after `/spec` produces an approved spec, or whenever implementation scope is large enough to need a map.

## Process

### Step 1 — Read-Only Analysis

Enter read-only mode. Study the spec, relevant existing code, and architectural patterns. **Do not write any code during planning.**

### Step 2 — Map Dependencies

Identify which components or modules depend on each other. Build a dependency graph. Implementation order follows this graph bottom-up — foundations before dependents.

### Step 3 — Slice Vertically

Organize tasks as complete end-to-end feature slices, not horizontal layers. Instead of "create all data models, then all UI, then all tests," prefer "implement the ability to do X end-to-end, including its test."

### Step 4 — Write Structured Tasks

Each task must include:

- **Description** — What specifically gets built
- **Acceptance Criteria** — How we know it's done (concrete, testable)
- **Verification Steps** — Commands or checks that confirm completion
- **Dependencies** — Which tasks must be complete first
- **Files Affected** — Approximate list of files touched
- **Size** — S (1–2 files), M (3–4 files), L (5–8 files). Anything larger must be decomposed further.

### Step 5 — Add Phase Gates

Insert checkpoints between major phases to verify tests pass, build succeeds, and end-to-end behavior works before proceeding.

### Step 6 — Present for Approval

Write the plan to `tasks/plan.md` and the task list to `tasks/todo.md`. Present both for human review. **Wait for explicit approval before implementing.**

## Output Files

- `tasks/plan.md` — Dependency map, risk assessment, parallelization opportunities
- `tasks/todo.md` — Ordered task list with acceptance criteria

## Red Flags

- Tasks without acceptance criteria
- Tasks without verification steps
- All tasks sized XL — needs further decomposition
- Dependencies not identified or ordered
- Starting implementation before the plan is approved
