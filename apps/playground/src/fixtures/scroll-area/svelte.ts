import { mount as mountComponent } from "svelte"
import ScrollAreaFixture from "./ScrollAreaFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(ScrollAreaFixture, { target: root })
}

export { mount }
