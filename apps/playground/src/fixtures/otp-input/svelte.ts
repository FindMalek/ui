import { mount as mountComponent } from "svelte"
import OTPInputFixture from "./OTPInputFixture.svelte"

function mount(root: HTMLElement) {
  mountComponent(OTPInputFixture, { target: root })
}

export { mount }
