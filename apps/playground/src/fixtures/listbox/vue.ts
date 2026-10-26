import { createApp } from "vue"
import ListboxFixture from "./ListboxFixture.vue"

function mount(root: HTMLElement) {
  createApp(ListboxFixture).mount(root)
}

export { mount }
