# Security Checklist

Quick reference for web application security. Use alongside `skills/security-and-hardening/SKILL.md`.

## Threat Modeling (Start Here)

Before reaching for controls, spend five minutes thinking like an attacker:

- [ ] Trust boundaries mapped (user input, uploads, webhooks, third-party APIs, LLM output)
- [ ] Assets named (credentials, PII, payment data, admin actions)
- [ ] STRIDE run per boundary (Spoofing, Tampering, Repudiation, Info Disclosure, DoS, Elevation)
- [ ] Abuse cases written next to use cases ("how would I misuse this?")

## Pre-Commit Checks

- [ ] No secrets in code (`git diff --cached | grep -i "password\|secret\|api_key\|token"`)
- [ ] `.gitignore` covers: `.env`, `.env.local`, `*.pem`, `*.key`
- [ ] `.env.example` uses placeholder values (not real secrets)

## Authentication

- [ ] Passwords hashed with bcrypt (≥12 rounds), scrypt, or argon2
- [ ] Session cookies: `httpOnly`, `secure`, `sameSite: 'lax'`
- [ ] Session expiration configured
- [ ] Rate limiting on login endpoint (≤10 attempts per 15 minutes)
- [ ] Password reset tokens: time-limited (≤1 hour), single-use

## Authorization

- [ ] Every protected endpoint checks authentication
- [ ] Every resource access checks ownership/role (prevents IDOR)
- [ ] Admin endpoints require admin role verification
- [ ] JWT tokens validated (signature, expiration, issuer)

## Input Validation

- [ ] All user input validated at system boundaries
- [ ] Validation uses allowlists, not denylists
- [ ] String lengths constrained (min/max)
- [ ] File uploads: type restricted, size limited, content verified
- [ ] SQL queries parameterized (no string concatenation)
- [ ] HTML output encoded (use framework auto-escaping)
- [ ] URLs validated before redirect (prevent open redirect)

## Security Headers

```
Content-Security-Policy: default-src 'self'; script-src 'self'
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

## CORS Configuration

```typescript
// Restrictive (recommended)
cors({
  origin: ['https://yourdomain.com'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
});

// NEVER in production:
cors({ origin: '*' });
```

## Data Protection

- [ ] Sensitive fields excluded from API responses (`passwordHash`, `resetToken`, etc.)
- [ ] Sensitive data not logged
- [ ] HTTPS for all external communication
- [ ] Database backups encrypted

## Dependency Security

```bash
npm audit
npm audit fix
npm audit --audit-level=critical
```

- [ ] Lockfile committed; CI uses `npm ci`
- [ ] New dependencies reviewed for maintenance and suspicious `postinstall` scripts
- [ ] No typosquats

## AI / LLM Security

- [ ] Model output treated as untrusted — never into `eval`/SQL/shell/`innerHTML`
- [ ] Prompt injection assumed; permissions enforced in code, not in the system prompt
- [ ] Secrets and cross-tenant data kept out of the context window
- [ ] Tool/agent permissions scoped; destructive actions require confirmation
- [ ] Token, rate, and loop limits set

## Error Handling

```typescript
// Production: generic error, no internals exposed
res.status(500).json({ error: { code: 'INTERNAL_ERROR', message: 'Something went wrong' } });

// NEVER in production:
res.status(500).json({ error: err.message, stack: err.stack });
```

## OWASP Top 10

| #   | Vulnerability             | Prevention                                            |
| --- | ------------------------- | ----------------------------------------------------- |
| 1   | Broken Access Control     | Auth checks on every endpoint, ownership verification |
| 2   | Cryptographic Failures    | HTTPS, strong hashing, no secrets in code             |
| 3   | Injection                 | Parameterized queries, input validation               |
| 4   | Insecure Design           | Threat modeling, spec-driven development              |
| 5   | Security Misconfiguration | Security headers, minimal permissions, audit deps     |
| 6   | Vulnerable Components     | `npm audit`, keep deps updated                        |
| 7   | Auth Failures             | Strong passwords, rate limiting, session management   |
| 8   | Data Integrity Failures   | Verify updates/dependencies, signed artifacts         |
| 9   | Logging Failures          | Log security events, don't log secrets                |
| 10  | SSRF                      | Validate/allowlist URLs, restrict outbound requests   |
