import { hydrateFixture } from "../../svelte-ssr"
import CalendarFixture from "./CalendarFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "calendar", CalendarFixture, {})
}

export { mount }
