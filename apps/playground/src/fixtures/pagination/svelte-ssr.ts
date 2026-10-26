import { hydrateFixture } from "../../svelte-ssr"
import PaginationFixture from "./PaginationFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "pagination", PaginationFixture, {})
}

export { mount }
