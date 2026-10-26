import { mount as mountComponent } from "svelte"
import PaginationFixture from "./PaginationFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(PaginationFixture, { target: root })
}

export { mount }
