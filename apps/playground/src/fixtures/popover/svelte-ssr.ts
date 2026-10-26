import { hydrateFixture } from "../../svelte-ssr"
import PopoverFixture from "./PopoverFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "popover", PopoverFixture, {})
}

export { mount }
