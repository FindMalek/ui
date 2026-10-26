import "@ui-sdk/web/menu"
import { Check, createElement } from "lucide"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-menu>
      <ui-menu-trigger>
        <button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">View</button>
      </ui-menu-trigger>
      <ui-menu-content class="min-w-40 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
        <ui-menu-group>
          <ui-menu-group-label class="px-2 py-1 text-xs text-muted-foreground">Appearance</ui-menu-group-label>
          <ui-menu-checkbox-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="status-bar" checked="true">
            <ui-menu-item-indicator keep-mounted class="flex size-4 shrink-0 items-center justify-center data-unchecked:invisible">
              ${createElement(Check, { class: "size-4", "aria-hidden": "true" }).outerHTML}
            </ui-menu-item-indicator>
            Status bar
          </ui-menu-checkbox-item>
          <ui-menu-checkbox-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="minimap" checked="false">
            <ui-menu-item-indicator keep-mounted class="flex size-4 shrink-0 items-center justify-center data-unchecked:invisible">
              ${createElement(Check, { class: "size-4", "aria-hidden": "true" }).outerHTML}
            </ui-menu-item-indicator>
            Minimap
          </ui-menu-checkbox-item>
        </ui-menu-group>
        <ui-menu-separator class="-mx-1 my-1 h-px bg-border/50"></ui-menu-separator>
        <ui-menu-checkbox-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="line-numbers" default-checked>
          <ui-menu-item-indicator keep-mounted class="flex size-4 shrink-0 items-center justify-center data-unchecked:invisible">
            ${createElement(Check, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          </ui-menu-item-indicator>
          Line numbers
        </ui-menu-checkbox-item>
        <ui-menu-checkbox-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="word-wrap">
          <ui-menu-item-indicator keep-mounted class="flex size-4 shrink-0 items-center justify-center data-unchecked:invisible">
            ${createElement(Check, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          </ui-menu-item-indicator>
          Word wrap
        </ui-menu-checkbox-item>
      </ui-menu-content>
    </ui-menu>
    <output class="mt-3 text-sm text-muted-foreground block min-h-5">Status bar shown, minimap hidden</output>
  `
  const statusBar = root.querySelector("[value=status-bar]")!
  const minimap = root.querySelector("[value=minimap]")!
  const content = root.querySelector("ui-menu-content")!
  content.addEventListener(
    "checkedchange",
    (event) => {
      const target = event.target as HTMLElement
      if (target !== statusBar && target !== minimap) return
      target.setAttribute("checked", String((event as CustomEvent<{ value: boolean }>).detail.value))
      const shown = (el: Element) => (el.getAttribute("checked") === "true" ? "shown" : "hidden")
      root.querySelector("output")!.textContent = `Status bar ${shown(statusBar)}, minimap ${shown(minimap)}`
    },
    { capture: true },
  )
}

export { mount }
