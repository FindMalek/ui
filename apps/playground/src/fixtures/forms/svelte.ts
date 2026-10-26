import { mount as mountComponent } from "svelte"
import FormsFixture from "./FormsFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(FormsFixture, { target: root })
}

export { mount }
