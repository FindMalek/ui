import { createApp, type Component } from "vue"

let apps = 0

export function mount(module: { default: Component }, host: HTMLElement) {
  const app = createApp(module.default)
  app.config.idPrefix = `example-${++apps}`
  app.mount(host)
  return () => app.unmount()
}
