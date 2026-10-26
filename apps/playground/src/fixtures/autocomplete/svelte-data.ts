import { mount as mountComponent } from "svelte"
import AutocompleteFixture from "./AutocompleteFixture.svelte"

// The same autocomplete, rendered from `items`.
function mount(root: HTMLElement) {
  mountComponent(AutocompleteFixture, { target: root, props: { data: true } })
}

export { mount }
