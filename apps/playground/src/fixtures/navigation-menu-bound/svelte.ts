import { mount as mountComponent } from "svelte"
import NavigationMenuBoundFixture from "./NavigationMenuBoundFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(NavigationMenuBoundFixture, { target: root })
}

export { mount }
