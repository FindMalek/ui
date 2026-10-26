import { createApp } from "vue"
import MenuFixture from "./MenuFixture.vue"

function mount(root: HTMLElement) {
  createApp(MenuFixture).mount(root)
}

export { mount }
