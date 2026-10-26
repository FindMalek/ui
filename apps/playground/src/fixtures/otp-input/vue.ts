import { createApp } from "vue"
import OTPInputFixture from "./OTPInputFixture.vue"

function mount(root: HTMLElement) {
  createApp(OTPInputFixture).mount(root)
}

export { mount }
