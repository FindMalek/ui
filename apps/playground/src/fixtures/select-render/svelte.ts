import { mount as mountComponent } from "svelte"
import SelectRenderFixture from "./SelectRenderFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(SelectRenderFixture, { target: root })
}

export { mount }
