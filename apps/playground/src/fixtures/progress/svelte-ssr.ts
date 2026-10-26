import { hydrateFixture } from "../../svelte-ssr"
import ProgressFixture from "./ProgressFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "progress", ProgressFixture, {})
}

export { mount }
