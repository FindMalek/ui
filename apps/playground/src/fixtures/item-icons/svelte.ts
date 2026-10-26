import { mount as mountComponent } from "svelte"
import ItemIconsFixture from "./ItemIconsFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(ItemIconsFixture, { target: root })
}

export { mount }
