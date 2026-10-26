import { hydrateFixture } from "../../svelte-ssr"
import ToastFixture from "./ToastFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "toast", ToastFixture, {})
}

export { mount }
