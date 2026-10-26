import { hydrateFixture } from "../../svelte-ssr"
import NumberInputFixture from "./NumberInputFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "number-input", NumberInputFixture, {})
}

export { mount }
