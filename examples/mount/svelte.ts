import { mount as mountComponent, unmount, type Component } from "svelte"

export function mount(module: { default: Component }, host: HTMLElement) {
  const app = mountComponent(module.default, { target: host })
  return () => {
    unmount(app)
  }
}
