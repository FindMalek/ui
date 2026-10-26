import { mount as mountComponent } from "svelte"
import ToastFixture from "./ToastFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(ToastFixture, { target: root })
}

export { mount }
