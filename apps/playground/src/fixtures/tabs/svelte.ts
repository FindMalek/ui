import { mount as mountComponent } from "svelte"
import TabsFixture from "./TabsFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(TabsFixture, { target: root })
}

export { mount }
