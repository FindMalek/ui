import { mount as mountComponent } from "svelte"
import PopoverFixture from "./PopoverFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(PopoverFixture, { target: root })
}

export { mount }
