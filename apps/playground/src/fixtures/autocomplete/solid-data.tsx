import { render } from "@solidjs/web"
import { Fixture } from "./solid"

// The same autocomplete, rendered from `items`.
function mount(root: HTMLElement) {
  render(() => <Fixture data />, root)
}

export { mount }
