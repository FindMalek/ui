import { createApp } from "vue"
import CasesData from "./CasesData.vue"

function mount(root: HTMLElement) {
  createApp(CasesData).mount(root)
}

export { mount }
