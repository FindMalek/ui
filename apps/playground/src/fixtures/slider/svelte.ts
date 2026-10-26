import { mount as mountComponent } from "svelte"
import SliderFixture from "./SliderFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(SliderFixture, { target: root })
}

export { mount }
