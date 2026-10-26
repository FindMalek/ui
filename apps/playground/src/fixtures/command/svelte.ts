import { mount as mountComponent } from "svelte"
import CommandFixture from "./CommandFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(CommandFixture, { target: root })
}

export { mount }
