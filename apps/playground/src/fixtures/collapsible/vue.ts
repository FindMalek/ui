import { createApp } from "vue"
import CollapsibleFixture from "./CollapsibleFixture.vue"

function mount(root: HTMLElement) {
  createApp(CollapsibleFixture).mount(root)
}

export { mount }
