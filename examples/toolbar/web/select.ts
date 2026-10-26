import "@ui-sdk/web/toolbar"
import "@ui-sdk/web/select"
import { Check, ChevronsUpDown, createElement, Monitor, ZoomIn, ZoomOut } from "lucide"

const zooms = ["50%", "75%", "100%", "150%", "200%"]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-toolbar aria-label="View" class="flex w-fit items-center gap-1 rounded-3xl border border-border p-1">
      <ui-toolbar-button data-zoom="out">
        <button aria-label="Zoom out" class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none">
          ${createElement(ZoomOut, { class: "size-4", "aria-hidden": "true" }).outerHTML}
        </button>
      </ui-toolbar-button>
      <ui-select default-value="100%">
        <ui-toolbar-button>
          <ui-select-trigger>
            <button aria-label="Zoom" class="inline-flex h-8 w-22 shrink-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none tabular-nums data-open:bg-muted">
              <ui-select-value></ui-select-value>
              ${createElement(ChevronsUpDown, { class: "size-4 text-muted-foreground", "aria-hidden": "true" }).outerHTML}
            </button>
          </ui-select-trigger>
        </ui-toolbar-button>
        <ui-select-content class="max-h-(--available-height) overflow-x-hidden overflow-y-auto rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none min-w-(--anchor-width)">
          ${zooms
            .map(
              (zoom) => `
                <ui-select-item value="${zoom}" class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm tabular-nums outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 leading-5">
                  ${zoom}
                  <ui-select-item-indicator class="absolute end-2 flex size-4 items-center justify-center">${createElement(Check, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-select-item-indicator>
                </ui-select-item>
              `,
            )
            .join("")}
        </ui-select-content>
      </ui-select>
      <ui-toolbar-button data-zoom="in">
        <button aria-label="Zoom in" class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none">
          ${createElement(ZoomIn, { class: "size-4", "aria-hidden": "true" }).outerHTML}
        </button>
      </ui-toolbar-button>
      <ui-toolbar-separator class="mx-1 h-5 w-px shrink-0 bg-border"></ui-toolbar-separator>
      <ui-toolbar-button data-zoom="fit">
        <button aria-label="Fit to screen" class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none">
          ${createElement(Monitor, { class: "size-4", "aria-hidden": "true" }).outerHTML}
        </button>
      </ui-toolbar-button>
    </ui-toolbar>
  `
  const select = root.querySelector("ui-select") as HTMLElement & { value: string | null }
  const button = (zoom: string) => root.querySelector(`[data-zoom="${zoom}"]`)!
  const show = () => {
    const index = zooms.indexOf(select.value ?? "")
    button("out").toggleAttribute("disabled", index === 0)
    button("in").toggleAttribute("disabled", index === zooms.length - 1)
  }
  const step = (by: number) => {
    const index = zooms.indexOf(select.value ?? "")
    select.value = zooms[Math.min(Math.max(index + by, 0), zooms.length - 1)]
  }
  button("out").addEventListener("click", () => step(-1))
  button("in").addEventListener("click", () => step(1))
  button("fit").addEventListener("click", () => (select.value = "100%"))
  select.addEventListener("valuechange", () => queueMicrotask(show))
  customElements.whenDefined("ui-select").then(show)
}

export { mount }
