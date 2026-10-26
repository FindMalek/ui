import { createApp } from "vue"
import TabsFixture from "./TabsFixture.vue"

function mount(root: HTMLElement) {
  createApp(TabsFixture).mount(root)
}

export { mount }
