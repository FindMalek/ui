import { hydrateFixture } from "../../svelte-ssr"
import CarouselFixture from "./CarouselFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "carousel", CarouselFixture, {})
}

export { mount }
