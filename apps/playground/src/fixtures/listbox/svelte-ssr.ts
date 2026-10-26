import { hydrateFixture } from "../../svelte-ssr"
import ListboxFixture from "./ListboxFixture.svelte"

// ?data renders the same listbox from `items`.
function mount(root: HTMLElement) {
  const data = new URLSearchParams(location.search).has("data")
  return hydrateFixture(root, "listbox", ListboxFixture, { data })
}

export { mount }
