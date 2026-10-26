import { mount as mountComponent } from "svelte"
import HoverCardFixture from "./HoverCardFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(HoverCardFixture, { target: root })
}

export { mount }
