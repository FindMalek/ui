import { mount as mountComponent } from "svelte"
import ComboboxFixture from "./ComboboxFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(ComboboxFixture, { target: root })
}

export { mount }
