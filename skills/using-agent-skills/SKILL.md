---
name: using-agent-skills
description: Discovers and invokes agent skills. Use when starting a session or when you need to discover which skill applies to the current task.
when-to-use: At the start of any non-trivial task, or when unsure which skill applies.
---

# Using Agent Skills

This meta-skill governs how all other skills are discovered and applied.

## Skill Discovery Flowchart

```
Task arrives
    │
    ├── Don't know what you want yet? ──────────→ interview-me
    ├── Have a rough concept, need variants? ────→ idea-refine
    ├── New project/feature/change? ─────────────→ spec-driven-development
    ├── Have a spec, need tasks? ────────────────→ planning-and-task-breakdown
    ├── Implementing code? ──────────────────────→ incremental-implementation
    │   ├── UI work? ────────────────────────────→ frontend-ui-engineering
    │   ├── API work? ───────────────────────────→ api-and-interface-design
    │   └── Stakes high / unfamiliar code? ──────→ doubt-driven-development
    ├── Writing/running tests? ──────────────────→ test-driven-development
    ├── Something broke? ────────────────────────→ debugging-and-error-recovery
    ├── Reviewing code? ─────────────────────────→ code-review-and-quality
    │   ├── Too complex? ────────────────────────→ code-simplification
    │   ├── Security concerns? ──────────────────→ security-and-hardening
    │   └── Performance concerns? ───────────────→ performance-optimization
    ├── Committing/branching? ───────────────────→ git-workflow-and-versioning
    ├── Writing docs/ADRs? ──────────────────────→ documentation-and-adrs
    └── Deploying/launching? ────────────────────→ shipping-and-launch
```

## Core Operating Behaviors (Non-Negotiable)

### 1. Surface Assumptions

Before implementing anything non-trivial, state your assumptions explicitly:

```
ASSUMPTIONS I'M MAKING:
1. [assumption about requirements]
2. [assumption about architecture]
3. [assumption about scope]
→ Correct me now or I'll proceed with these.
```

### 2. Manage Confusion Actively

When you encounter inconsistencies or unclear specifications:

1. **STOP.** Do not proceed with a guess.
2. Name the specific confusion.
3. Present the tradeoff or ask the clarifying question.
4. Wait for resolution.

### 3. Push Back When Warranted

Point out problems directly. Explain the concrete downside. Propose an alternative. Accept the human's decision if they override with full information. Sycophancy is a failure mode.

### 4. Enforce Simplicity

Before finishing any implementation, ask:
- Can this be done in fewer lines?
- Are these abstractions earning their complexity?
- Would a staff engineer say "why didn't you just..."?

Prefer the boring, obvious solution. Cleverness is expensive.

### 5. Maintain Scope Discipline

Touch only what you're asked to touch. Do not refactor adjacent code, remove comments you don't understand, or add features not in the spec.

### 6. Verify, Don't Assume

A task is not complete until verification passes. "Seems right" is never sufficient. Evidence required: passing tests, build output, runtime data.

The standing quality bar for every change is in `references/definition-of-done.md`.

## Lifecycle Sequence

For a complete feature, the typical skill sequence:

```
1.  spec-driven-development     → Define what we're building
2.  planning-and-task-breakdown → Break into verifiable chunks
3.  incremental-implementation  → Build slice by slice
4.  test-driven-development     → Prove each slice works
5.  code-review-and-quality     → Review before merge
6.  code-simplification         → Reduce unnecessary complexity
7.  git-workflow-and-versioning → Clean commit history
8.  shipping-and-launch         → Deploy safely
```

Not every task needs every skill. A bug fix: `debugging-and-error-recovery` → `test-driven-development` → `code-review-and-quality`.

## Failure Modes to Avoid

1. Making wrong assumptions without checking
2. Plowing ahead when confused or lost
3. Not surfacing inconsistencies you notice
4. Being sycophantic to approaches with clear problems
5. Overcomplicating code
6. Modifying code orthogonal to the task
7. Building without a spec because "it's obvious"
8. Skipping verification because "it looks right"
