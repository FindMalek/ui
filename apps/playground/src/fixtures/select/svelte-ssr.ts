import { hydrateFixture } from "../../svelte-ssr"
import SelectFixture from "./SelectFixture.svelte"

// ?data renders the same select from `items`.
function mount(root: HTMLElement) {
  const data = new URLSearchParams(location.search).has("data")
  return hydrateFixture(root, "select", SelectFixture, { data })
}

export { mount }
