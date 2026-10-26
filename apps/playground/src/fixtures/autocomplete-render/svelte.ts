import { mount as mountComponent } from "svelte"
import AutocompleteRenderFixture from "./AutocompleteRenderFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(AutocompleteRenderFixture, { target: root })
}

export { mount }
