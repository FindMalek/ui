import { createApp } from "vue"
import SelectFixture from "./SelectFixture.vue"

function mount(root: HTMLElement) {
  createApp(SelectFixture).mount(root)
}

export { mount }
