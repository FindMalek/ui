import { mount as mountComponent } from "svelte"
import AutocompleteFixture from "./AutocompleteFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(AutocompleteFixture, { target: root })
}

export { mount }
