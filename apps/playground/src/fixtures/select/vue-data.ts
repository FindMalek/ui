import { createApp } from "vue"
import SelectFixture from "./SelectFixture.vue"

// The same select, rendered from `items`.
function mount(root: HTMLElement) {
  createApp(SelectFixture, { data: true }).mount(root)
}

export { mount }
