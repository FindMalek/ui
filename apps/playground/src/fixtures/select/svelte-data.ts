import { mount as mountComponent } from "svelte"
import SelectFixture from "./SelectFixture.svelte"

// The same select, rendered from `items`.
function mount(root: HTMLElement) {
  mountComponent(SelectFixture, { target: root, props: { data: true } })
}

export { mount }
