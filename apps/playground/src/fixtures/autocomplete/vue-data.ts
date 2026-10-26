import { createApp } from "vue"
import AutocompleteFixture from "./AutocompleteFixture.vue"

// The same autocomplete, rendered from `items`.
function mount(root: HTMLElement) {
  createApp(AutocompleteFixture, { data: true }).mount(root)
}

export { mount }
