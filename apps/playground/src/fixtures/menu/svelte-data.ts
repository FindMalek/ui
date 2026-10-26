import { mount as mountComponent } from "svelte"
import MenuFixture from "./MenuFixture.svelte"

// The same menu, rendered from `items`.
function mount(root: HTMLElement) {
  mountComponent(MenuFixture, { target: root, props: { data: true } })
}

export { mount }
