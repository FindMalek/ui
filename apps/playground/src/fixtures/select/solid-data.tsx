import { render } from "@solidjs/web"
import { Fixture } from "./solid"

// The same select, rendered from `items`.
function mount(root: HTMLElement) {
  render(() => <Fixture data />, root)
}

export { mount }
