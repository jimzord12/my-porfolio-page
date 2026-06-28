---
name: test-driven-development
description: Write a failing test before writing the code that makes it pass. Tests are proof that code works.
when-to-use: Implementing any new behavior, fixing bugs, or modifying existing logic.
---

# Test-Driven Development

"Write a failing test before writing the code that makes it pass." Tests are proof — intuition is not.

## The TDD Cycle

### For New Features

**RED** → Write a test describing the expected behavior. Run it. Confirm it fails (for the right reason).

**GREEN** → Write the minimal code that makes the test pass. Nothing more.

**REFACTOR** → Improve the code without changing behavior. Re-run tests after each change.

Repeat for each behavior increment.

### For Bug Fixes — Prove-It Pattern

1. Write a test that reproduces the bug. Run it; confirm it fails.
2. Apply the fix.
3. Run the test; confirm it now passes.
4. Run the full suite to catch regressions.

Never fix a bug without first proving it exists via a failing test.

## Test Pyramid

| Level       | Share | When to use                                               |
| ----------- | ----- | --------------------------------------------------------- |
| Unit        | ~80%  | Pure logic, utilities, isolated functions                 |
| Integration | ~15%  | Boundary crossings, hook behavior, component interactions |
| E2E         | ~5%   | Critical user flows only                                  |

## Quality Standards

- Test behavior and outcomes, not implementation details
- Each test verifies one concept
- Tests are independent — no shared mutable state between tests
- Mock only at system boundaries (external APIs, DB, file system, time)
- Prefer real implementations over mocks when fast and deterministic
- Test names read as specifications: `[unit] [expected behavior] [condition]`
- Apply DAMP (Descriptive And Meaningful Phrases) over DRY in test code

## Naming Convention

```typescript
describe('HeroSection', () => {
  it('renders the availability badge', () => {});
  it('links the "Explore My Work" button to #projects', () => {});
  it('links the "Let\'s Connect" button to #contact', () => {});
});
```

## Browser / UI Testing

For visual or interaction changes:

1. Run unit/component tests
2. Verify in a real browser
3. Check console for errors
4. Check network panel for unexpected requests
5. Inspect DOM for correct rendering and accessibility

## Red Flags

- Writing implementation before any test
- A test that passes on the first run before implementation exists
- Skipping tests under deadline pressure
- Tests that cover only the happy path
- Test code that is harder to read than the code under test
- Using `test.skip` or `it.todo` as a permanent state

## Note for This Project

This portfolio currently has no test suite configured. When adding tests:

- Install `@testing-library/react` and `@testing-library/jest-dom` for component tests
- Install `jest` or `vitest` as the test runner
- Playwright is available in this environment for E2E tests
