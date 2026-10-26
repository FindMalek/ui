import { createApp } from "vue"
import TreeLinksFixture from "./TreeLinksFixture.vue"

function mount(root: HTMLElement) {
  createApp(TreeLinksFixture).mount(root)
}

export { mount }
