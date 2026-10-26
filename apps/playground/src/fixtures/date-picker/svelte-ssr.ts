import { hydrateFixture } from "../../svelte-ssr"
import DatePickerFixture from "./DatePickerFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "date-picker", DatePickerFixture, {})
}

export { mount }
