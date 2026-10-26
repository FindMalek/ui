import "@ui-sdk/web/toggle"
import { Bell, createElement } from "lucide"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-start gap-3">
      <ui-toggle default-pressed>
        <button class="group inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted disabled:pointer-events-none data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none">
          <ui-toggle-icon class="flex">${createElement(Bell, { class: "size-4 group-data-pressed:fill-current", "aria-hidden": "true" }).outerHTML}</ui-toggle-icon>
          Notifications
        </button>
      </ui-toggle>
      <button type="button" data-outside class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px motion-reduce:transform-none motion-reduce:transition-none">Toggle from outside</button>
      <output class="text-sm text-muted-foreground">Notifications: on</output>
    </div>
  `
  const notifications = root.querySelector("ui-toggle")!
  root.querySelector("[data-outside]")!.addEventListener("click", () => notifications.api.toggle())
  notifications.addEventListener("pressedchange", (event) => {
    const { value, reason } = event.detail
    root.querySelector("output")!.textContent =
      `Notifications: ${value ? "on" : "off"}, last change: ${reason}`
  })
}

export { mount }
