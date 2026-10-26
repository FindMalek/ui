import { hydrateFixture } from "../../svelte-ssr"
import Fixture from "./Fixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "file-input", Fixture, {})
}

export { mount }
