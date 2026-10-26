import { hydrateFixture } from "../../svelte-ssr"
import DialogFixture from "./DialogFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "dialog", DialogFixture, {})
}

export { mount }
