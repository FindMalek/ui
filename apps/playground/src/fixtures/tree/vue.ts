import { createApp } from "vue"
import TreeFixture from "./TreeFixture.vue"

function mount(root: HTMLElement) {
  createApp(TreeFixture).mount(root)
}

export { mount }
