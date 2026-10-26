import { createApp } from "vue"
import SelectRenderFixture from "./SelectRenderFixture.vue"

function mount(root: HTMLElement) {
  createApp(SelectRenderFixture).mount(root)
}

export { mount }
