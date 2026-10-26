import { createApp } from "vue"
import PopupPayloadsFixture from "./PopupPayloadsFixture.vue"

function mount(root: HTMLElement) {
  createApp(PopupPayloadsFixture).mount(root)
}

export { mount }
