import { mount as mountComponent } from "svelte"
import ListboxFixture from "./ListboxFixture.svelte"

// The same listbox, rendered from `items`.
function mount(root: HTMLElement) {
  mountComponent(ListboxFixture, { target: root, props: { data: true } })
}

export { mount }
