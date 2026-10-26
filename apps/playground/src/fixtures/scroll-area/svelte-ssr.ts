import { hydrateFixture } from "../../svelte-ssr"
import ScrollAreaFixture from "./ScrollAreaFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "scroll-area", ScrollAreaFixture, {})
}

export { mount }
