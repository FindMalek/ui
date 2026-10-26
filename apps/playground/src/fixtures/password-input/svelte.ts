import { mount as mountComponent } from "svelte"
import PasswordInputFixture from "./PasswordInputFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(PasswordInputFixture, { target: root })
}

export { mount }
