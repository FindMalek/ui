import { hydrateFixture } from "../../svelte-ssr"
import FormsFixture from "./FormsFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "forms", FormsFixture, {})
}

export { mount }
