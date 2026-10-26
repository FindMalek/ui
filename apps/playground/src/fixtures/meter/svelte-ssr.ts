import { hydrateFixture } from "../../svelte-ssr"
import MeterFixture from "./MeterFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "meter", MeterFixture, {})
}

export { mount }
