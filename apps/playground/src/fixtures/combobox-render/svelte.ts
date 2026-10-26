import { mount as mountComponent } from "svelte"
import ComboboxRenderFixture from "./ComboboxRenderFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(ComboboxRenderFixture, { target: root })
}

export { mount }
