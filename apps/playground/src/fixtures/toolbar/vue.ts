import { createApp } from "vue"
import ToolbarFixture from "./ToolbarFixture.vue"

function mount(root: HTMLElement) {
  createApp(ToolbarFixture).mount(root)
}

export { mount }
