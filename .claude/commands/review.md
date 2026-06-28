# Code Review

Evaluate changes across five dimensions before merge. Approve a change when it definitely improves overall code health, even if it isn't perfect. The standard is continuous improvement, not perfection.

## Five-Axis Framework

### 1. Correctness
- Does the implementation match the spec and acceptance criteria?
- Are edge cases and error paths handled?
- Do tests cover the behavior (not just the happy path)?
- Do tests fail without the change and pass with it?

### 2. Readability & Simplicity
- Can another engineer understand this without explanation?
- Are names clear and descriptive?
- Is control flow as simple as it could be?
- Could this be done in fewer lines without sacrificing clarity?

### 3. Architecture
- Does this align with existing patterns in the codebase?
- Are boundaries clean (no feature logic leaking into shared modules)?
- Does this reduce complexity or just relocate it?
- Is there duplication that belongs in a shared location?

### 4. Security
- Is all external input validated at system boundaries?
- Are secrets absent from code and logs?
- Are auth checks present on every protected operation?
- Is output encoded to prevent XSS?
- For LLM output: is it treated as untrusted input?

### 5. Performance
- Any N+1 query patterns?
- Any unbounded loops or unpaginated queries?
- Any unnecessary synchronous operations?
- Any wasteful object creation in hot paths?

## Output Format

Categorize findings by severity:

- **Critical** — Blocks merge. Security vulnerability or data integrity risk.
- **Required** — Must be addressed before merge. Missing tests, broken architecture.
- **Consider** — Optional improvement. Worth discussing but not blocking.
- **FYI** — Observation only. No action required.

Include `file:line` references and concrete fix recommendations for every Critical and Required finding. Acknowledge strengths alongside issues.

## Change Sizing

Target ~100 lines changed per review. Up to 300 is acceptable for a single logical change. Above 1000 lines, request the PR be split.

## Process

1. Read the tests first — they document intent and coverage
2. Check the spec (if one exists) before reading the implementation
3. Review each axis in order
4. Propose specific refactoring solutions for structural issues, not just problem identification
5. List any orphaned/dead code explicitly and ask before removing

## Red Flags

- Merging without review
- Accepting "I'll fix it later" for Critical or Required findings
- Approving changes that grow already-large files without decomposition
- Blocking a change purely for stylistic reasons that don't affect correctness
