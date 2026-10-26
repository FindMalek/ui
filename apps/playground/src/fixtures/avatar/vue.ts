import { createApp } from "vue"
import AvatarFixture from "./AvatarFixture.vue"

function mount(root: HTMLElement) {
  createApp(AvatarFixture).mount(root)
}

export { mount }
