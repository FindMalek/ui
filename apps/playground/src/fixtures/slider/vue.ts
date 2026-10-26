import { createApp } from "vue"
import SliderFixture from "./SliderFixture.vue"

function mount(root: HTMLElement) {
  createApp(SliderFixture).mount(root)
}

export { mount }
