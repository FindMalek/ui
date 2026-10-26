import { createApp } from "vue"
import ScrollAreaFixture from "./ScrollAreaFixture.vue"

function mount(root: HTMLElement) {
  createApp(ScrollAreaFixture).mount(root)
}

export { mount }
