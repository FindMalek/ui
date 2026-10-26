import { hydrateFixture } from "../../svelte-ssr"
import ItemIconsFixture from "./ItemIconsFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "item-icons", ItemIconsFixture, {})
}

export { mount }
