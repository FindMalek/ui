# ui-sdk

A TypeScript library of UI behaviors for building interfaces: keyboard navigation, focus, selection, dismissal, popups, drag and drop and the ARIA they need, in `@ui-sdk/core`, with adapters for React, Vue, web components, Solid and Svelte.

## Getting started

You need Node 24 (`.nvmrc`) and pnpm, which corepack installs at the version `package.json` names.

```bash
corepack enable
pnpm install
cd tests && npx playwright install chromium && cd ..   # Add webkit and firefox to run the engine specs.
pnpm dev             # docs at http://localhost:5400
pnpm playground      # the specs' fixtures at http://localhost:5300
```

## Checks

```bash
pnpm lint
pnpm format
pnpm typecheck
pnpm build
pnpm test:pr         # Playwright specs for what you changed
pnpm test:sweep      # every spec on every project
pnpm test:docs       # every docs example, against the docs on 5400
```

Working on ui-sdk itself: start with [AGENTS.md](AGENTS.md) and [contributing/](contributing/README.md).
