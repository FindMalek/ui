import { mount as mountComponent } from "svelte"
import PopupPayloadsFixture from "./PopupPayloadsFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(PopupPayloadsFixture, { target: root })
}

export { mount }
