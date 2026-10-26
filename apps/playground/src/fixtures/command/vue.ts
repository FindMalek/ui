import { createApp } from "vue"
import CommandFixture from "./CommandFixture.vue"

function mount(root: HTMLElement) {
  createApp(CommandFixture).mount(root)
}

export { mount }
