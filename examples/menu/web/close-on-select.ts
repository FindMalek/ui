import "@ui-sdk/web/menu"
import { Check, createElement, Monitor, ZoomIn, ZoomOut } from "lucide"

function mount(root: HTMLElement) {
  let zoom = 100
  let fit = false

  root.innerHTML = `
    <ui-menu>
      <ui-menu-trigger>
        <button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none" aria-label="Zoom 100%">
          ${createElement(ZoomIn, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          <span>100%</span>
        </button>
      </ui-menu-trigger>
      <ui-menu-content class="min-w-44 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
        <ui-menu-group>
          <ui-menu-group-label class="px-2 py-1 text-xs text-muted-foreground">Zoom <span>100%</span></ui-menu-group-label>
          <ui-menu-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="zoom-in" close-on-select="false">
            ${createElement(ZoomIn, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
            Zoom in
          </ui-menu-item>
          <ui-menu-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="zoom-out" close-on-select="false">
            ${createElement(ZoomOut, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
            Zoom out
          </ui-menu-item>
          <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="reset">
            <span class="size-4 shrink-0"></span>
            Reset to 100%
          </ui-menu-item>
        </ui-menu-group>
        <ui-menu-separator class="-mx-1 my-1 h-px bg-border/50"></ui-menu-separator>
        <ui-menu-checkbox-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="fit" checked="false" close-on-select>
          ${createElement(Monitor, { class: "size-4 text-muted-foreground group-data-highlighted:text-current", "aria-hidden": "true" }).outerHTML}
          Fit to window
          ${createElement(Check, { class: "invisible ms-auto size-4 group-data-checked:visible", "aria-hidden": "true" }).outerHTML}
        </ui-menu-checkbox-item>
      </ui-menu-content>
    </ui-menu>
  `
  const button = root.querySelector("button")!
  const zoomIn = root.querySelector("[value=zoom-in]")!
  const zoomOut = root.querySelector("[value=zoom-out]")!
  const fitItem = root.querySelector("[value=fit]")!
  const zoomLabel = root.querySelector("ui-menu-group-label span")!

  const show = () => {
    button.setAttribute("aria-label", `Zoom ${fit ? "to fit" : `${zoom}%`}`)
    button.querySelector("span")!.textContent = fit ? "Fit" : `${zoom}%`
    zoomLabel.textContent = `${zoom}%`
    zoomIn.toggleAttribute("disabled", zoom >= 200)
    zoomOut.toggleAttribute("disabled", zoom <= 50)
  }

  root.addEventListener(
    "action",
    (event) => {
      const { value } = (event as CustomEvent<{ value: string }>).detail
      if (value === "zoom-in") zoom = Math.min(200, zoom + 10)
      if (value === "zoom-out") zoom = Math.max(50, zoom - 10)
      if (value === "reset") zoom = 100
      show()
    },
    { capture: true },
  )
  fitItem.addEventListener("checkedchange", (event) => {
    fit = (event as CustomEvent<{ value: boolean }>).detail.value
    fitItem.setAttribute("checked", String(fit))
    show()
  })
}

export { mount }
