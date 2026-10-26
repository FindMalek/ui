# @ui-sdk/solid

Headless, accessible components for Solid, rendered by a thin adapter over ui-sdk's framework-free core (`@ui-sdk/core`). Parts have no styles: each one exposes its state as ARIA and `data-*` attributes and CSS variables, so your CSS or Tailwind decides the look. Popups need no portal and right to left needs no provider.

```tsx
import { Popover, PopoverContent, PopoverTrigger } from "@ui-sdk/solid/popover"
```

Each component is its own entry, so you pay only for what you import.

## Docs

The docs ship in this package as Markdown, with Solid code, generated from the same source as the docs site for the release you installed:

- [`docs/README.md`](./docs/README.md) lists every page.
- `docs/components/<name>.md` covers one component: its anatomy, examples, every styling hook (data attributes and CSS variables), the API reference and the keyboard and screen reader behavior its tests check.
- [`docs/core.md`](./docs/core.md) is how to build a component ui-sdk doesn't ship, from the same core, in one file.

Hover a component or a prop in your editor for the same descriptions.
