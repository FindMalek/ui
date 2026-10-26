import { createApp } from "vue"
import PasswordInputFixture from "./PasswordInputFixture.vue"

function mount(root: HTMLElement) {
  createApp(PasswordInputFixture).mount(root)
}

export { mount }
