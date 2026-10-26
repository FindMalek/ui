import { mount as mountComponent } from "svelte"
import HoverPopupsFixture from "./HoverPopupsFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(HoverPopupsFixture, { target: root })
}

export { mount }
