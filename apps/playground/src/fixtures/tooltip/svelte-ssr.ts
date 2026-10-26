import { hydrateFixture } from "../../svelte-ssr"
import TooltipFixture from "./TooltipFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "tooltip", TooltipFixture, {})
}

export { mount }
