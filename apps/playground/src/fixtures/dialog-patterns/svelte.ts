import { mount as mountComponent } from "svelte"
import "./shared"
import Fixture from "./Fixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(Fixture, { target: root })
}

export { mount }
