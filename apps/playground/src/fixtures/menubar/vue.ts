import { createApp } from "vue"
import MenubarFixture from "./MenubarFixture.vue"

function mount(root: HTMLElement) {
  createApp(MenubarFixture).mount(root)
}

export { mount }
