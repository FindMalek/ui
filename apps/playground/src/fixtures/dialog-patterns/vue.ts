import { createApp } from "vue"
import "./shared"
import Fixture from "./Fixture.vue"

function mount(root: HTMLElement) {
  createApp(Fixture).mount(root)
}

export { mount }
