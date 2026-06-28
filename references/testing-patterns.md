# Testing Patterns

Quick reference for common testing patterns. Use alongside `skills/test-driven-development/SKILL.md` and the `/test` command.

## Test Structure (Arrange-Act-Assert)

```typescript
it('describes expected behavior', () => {
  // Arrange
  const input = { title: 'Test Task', priority: 'high' };

  // Act
  const result = createTask(input);

  // Assert
  expect(result.title).toBe('Test Task');
  expect(result.priority).toBe('high');
  expect(result.status).toBe('pending');
});
```

## Test Naming

```typescript
// Pattern: [unit] [expected behavior] [condition]
describe('TaskService.createTask', () => {
  it('creates a task with default pending status', () => {});
  it('throws ValidationError when title is empty', () => {});
  it('trims whitespace from title', () => {});
});
```

## Common Assertions

```typescript
expect(result).toBe(expected);           // Strict equality
expect(result).toEqual(expected);        // Deep equality
expect(result).toBeNull();
expect(result).toBeDefined();
expect(array).toHaveLength(3);
expect(object).toHaveProperty('key', 'value');
expect(() => fn()).toThrow(ValidationError);
await expect(asyncFn()).resolves.toBe(value);
await expect(asyncFn()).rejects.toThrow(Error);
```

## Mock at Boundaries Only

```
Mock these:                    Don't mock these:
├── Database calls             ├── Internal utility functions
├── HTTP requests              ├── Business logic
├── File system operations     ├── Data transformations
├── External API calls         ├── Validation functions
└── Time/Date (when needed)    └── Pure functions
```

## React / Component Testing

```tsx
import { render, screen, fireEvent, waitFor } from '@testing-library/react';

it('submits the form with entered data', async () => {
  const onSubmit = jest.fn();
  render(<TaskForm onSubmit={onSubmit} />);

  // Find by accessible role/label, not test IDs
  fireEvent.change(screen.getByRole('textbox', { name: /title/i }), {
    target: { value: 'New Task' },
  });
  fireEvent.click(screen.getByRole('button', { name: /create/i }));

  await waitFor(() => {
    expect(onSubmit).toHaveBeenCalledWith({ title: 'New Task' });
  });
});
```

## E2E Testing (Playwright)

```typescript
test('user can complete a flow', async ({ page }) => {
  await page.goto('/');
  await page.click('button:has-text("New Task")');
  await page.fill('[name="title"]', 'Buy groceries');
  await page.click('button:has-text("Create")');
  await expect(page.locator('text=Buy groceries')).toBeVisible();
});
```

## Anti-Patterns

| Anti-Pattern | Problem | Fix |
|---|---|---|
| Testing implementation details | Breaks on refactor | Test inputs/outputs |
| Snapshot everything | No one reviews diffs | Assert specific values |
| Shared mutable state | Tests pollute each other | Setup/teardown per test |
| Testing third-party code | Not your bug | Mock the boundary |
| Skipping tests to pass CI | Hides real bugs | Fix or delete the test |
| No async error handling | False passes | Always `await` async tests |
