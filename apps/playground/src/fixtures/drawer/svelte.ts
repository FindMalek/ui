import { mount as mountComponent } from "svelte"
import DrawerFixture from "./DrawerFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(DrawerFixture, { target: root })
}

export { mount }
