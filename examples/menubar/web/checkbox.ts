import "@ui-sdk/web/menubar"
import "@ui-sdk/web/menu"
import { Check, createElement } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-start gap-3">
      <ui-menubar class="flex h-8 w-fit items-center rounded-2xl border border-border p-[3px]">
        <ui-menu>
          <ui-menu-trigger>
            <button class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted">View</button>
          </ui-menu-trigger>
          <ui-menu-content class="min-w-36 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
            <ui-menu-checkbox-item value="status-bar" checked="true" class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
              <ui-menu-item-indicator class="pointer-events-none absolute start-1.5 flex size-4 items-center justify-center">${createElement(Check, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-menu-item-indicator>
              Status Bar
            </ui-menu-checkbox-item>
            <ui-menu-checkbox-item value="activity-bar" default-checked class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
              <ui-menu-item-indicator class="pointer-events-none absolute start-1.5 flex size-4 items-center justify-center">${createElement(Check, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-menu-item-indicator>
              Activity Bar
            </ui-menu-checkbox-item>
          </ui-menu-content>
        </ui-menu>
        <ui-menu>
          <ui-menu-trigger>
            <button class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted">Format</button>
          </ui-menu-trigger>
          <ui-menu-content class="min-w-36 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
            <ui-menu-checkbox-item value="strikethrough" class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
              <ui-menu-item-indicator class="pointer-events-none absolute start-1.5 flex size-4 items-center justify-center">${createElement(Check, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-menu-item-indicator>
              Strikethrough
            </ui-menu-checkbox-item>
            <ui-menu-checkbox-item value="code" class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
              <ui-menu-item-indicator class="pointer-events-none absolute start-1.5 flex size-4 items-center justify-center">${createElement(Check, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-menu-item-indicator>
              Code
            </ui-menu-checkbox-item>
          </ui-menu-content>
        </ui-menu>
      </ui-menubar>
      <output class="text-sm text-muted-foreground">Status bar shown</output>
    </div>
  `
  const statusBar = root.querySelector("[value=status-bar]")!
  statusBar.addEventListener("checkedchange", (event) => {
    const { value } = (event as CustomEvent<{ value: boolean }>).detail
    statusBar.setAttribute("checked", String(value))
    root.querySelector("output")!.textContent = `Status bar ${value ? "shown" : "hidden"}`
  })
}
