import { mount as mountComponent } from "svelte"
import CarouselFixture from "./CarouselFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(CarouselFixture, { target: root })
}

export { mount }
