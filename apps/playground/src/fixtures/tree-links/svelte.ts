import { mount as mountComponent } from "svelte"
import TreeLinksFixture from "./TreeLinksFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(TreeLinksFixture, { target: root })
}

export { mount }
