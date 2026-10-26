import { mount as mountComponent } from "svelte"
import CommandFixture from "./CommandFixture.svelte"

// The same command list, rendered from `items`.
function mount(root: HTMLElement) {
  mountComponent(CommandFixture, { target: root, props: { data: true } })
}

export { mount }
