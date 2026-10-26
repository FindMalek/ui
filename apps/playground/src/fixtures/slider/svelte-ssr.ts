import { hydrateFixture } from "../../svelte-ssr"
import SliderFixture from "./SliderFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "slider", SliderFixture, {})
}

export { mount }
