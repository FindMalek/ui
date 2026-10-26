import { hydrateFixture } from "../../svelte-ssr"
import CommandFixture from "./CommandFixture.svelte"

// ?data renders the same command list from `items`.
function mount(root: HTMLElement) {
  const data = new URLSearchParams(location.search).has("data")
  return hydrateFixture(root, "command", CommandFixture, { data })
}

export { mount }
