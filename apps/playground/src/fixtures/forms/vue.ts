import { createApp } from "vue"
import FormsFixture from "./FormsFixture.vue"

function mount(root: HTMLElement) {
  createApp(FormsFixture).mount(root)
}

export { mount }
