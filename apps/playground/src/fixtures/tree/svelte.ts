import { mount as mountComponent } from "svelte"
import TreeFixture from "./TreeFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(TreeFixture, { target: root })
}

export { mount }
