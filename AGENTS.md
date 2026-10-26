# ui-sdk

ui-sdk is a TypeScript library of UI behaviors for building interfaces. It isn't a component library. It's the layer underneath one: keyboard navigation, focus, selection, dismissal, popups, drag and drop and the ARIA they need, as small functions you combine in `@ui-sdk/core`.

## How it fits together

- **Behaviors** are the building blocks. Each is one thing an interface does, like moving focus with the arrow keys (`createRovingFocus`).
- **Primitives** put one component's options, state, behaviors and parts together in a single definition (`definePrimitive`), with no styles.
- **Adapters** render a primitive in React, Vue, Svelte, Solid and web components, with the same names everywhere (`createParts`). You write the markup and styles. State shows up as data attributes and CSS variables.
- **Checking.** `@ui-sdk/core/testing` checks the result against its WAI-ARIA pattern, in right to left and on the server.
- **Agents** can operate a finished interface through `@ui-sdk/core/agent` (`snapshot`, `act`).

## Why we're building it

Component libraries cover familiar patterns like menus, dialogs and tabs. Real products also need things nobody ships: a kanban board, a timeline you can scrub, a picker made for one task. Agents can now generate those interfaces, but each time they rebuild focus, arrow keys and screen reader support from scratch, and they get it subtly wrong. ui-sdk gives people and their agents tested behaviors to build any component on, and a way to check the result.

## Principles

- No runtime dependencies.
- Works with SSR and before hydration. Right to left works without a provider. Popups work without portals.
- Small, predictable APIs with one shape across components and frameworks, so a model writes them correctly in few tokens.

## Code

- Zero runtime dependencies in shipped packages. Behavior lives in core; adapters stay generic.
- Comments end with a period. No return type annotations. Inline types. Named exports, listed at the end of each file. `pnpm lint` and `pnpm format` check what they can; `pnpm format:write` fixes formatting.
- Conventional commits, lowercase subject.
- Every server command sets its own port. Run tests through `scripts/test-slot.sh`. Check exit codes, not grep output. [tests/README.md](tests/README.md) maps every test.

## Framework experts

One expert per framework in `.claude/agents/<framework>-expert.md` (react, vue, svelte, solid, web), with what it knows in `.claude/experts/<framework>/knowledge.md` and what's already decided in `decisions.md`. Ask one any question about its framework, or ask it to review code. Before merging a change to an adapter, core, the specs, examples or framework docs, run `ui-sdk-expert-review` on it; `node scripts/expert-scope.mjs` shows which experts it reaches.
