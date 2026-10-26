import { createApp } from "vue"
import FormFixture from "./FormFixture.vue"

function mount(root: HTMLElement) {
  createApp(FormFixture).mount(root)
}

export { mount }
