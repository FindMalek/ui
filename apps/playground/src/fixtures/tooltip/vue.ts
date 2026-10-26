import { createApp } from "vue"
import TooltipFixture from "./TooltipFixture.vue"

function mount(root: HTMLElement) {
  createApp(TooltipFixture).mount(root)
}

export { mount }
