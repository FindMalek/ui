import { hydrateFixture } from "../../svelte-ssr"
import OTPInputFixture from "./OTPInputFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "otp-input", OTPInputFixture, {})
}

export { mount }
