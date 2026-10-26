import { hydrateFixture } from "../../svelte-ssr"
import HoverCardFixture from "./HoverCardFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "hover-card", HoverCardFixture, {})
}

export { mount }
