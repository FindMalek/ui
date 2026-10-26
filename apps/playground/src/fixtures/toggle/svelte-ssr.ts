import { hydrateFixture } from "../../svelte-ssr"
import ToggleFixture from "./ToggleFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "toggle", ToggleFixture, {})
}

export { mount }
