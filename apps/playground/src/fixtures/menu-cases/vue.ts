import { createApp } from "vue"
import Cases from "./Cases.vue"

function mount(root: HTMLElement) {
  createApp(Cases).mount(root)
}

export { mount }
