import { createApp } from "vue"
import NavigationMenuBoundFixture from "./NavigationMenuBoundFixture.vue"

function mount(root: HTMLElement) {
  createApp(NavigationMenuBoundFixture).mount(root)
}

export { mount }
