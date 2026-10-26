import { createApp } from "vue"
import ResizableFixture from "./ResizableFixture.vue"

function mount(root: HTMLElement) {
  createApp(ResizableFixture).mount(root)
}

export { mount }
