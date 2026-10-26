import { mount as mountComponent } from "svelte"
import ListboxFixture from "./ListboxFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(ListboxFixture, { target: root })
}

export { mount }
