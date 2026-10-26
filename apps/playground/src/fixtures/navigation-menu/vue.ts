import { createApp } from "vue"
import NavigationMenuFixture from "./NavigationMenuFixture.vue"

function mount(root: HTMLElement) {
  createApp(NavigationMenuFixture).mount(root)
}

export { mount }
