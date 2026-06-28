# Web Performance Audit

Run a performance audit on web application code or pages. Not applicable to utility libraries, CLIs, or server-only code.

## Mode Selection

**Deep mode** — Use when you have performance data:
- Lighthouse JSON report
- PageSpeed Insights JSON response
- CrUX API data
- DevTools performance trace
- Live URL with Chrome DevTools MCP configured

**Quick mode (default)** — Analyze source code for structural performance anti-patterns when no measurement data is available.

## Invocation

Invoke the `web-performance-auditor` subagent (see `agents/web-performance-auditor.md`) with:

- Target files or components to analyze
- Artifact paths or JSON content (for deep mode)
- URL or page identifier
- Expected mode: Quick or Deep

## Deliverables

The auditor produces:

1. **Scorecard** — Core Web Vitals status (LCP, INP, CLS) — measured values in deep mode, "not measured" in quick mode
2. **Ranked Findings** — Issues ordered by user impact, each with location and recommended fix
3. **Positive Observations** — What's already well-optimized
4. **Recommendations** — Prioritized list of next steps

## Core Web Vitals Targets

| Metric | Good | Needs Work | Poor |
|--------|------|------------|------|
| LCP | ≤ 2.5s | ≤ 4.0s | > 4.0s |
| INP | ≤ 200ms | ≤ 500ms | > 500ms |
| CLS | ≤ 0.1 | ≤ 0.25 | > 0.25 |

## Metric Honesty Rule

Never fabricate metrics. Static source code analysis cannot produce real LCP, INP, or CLS measurements. In quick mode, all findings are tagged "potential impact" and the scorecard reads "not measured." In deep mode, each value cites its source (Field/Lab/Trace).

See `references/performance-checklist.md` for the full checklist.
