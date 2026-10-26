import { mount as mountComponent } from "svelte"
import TreeFixture from "./TreeFixture.svelte"

// The same tree, rendered from `items`.
function mount(root: HTMLElement) {
  mountComponent(TreeFixture, { target: root, props: { data: true } })
}

export { mount }
