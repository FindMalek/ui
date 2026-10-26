import { mount as mountComponent } from "svelte"
import ToggleFixture from "./ToggleFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(ToggleFixture, { target: root })
}

export { mount }
