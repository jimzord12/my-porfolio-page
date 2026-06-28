---
name: code-review-and-quality
description: Evaluate code changes across five dimensions before merge. Approve changes that improve overall code health, even if not perfect.
when-to-use: Before merging any non-trivial change. Invoked via /review.
---

# Code Review and Quality

"Approve a change when it definitely improves overall code health, even if it isn't perfect." The standard is continuous improvement, not perfection.

## Five-Axis Framework

### 1. Correctness
- Does the implementation meet the spec and acceptance criteria?
- Are edge cases and error paths handled?
- Do tests fail without the change and pass with it?
- Are tests meaningful (not just superficially passing)?

### 2. Readability & Simplicity
- Can another engineer understand this without explanation?
- Are names clear and descriptive?
- Is control flow as simple as possible?
- Does the structure reveal intent?

### 3. Architecture
- Is this consistent with existing patterns in the codebase?
- Are boundaries clean (no feature logic in shared modules)?
- Does this reduce complexity or relocate it?
- Is there duplication that should be consolidated?

### 4. Security
- Is all external input validated at system boundaries?
- Are secrets absent from code and logs?
- Are auth checks present where required?
- Is output encoded to prevent injection?

### 5. Performance
- Any N+1 query patterns?
- Any unbounded loops or missing pagination?
- Any unnecessary synchronous operations?
- Any wasteful object creation in hot paths?

## Change Sizing

Target ~100 lines changed per review. Up to 300 is acceptable for a single logical change. Above 1000 lines, request the change be split.

## Process

1. **Read tests first** — they document intent and expected coverage
2. **Check the spec** (if one exists) before reading implementation
3. Review each axis in sequence
4. Provide concrete fix recommendations for Critical and Required findings
5. Acknowledge strengths alongside issues
6. List orphaned/dead code explicitly; ask before removing

## Severity Labels

| Label | Meaning |
|-------|---------|
| **Critical** | Blocks merge. Security vulnerability or data integrity risk. |
| **Required** | Must address before merge. Missing tests, broken architecture. |
| **Consider** | Optional improvement. Worth discussing, not blocking. |
| **FYI** | Observation only. No action required. |

## Red Flags

- Merging without review
- Accepting "I'll fix it later" for Critical or Required findings
- Approving changes that grow already-large files without decomposition
- Blocking a change purely for stylistic preference when it follows project conventions
- Reviewing without reading the tests first
