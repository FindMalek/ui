import { createElement, StrictMode, type ComponentType } from "react"
import { createRoot } from "react-dom/client"

export function mount(module: { Example: ComponentType }, host: HTMLElement) {
  const root = createRoot(host)
  root.render(createElement(StrictMode, null, createElement(module.Example)))
  return () => root.unmount()
}
