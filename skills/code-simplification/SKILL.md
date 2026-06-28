---
name: code-simplification
description: Reduce complexity while preserving identical behavior. The goal is comprehension speed, not line reduction.
when-to-use: After implementing a feature, when code is hard to follow, or when /review flags excessive complexity.
---

# Code Simplification

"The goal is not fewer lines — it is code that is easier to read, understand, modify, and debug."

## Core Principles

1. **Behavior preservation is non-negotiable.** All inputs, outputs, error handling, and side effects must remain identical.
2. **Match project conventions.** Apply patterns already used in this codebase.
3. **Explicit beats clever.** Code that requires mental effort to parse should be made explicit.
4. **Don't over-simplify.** Aggressive inlining that reduces clarity is not simplification.
5. **Scope to recent changes by default.** Don't roam into unrelated code.

## Process

### Step 1 — Apply Chesterton's Fence

Before touching anything, understand why the code exists. What invariant does it protect? What edge case does it handle? "I don't understand this" is not justification for removal.

### Step 2 — Identify Opportunities

Target these patterns:

| Pattern | Refactoring |
|---------|-------------|
| Deep nesting (3+ levels) | Guard clauses, early returns |
| Long functions (50+ lines) | Extract by responsibility |
| Generic or unclear names | Rename to reflect purpose |
| Duplicated logic | Consolidate into a shared function |
| Conditional chains | Lookup table or map |
| Comments explaining *what* | Rename so code explains itself |

### Step 3 — Change Incrementally

One improvement at a time. Run tests after each change. If tests fail, revert and reassess — do not push forward.

### Step 4 — Evaluate

After simplifying, verify:

- [ ] All existing tests still pass
- [ ] No error handling was removed
- [ ] The code follows project conventions (`cn()`, Tailwind, etc.)
- [ ] The result is genuinely simpler, not just different
- [ ] No behavior was changed

Then run `/review` to evaluate the result.

## Red Flags

- Tests modified to make them pass after simplification
- Code that is longer after "simplification"
- Removing error handling or defensive checks
- Simplifying code you don't fully understand
- Simplifying code outside the task scope
