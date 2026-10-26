import { mount as mountComponent } from "svelte"
import AlignmentFixture from "./AlignmentFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(AlignmentFixture, { target: root })
}

export { mount }
