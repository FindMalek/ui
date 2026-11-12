---
"@ui-sdk/vue": patch
---

The Nuxt module keeps `@ui-sdk/core` out of Vite's dependency pre-bundling, so an app that imports from `@ui-sdk/core` no longer loads a second copy of it in `nuxt dev`.
