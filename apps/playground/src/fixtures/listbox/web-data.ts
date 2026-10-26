import { render } from "./web"

// The same listbox, rendered from `items`.
function mount(root: HTMLElement) {
  return render(root, true)
}

export { mount }
