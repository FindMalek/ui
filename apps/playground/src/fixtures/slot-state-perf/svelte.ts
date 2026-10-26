import { mount as mountComponent } from "svelte"
import SlotStatePerfFixture from "./SlotStatePerfFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(SlotStatePerfFixture, { target: root })
}

export { mount }
