import { mount as mountComponent } from "svelte"
import SelectFixture from "./SelectFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(SelectFixture, { target: root })
}

export { mount }
