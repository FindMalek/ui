import { createApp } from "vue"
import ListboxFixture from "./ListboxFixture.vue"

// The same listbox, rendered from `items`.
function mount(root: HTMLElement) {
  createApp(ListboxFixture, { data: true }).mount(root)
}

export { mount }
