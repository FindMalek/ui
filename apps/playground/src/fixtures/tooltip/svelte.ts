import { mount as mountComponent } from "svelte"
import TooltipFixture from "./TooltipFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(TooltipFixture, { target: root })
}

export { mount }
