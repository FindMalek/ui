import { mount as mountComponent } from "svelte"
import ResizableFixture from "./ResizableFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(ResizableFixture, { target: root })
}

export { mount }
