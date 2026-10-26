import { mount as mountComponent } from "svelte"
import Cases from "./Cases.svelte"

function mount(root: HTMLElement) {
  mountComponent(Cases, { target: root })
}

export { mount }
