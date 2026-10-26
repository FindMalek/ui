import { createApp } from "vue"
import NumberInputFixture from "./NumberInputFixture.vue"

function mount(root: HTMLElement) {
  createApp(NumberInputFixture).mount(root)
}

export { mount }
