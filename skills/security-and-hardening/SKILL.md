---
name: security-and-hardening
description: Build security into every feature from the start. Security is a constraint on every line of code that touches user data.
when-to-use: Whenever adding input handling, authentication, external integrations, or data storage. Also invoked by /ship.
---

# Security and Hardening

"Security isn't a phase — it's a constraint on every line of code that touches user data." Threat model before you build, not after.

## Three-Tier Boundary

### Always Do (No Exceptions)

- Validate all external input at system boundaries
- Use parameterized queries for database access
- Encode output to prevent XSS (use framework auto-escaping)
- HTTPS for all external communication
- Hash passwords with bcrypt (≥12 rounds), scrypt, or argon2
- Deploy security headers (CSP, HSTS, X-Content-Type-Options, X-Frame-Options)

### Ask Before Doing (Requires Approval)

- Authentication system changes
- New sensitive data storage
- New external service integrations
- CORS configuration changes

### Never Do

- Commit secrets to version control
- Log sensitive data (passwords, tokens, full PII)
- Rely on client-side validation alone
- Use `eval()` with untrusted input
- Store auth tokens in `localStorage`

## STRIDE Threat Model (5-Minute Exercise)

Before building any new feature, consider each threat category:

| Threat              | Question                                    | Mitigation                                      |
| ------------------- | ------------------------------------------- | ----------------------------------------------- |
| **S**poofing        | Can an attacker pretend to be another user? | Strong auth, session management                 |
| **T**ampering       | Can data be modified in transit or at rest? | HTTPS, integrity checks                         |
| **R**epudiation     | Can actions be denied later?                | Audit logs                                      |
| **I**nfo Disclosure | Can sensitive data leak?                    | Encryption, output encoding, no secrets in logs |
| **D**oS             | Can the service be made unavailable?        | Rate limiting, input size limits                |
| **E**levation       | Can a user gain higher privileges?          | Auth checks on every protected operation        |

## AI/LLM Security (If Applicable)

- Treat all model output as untrusted input — never into `eval`, SQL, shell, or `innerHTML`
- Enforce permissions in code, not in the system prompt (system prompts can be injected)
- Keep secrets and cross-tenant data out of the context window
- Scope tool/agent permissions; destructive actions require confirmation
- Set token, rate, and loop/recursion limits

## Verification

Before marking any security-sensitive task done:

- [ ] All external input validated at entry points
- [ ] No secrets in code or environment variables committed
- [ ] Auth checks present on all protected operations
- [ ] Output encoding in place
- [ ] `npm audit` clean or exceptions documented
- [ ] Security headers configured

See `references/security-checklist.md` for the full checklist.
