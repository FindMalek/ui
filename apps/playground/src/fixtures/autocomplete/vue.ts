import { createApp } from "vue"
import AutocompleteFixture from "./AutocompleteFixture.vue"

function mount(root: HTMLElement) {
  createApp(AutocompleteFixture).mount(root)
}

export { mount }
