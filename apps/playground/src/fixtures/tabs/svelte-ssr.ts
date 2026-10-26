import { hydrateFixture } from "../../svelte-ssr"
import TabsFixture from "./TabsFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "tabs", TabsFixture, {})
}

export { mount }
