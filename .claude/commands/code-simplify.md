# Code Simplification

Reduce complexity while preserving identical behavior. The goal is not fewer lines — it is code that is easier to read, understand, modify, and debug.

## Core Principles

1. **Behavior preservation is non-negotiable.** All inputs, outputs, error handling, and side effects must remain identical after simplification.
2. **Match project conventions.** Apply the patterns already used in this codebase, not external preferences.
3. **Explicit beats clever.** If parsing the code requires mental effort, make it explicit.
4. **Don't over-simplify.** Aggressive inlining or line-count optimization that reduces clarity is not simplification.
5. **Scope to recent changes by default.** Simplify what was just modified unless explicitly asked for broader cleanup.

## Process

### Step 1 — Apply Chesterton's Fence

Before touching anything, understand why the code exists and what invariant it protects. "I don't understand this" is not a reason to delete it.

### Step 2 — Identify Opportunities

Look for:
- Deep nesting → extract to guard clauses or helper functions
- Long functions doing multiple things → split by responsibility
- Unclear or generic names → rename to reflect purpose
- Duplicated logic → consolidate into a shared function
- Conditional chains that could be a lookup table or map
- Comments explaining *what* the code does → rename so the code explains itself

### Step 3 — Change Incrementally

Make one improvement at a time. Run tests after each change. If tests fail, revert the change and reassess before continuing.

### Step 4 — Evaluate the Result

After simplification, verify:
- [ ] All existing tests still pass
- [ ] No error handling was removed
- [ ] The code follows project conventions
- [ ] The result is genuinely simpler, not just different
- [ ] No behavior was changed

Then run `/review` to evaluate the simplified code against the five-axis quality framework.

## Red Flags

- Tests modified to make them pass after simplification
- Code that is longer after "simplification"
- Removing error handling or defensive checks
- Refactoring code you don't fully understand
- Simplifying code outside the task scope without explicit approval
