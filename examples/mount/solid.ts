import { render } from "@solidjs/web"
import { createComponent, type Component } from "solid-js"

export function mount(module: { Example: Component }, host: HTMLElement) {
  return render(() => createComponent(module.Example, {}), host)
}
