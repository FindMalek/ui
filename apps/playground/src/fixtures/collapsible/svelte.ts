import { mount as mountComponent } from "svelte"
import CollapsibleFixture from "./CollapsibleFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(CollapsibleFixture, { target: root })
}

export { mount }
