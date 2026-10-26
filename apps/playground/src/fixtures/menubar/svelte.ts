import { mount as mountComponent } from "svelte"
import MenubarFixture from "./MenubarFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(MenubarFixture, { target: root })
}

export { mount }
