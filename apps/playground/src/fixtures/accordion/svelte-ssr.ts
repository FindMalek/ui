import { hydrateFixture } from "../../svelte-ssr"
import AccordionFixture from "./AccordionFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "accordion", AccordionFixture, {})
}

export { mount }
