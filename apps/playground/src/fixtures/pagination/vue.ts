import { createApp } from "vue"
import PaginationFixture from "./PaginationFixture.vue"

function mount(root: HTMLElement) {
  createApp(PaginationFixture).mount(root)
}

export { mount }
