import { mount as mountComponent } from "svelte"
import TokenInputFixture from "./TokenInputFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(TokenInputFixture, { target: root })
}

export { mount }
