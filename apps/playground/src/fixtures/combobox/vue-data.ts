import { createApp } from "vue"
import ComboboxFixture from "./ComboboxFixture.vue"

// The same combobox, rendered from `items`.
function mount(root: HTMLElement) {
  createApp(ComboboxFixture, { data: true }).mount(root)
}

export { mount }
