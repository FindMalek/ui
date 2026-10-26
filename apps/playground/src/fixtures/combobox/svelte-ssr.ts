import { hydrateFixture } from "../../svelte-ssr"
import ComboboxFixture from "./ComboboxFixture.svelte"

// ?data renders the same combobox from `items`.
function mount(root: HTMLElement) {
  const data = new URLSearchParams(location.search).has("data")
  return hydrateFixture(root, "combobox", ComboboxFixture, { data })
}

export { mount }
