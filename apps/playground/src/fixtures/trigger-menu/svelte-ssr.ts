import { hydrateFixture } from "../../svelte-ssr"
import TriggerMenuFixture from "./TriggerMenuFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "trigger-menu", TriggerMenuFixture, {})
}

export { mount }
