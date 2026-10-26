import { createApp } from "vue"
import CommandRenderFixture from "./CommandRenderFixture.vue"

function mount(root: HTMLElement) {
  createApp(CommandRenderFixture).mount(root)
}

export { mount }
