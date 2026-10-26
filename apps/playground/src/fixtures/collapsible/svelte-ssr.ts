import { hydrateFixture } from "../../svelte-ssr"
import CollapsibleFixture from "./CollapsibleFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "collapsible", CollapsibleFixture, {})
}

export { mount }
