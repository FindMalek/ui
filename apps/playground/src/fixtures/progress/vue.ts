import { createApp } from "vue"
import ProgressFixture from "./ProgressFixture.vue"

function mount(root: HTMLElement) {
  createApp(ProgressFixture).mount(root)
}

export { mount }
