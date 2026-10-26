import { hydrateFixture } from "../../svelte-ssr"
import MenuFixture from "./MenuFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "menu", MenuFixture, {})
}

export { mount }
