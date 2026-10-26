import { hydrateFixture } from "../../svelte-ssr"
import FormFixture from "./FormFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "form", FormFixture, {})
}

export { mount }
