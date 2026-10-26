import { createApp } from "vue"
import TreeDataFixture from "./TreeDataFixture.vue"

function mount(root: HTMLElement) {
  createApp(TreeDataFixture).mount(root)
}

export { mount }
