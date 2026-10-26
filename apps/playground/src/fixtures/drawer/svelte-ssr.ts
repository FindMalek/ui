import { hydrateFixture } from "../../svelte-ssr"
import DrawerFixture from "./DrawerFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "drawer", DrawerFixture, {})
}

export { mount }
