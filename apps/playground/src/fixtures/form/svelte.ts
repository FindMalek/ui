import { mount as mountComponent } from "svelte"
import FormFixture from "./FormFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(FormFixture, { target: root })
}

export { mount }
