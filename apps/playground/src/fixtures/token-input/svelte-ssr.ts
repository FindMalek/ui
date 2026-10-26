import { hydrateFixture } from "../../svelte-ssr"
import TokenInputFixture from "./TokenInputFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "token-input", TokenInputFixture, {})
}

export { mount }
