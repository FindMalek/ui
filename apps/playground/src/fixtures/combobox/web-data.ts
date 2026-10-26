import { render } from "./web"

// The same combobox, rendered from `items`.
function mount(root: HTMLElement) {
  return render(root, true)
}

export { mount }
