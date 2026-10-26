import { mount as mountComponent } from "svelte"
import AvatarFixture from "./AvatarFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(AvatarFixture, { target: root })
}

export { mount }
