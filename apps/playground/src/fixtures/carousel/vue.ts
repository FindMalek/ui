import { createApp } from "vue"
import CarouselFixture from "./CarouselFixture.vue"

function mount(root: HTMLElement) {
  createApp(CarouselFixture).mount(root)
}

export { mount }
