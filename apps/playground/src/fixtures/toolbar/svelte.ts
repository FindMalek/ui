import { mount as mountComponent } from "svelte"
import ToolbarFixture from "./ToolbarFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(ToolbarFixture, { target: root })
}

export { mount }
