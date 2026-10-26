import { createApp } from "vue"
import PopoverFixture from "./PopoverFixture.vue"

function mount(root: HTMLElement) {
  createApp(PopoverFixture).mount(root)
}

export { mount }
