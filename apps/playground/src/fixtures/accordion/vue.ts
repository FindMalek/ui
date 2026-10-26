import { createApp } from "vue"
import AccordionFixture from "./AccordionFixture.vue"

function mount(root: HTMLElement) {
  createApp(AccordionFixture).mount(root)
}

export { mount }
