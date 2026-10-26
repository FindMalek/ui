import { mount as mountComponent } from "svelte"
import MeterFixture from "./MeterFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(MeterFixture, { target: root })
}

export { mount }
