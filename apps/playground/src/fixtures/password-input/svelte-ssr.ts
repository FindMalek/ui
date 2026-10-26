import { hydrateFixture } from "../../svelte-ssr"
import PasswordInputFixture from "./PasswordInputFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "password-input", PasswordInputFixture, {})
}

export { mount }
