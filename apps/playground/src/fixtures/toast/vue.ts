import { createApp } from "vue"
import ToastFixture from "./ToastFixture.vue"

function mount(root: HTMLElement) {
  createApp(ToastFixture).mount(root)
}

export { mount }
