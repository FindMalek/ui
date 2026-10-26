import { mount as mountComponent } from "svelte"
import ComboboxFixture from "./ComboboxFixture.svelte"

// The same combobox, rendered from `items`.
function mount(root: HTMLElement) {
  mountComponent(ComboboxFixture, { target: root, props: { data: true } })
}

export { mount }
