import { createApp } from "vue"
import HoverCardFixture from "./HoverCardFixture.vue"

function mount(root: HTMLElement) {
  createApp(HoverCardFixture).mount(root)
}

export { mount }
