import { createApp } from "vue"
import MeterFixture from "./MeterFixture.vue"

function mount(root: HTMLElement) {
  createApp(MeterFixture).mount(root)
}

export { mount }
