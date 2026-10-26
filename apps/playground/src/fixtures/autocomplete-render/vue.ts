import { createApp } from "vue"
import AutocompleteRenderFixture from "./AutocompleteRenderFixture.vue"

function mount(root: HTMLElement) {
  createApp(AutocompleteRenderFixture).mount(root)
}

export { mount }
