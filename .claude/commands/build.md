# Incremental Implementation

Build features in thin vertical slices. Each increment leaves the system in a working, testable state.

## Modes

**Default (single-task):** Implement one pending task, pause for review, stop.

**Autonomous (`/build auto`):** Execute all planned tasks sequentially after a single approval checkpoint.

---

## Single-Task Workflow

Each invocation follows this sequence:

1. Select the next incomplete task from `tasks/todo.md` and read its acceptance criteria
2. Review existing code and patterns relevant to the task
3. Write a test that fails against the current implementation (RED)
4. Add the minimal code to make the test pass (GREEN)
5. Run the full test suite to detect regressions
6. Verify the build compiles/exports successfully
7. Create a descriptive atomic commit
8. Mark the task complete in `tasks/todo.md` and stop

---

## Autonomous Workflow (`/build auto`)

### Prerequisites

**Spec required:** A spec must exist at `SPEC.md`, `docs/SPEC.md`, or under `spec/`. Generic notes or a README don't qualify. If missing, ask the user to run `/spec` first.

**Clean repo:** Check for uncommitted changes outside planning artifacts. Stop if unrelated modifications exist.

**Single approval gate:** Present the complete plan once. Only an explicit affirmation ("approve", "yes", "go ahead") unblocks execution. Tentative responses ("looks ok", "sure I guess") do not count.

**Per-task commits:** Each task receives its own discrete commit scoped only to files it modified, plus task-status updates.

---

## Core Rules

- Build in thin vertical slices — one complete slice, tested and committed, before the next
- Never exceed 100 lines without running tests
- Don't mix unrelated changes in a single increment
- Keep the build green between slices — never leave it broken
- Don't add features not in the spec because they "seem useful"

---

## Blocker Protocol

Pause and request a human decision when encountering:

- Failing tests with unclear cause
- Build failures
- Ambiguous or conflicting spec requirements
- High-risk changes (auth, data deletion, secrets, deploys)
- Irreversible operations

---

## Red Flags

- Writing more than 100 lines without running tests
- Mixing unrelated changes in one commit
- Skipping the RED phase (writing implementation before the failing test)
- Breaking the build between increments
- Proceeding past a blocker without human approval
