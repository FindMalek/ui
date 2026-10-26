import { createApp } from "vue"
import ItemIconsFixture from "./ItemIconsFixture.vue"

function mount(root: HTMLElement) {
  createApp(ItemIconsFixture).mount(root)
}

export { mount }
