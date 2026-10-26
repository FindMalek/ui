import { mount as mountComponent } from "svelte"
import DialogFixture from "./DialogFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(DialogFixture, { target: root })
}

export { mount }
