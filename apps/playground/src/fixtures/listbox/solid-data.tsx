import { render } from "@solidjs/web"
import { Fixture } from "./solid"

// The same listbox, rendered from `items`.
function mount(root: HTMLElement) {
  render(() => <Fixture data />, root)
}

export { mount }
