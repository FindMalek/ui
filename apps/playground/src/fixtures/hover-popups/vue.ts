import { createApp } from "vue"
import HoverPopupsFixture from "./HoverPopupsFixture.vue"

function mount(root: HTMLElement) {
  createApp(HoverPopupsFixture).mount(root)
}

export { mount }
