# Ship — Pre-Launch Checklist

Orchestrate a parallel pre-launch review before deploying. Three specialist personas run concurrently, then findings are synthesized into a go/no-go decision.

## Phase A — Parallel Review (run all three simultaneously, never sequentially)

Invoke these three subagents **in a single turn**:

**1. code-reviewer** (see `agents/code-reviewer.md`)
Evaluate all staged changes across: correctness, readability, architecture, security, performance.

**2. security-auditor** (see `agents/security-auditor.md`)
Assess: OWASP Top 10, secrets in code/logs, authentication, authorization, dependency vulnerabilities, LLM-specific risks if applicable.

**3. test-engineer** (see `agents/test-engineer.md`)
Analyze: happy path coverage, edge cases, error handling, boundary conditions, regression gaps.

**Skip the fan-out only when ALL THREE conditions hold:**
- ≤ 2 files touched
- < 50 lines changed
- No auth, payment, data access, or config modifications

Otherwise always run all three in parallel.

## Phase B — Synthesis

Aggregate findings across all three reviews. Resolve duplicates. Organize by dimension:

- Code quality findings
- Security findings
- Test coverage gaps
- Performance observations
- Accessibility notes (if UI changes)
- Documentation gaps

## Phase C — Go / No-Go Decision

Produce a unified output:

**Launch Blockers** — Issues that must be resolved before shipping (Critical severity from any reviewer)

**Recommended Fixes** — Issues that should be addressed but don't block (Required severity)

**Acknowledged Risks** — Known issues with accepted mitigations

**Rollback Procedure:**
- Trigger condition: [what signals a bad deploy]
- Rollback steps: [exact commands]
- Recovery time objective: [how long it should take]

A go decision requires: zero launch blockers, rollback procedure documented, human review and explicit approval.
