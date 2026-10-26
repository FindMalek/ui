import { mount as mountComponent } from "svelte"
import CommandRenderFixture from "./CommandRenderFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(CommandRenderFixture, { target: root })
}

export { mount }
