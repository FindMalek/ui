import { createApp } from "vue"
import MenuDataFixture from "./MenuDataFixture.vue"

function mount(root: HTMLElement) {
  createApp(MenuDataFixture).mount(root)
}

export { mount }
