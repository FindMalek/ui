import { mount as mountComponent } from "svelte"
import CasesData from "./CasesData.svelte"

function mount(root: HTMLElement) {
  mountComponent(CasesData, { target: root })
}

export { mount }
