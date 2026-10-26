import { createApp } from "vue"
import DialogFixture from "./DialogFixture.vue"

function mount(root: HTMLElement) {
  createApp(DialogFixture).mount(root)
}

export { mount }
