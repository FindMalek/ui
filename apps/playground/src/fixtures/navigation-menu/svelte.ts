import { mount as mountComponent } from "svelte"
import NavigationMenuFixture from "./NavigationMenuFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(NavigationMenuFixture, { target: root })
}

export { mount }
