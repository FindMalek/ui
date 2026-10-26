import { render } from "./web"

// The same command list, rendered from `items`.
function mount(root: HTMLElement) {
  return render(root, true)
}

export { mount }
