import { hydrateFixture } from "../../svelte-ssr"
import AutocompleteFixture from "./AutocompleteFixture.svelte"

// ?data renders the same autocomplete from `items`.
function mount(root: HTMLElement) {
  const data = new URLSearchParams(location.search).has("data")
  return hydrateFixture(root, "autocomplete", AutocompleteFixture, { data })
}

export { mount }
