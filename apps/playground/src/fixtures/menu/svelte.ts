import { mount as mountComponent } from "svelte"
import MenuFixture from "./MenuFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(MenuFixture, { target: root })
}

export { mount }
