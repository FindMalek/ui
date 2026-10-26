import { render } from "@solidjs/web"
import { Fixture } from "./solid"

// The same tree as data: it renders its own items.
function mount(root: HTMLElement) {
  render(() => <Fixture data />, root)
}

export { mount }
