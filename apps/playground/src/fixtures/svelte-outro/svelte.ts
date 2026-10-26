import { mount as mountComponent } from "svelte"
import OutroFixture from "./OutroFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(OutroFixture, { target: root })
}

export { mount }
