import { hydrateFixture } from "../../svelte-ssr"
import AvatarFixture from "./AvatarFixture.svelte"

function mount(root: HTMLElement) {
  return hydrateFixture(root, "avatar", AvatarFixture, {})
}

export { mount }
