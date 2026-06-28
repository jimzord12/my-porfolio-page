# Definition of Done

A standing, project-wide bar that every change must clear before it counts as done. Unlike acceptance criteria, which vary per task and answer "did we build the right thing?", the Definition of Done is the same every time and answers "is this finished to our standard?"

## Definition of Done vs. Acceptance Criteria

|         | Acceptance Criteria                      | Definition of Done                         |
| ------- | ---------------------------------------- | ------------------------------------------ |
| Scope   | Specific to one task or spec             | Applies to every increment                 |
| Changes | Different for each item                  | Fixed and reused                           |
| Answers | "Did we build _this thing_?"             | "Is it _ready_?"                           |
| Owner   | Defined when planning the task           | Defined once for the project               |
| Example | "User can reset password via email link" | "Tests pass, no regressions, docs updated" |

A task is done only when **its** acceptance criteria are met **and** the standing Definition of Done is satisfied.

## The Standing Checklist

### Correctness

- [ ] All acceptance criteria for the task are met
- [ ] Code runs and behaves as intended, verified at runtime — not just compiled or type-checked
- [ ] New behavior is covered by tests that fail without the change and pass with it
- [ ] Existing tests still pass; no regressions introduced
- [ ] Edge cases and error paths are handled, not just the happy path

### Quality

- [ ] Code reveals intent through naming and structure; no comments needed to explain _what_ it does
- [ ] No duplicated business logic
- [ ] No dead code, debug output, or commented-out blocks left behind
- [ ] Changes are scoped to the task; no unrelated refactors included
- [ ] Linting and formatting pass (`npm run lint`, Prettier)

### Integration

- [ ] Change works with the rest of the system, not just in isolation
- [ ] Config changes and environment variables are accounted for
- [ ] Backward compatibility considered for any public interface change

### Documentation

- [ ] Public interfaces and user-facing behavior are documented
- [ ] Architectural decisions worth preserving are recorded
- [ ] Documentation describes the current state, not the change history

### Ship-Readiness

- [ ] Security implications reviewed for any change touching user input or data handling
- [ ] Rollback path exists for anything risky
- [ ] The human has reviewed and approved before merge or deploy

## How to Apply

- **Per task:** confirm Correctness and Quality before checking the task off
- **Per feature:** confirm Integration and Documentation before declaring the feature complete
- **Per release:** full checklist is the floor; `/ship` adds deploy-specific gates on top

## Red Flags

- "It's done, I just haven't run it yet" — unverified work is not done
- "Tests pass" used as a synonym for done while docs or runtime verification are skipped
- A different bar applied under deadline pressure
- "Done" declared before human review on changes that need it
