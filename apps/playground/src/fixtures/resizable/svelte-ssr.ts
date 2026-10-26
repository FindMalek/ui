import { hydrateFixture } from "../../svelte-ssr"
import ResizableFixture from "./ResizableFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "resizable", ResizableFixture, {})
}

export { mount }
