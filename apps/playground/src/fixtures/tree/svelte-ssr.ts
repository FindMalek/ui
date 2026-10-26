import { hydrateFixture } from "../../svelte-ssr"
import TreeFixture from "./TreeFixture.svelte"

// ?data renders the same tree from `items`.
function mount(root: HTMLElement) {
  const data = new URLSearchParams(location.search).has("data")
  return hydrateFixture(root, "tree", TreeFixture, { data })
}

export { mount }
