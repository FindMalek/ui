import { createApp } from "vue"
import ComboboxRenderFixture from "./ComboboxRenderFixture.vue"

function mount(root: HTMLElement) {
  createApp(ComboboxRenderFixture).mount(root)
}

export { mount }
