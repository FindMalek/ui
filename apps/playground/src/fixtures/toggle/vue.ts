import { createApp } from "vue"
import ToggleFixture from "./ToggleFixture.vue"

function mount(root: HTMLElement) {
  createApp(ToggleFixture).mount(root)
}

export { mount }
