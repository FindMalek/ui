import { createApp } from "vue"
import DrawerFixture from "./DrawerFixture.vue"

function mount(root: HTMLElement) {
  createApp(DrawerFixture).mount(root)
}

export { mount }
