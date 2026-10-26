import { mount as mountComponent } from "svelte"
import NumberInputFixture from "./NumberInputFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(NumberInputFixture, { target: root })
}

export { mount }
