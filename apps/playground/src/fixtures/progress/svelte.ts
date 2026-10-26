import { mount as mountComponent } from "svelte"
import ProgressFixture from "./ProgressFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(ProgressFixture, { target: root })
}

export { mount }
