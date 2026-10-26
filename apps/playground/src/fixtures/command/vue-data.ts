import { createApp } from "vue"
import CommandFixture from "./CommandFixture.vue"

// The same command list, rendered from `items`.
function mount(root: HTMLElement) {
  createApp(CommandFixture, { data: true }).mount(root)
}

export { mount }
