# Test-Driven Development

Write a failing test before writing the code that makes it pass. Tests are proof that code works — intuition is not sufficient.

## For New Features — Red-Green-Refactor

1. **RED** — Write a test that describes the expected behavior. Run it; confirm it fails.
2. **GREEN** — Write the minimal code that makes the test pass. No more.
3. **REFACTOR** — Improve the code without changing behavior. Re-run tests after each change to confirm they still pass.

Repeat this cycle for each behavior increment.

## For Bug Fixes — Prove-It Pattern

1. Write a test that reproduces the bug. Run it; confirm it fails.
2. Apply the fix.
3. Run the test; confirm it now passes.
4. Run the full suite to catch regressions.

Never fix a bug without first proving it exists via a failing test.

## Test Pyramid

| Level       | Share | When                                       |
| ----------- | ----- | ------------------------------------------ |
| Unit        | ~80%  | Pure logic, utilities, isolated functions  |
| Integration | ~15%  | Boundary crossings, component interactions |
| E2E         | ~5%   | Critical user flows only                   |

## Quality Standards

- Test behavior and outcomes, not implementation details
- Each test verifies one concept
- Tests are independent — no shared mutable state between tests
- Mock only at system boundaries (DB, HTTP, file system, time)
- Test names read as specifications: `[unit] [expected behavior] [condition]`
- Prefer real implementations over mocks when the real version is fast and deterministic
- Apply DAMP (Descriptive And Meaningful Phrases) over DRY in test code

## Browser / UI Changes

For visual or interaction changes, combine unit/component tests with runtime verification in a real browser. Check the console for errors, network panel for unexpected requests, and DOM for correct rendering.

## Red Flags

- Writing implementation code before any test
- A test that passes on the first run before the implementation exists
- Skipping tests under deadline pressure
- Tests that only verify happy paths
- Test code that is harder to read than the code under test
