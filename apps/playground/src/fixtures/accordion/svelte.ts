import { mount as mountComponent } from "svelte"
import AccordionFixture from "./AccordionFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(AccordionFixture, { target: root })
}

export { mount }
