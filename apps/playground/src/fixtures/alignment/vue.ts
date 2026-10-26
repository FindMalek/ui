import { createApp } from "vue"
import AlignmentFixture from "./AlignmentFixture.vue"

function mount(root: HTMLElement) {
  createApp(AlignmentFixture).mount(root)
}

export { mount }
