# Spec-Driven Development

Write a structured specification before writing code. Use this when starting a new feature, when requirements are ambiguous, or when changes span multiple files/modules.

## When to Use

- Starting any non-trivial feature or project
- Requirements feel unclear or assumed
- Changes affect multiple modules or interfaces
- You want a shared source of truth before implementation begins

Skip for single-line fixes or clear, contained corrections.

## Process

### Step 1 — Surface Assumptions

Before drafting, explicitly state what you're assuming:

```
ASSUMPTIONS I'M MAKING:
1. [technology choice or constraint]
2. [architectural decision]
3. [scope boundary]
→ Correct me now or I'll proceed with these.
```

### Step 2 — Draft the Specification

Write a spec covering these six areas:

**Objective** — What are we building and why? Who uses it?

**Commands / Entry Points** — How is this feature invoked or accessed?

**Structure** — What files, components, or modules will be created or modified?

**Style / Conventions** — What coding patterns, naming conventions, and constraints apply? Reference CLAUDE.md.

**Testing** — How will we verify this works? What constitutes a passing implementation?

**Boundaries** — What is explicitly out of scope?

### Step 3 — Save as SPEC.md

Write the specification to `SPEC.md` at the project root (or `docs/SPEC.md` for larger projects). Commit it to version control alongside code.

### Step 4 — Get Approval

Present the spec and **wait for explicit approval** before writing any implementation code. Do not proceed on tentative responses.

### Step 5 — Keep It Live

Update `SPEC.md` when decisions change, scope shifts, or new constraints emerge. The spec is a living document, not a one-time artifact.

## Red Flags

- Writing code before the spec is approved
- A spec that doesn't include acceptance criteria
- Treating the spec as immutable once written
- Skipping this step because "it's obvious" — the obvious parts are often where the most disagreements hide
