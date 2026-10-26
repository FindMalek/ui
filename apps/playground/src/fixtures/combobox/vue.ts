import { createApp } from "vue"
import ComboboxFixture from "./ComboboxFixture.vue"

function mount(root: HTMLElement) {
  createApp(ComboboxFixture).mount(root)
}

export { mount }
