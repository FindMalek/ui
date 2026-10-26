import { mount as mountComponent } from "svelte"
import WrappedContentFixture from "./WrappedContentFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(WrappedContentFixture, { target: root })
}

export { mount }
