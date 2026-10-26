import { mount as mountComponent } from "svelte"
import TriggerMenuFixture from "./TriggerMenuFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(TriggerMenuFixture, { target: root })
}

export { mount }
