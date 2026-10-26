import "@ui-sdk/web/menubar"
import "@ui-sdk/web/menu"
import { Check, ChevronRight, Circle, createElement } from "lucide"
import type { MenuData } from "@ui-sdk/web"

const file: MenuData = [
  { value: "new", label: "New File", shortcut: "mod+alt+n" },
  { value: "open", label: "Open…" },
  { type: "separator" },
  { type: "submenu", label: "Share", items: [{ value: "email", label: "Email link" }] },
]
const view: MenuData = [
  { type: "checkbox", value: "minimap", label: "Minimap", defaultChecked: true },
  { type: "checkbox", value: "wrap", label: "Word Wrap" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-start gap-3">
      <ui-menubar class="flex h-8 w-fit items-center rounded-2xl border border-border p-[3px]">
        <ui-menu>
          <ui-menu-trigger>
            <button class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted">File</button>
          </ui-menu-trigger>
          <template>
            <ui-menu-content class="min-w-48 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 **:data-[slot=menu-shortcut]:ms-auto **:data-[slot=menu-shortcut]:text-xs **:data-[slot=menu-shortcut]:tracking-widest **:data-[slot=menu-shortcut]:text-muted-foreground data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
              <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"></ui-menu-item>
              <ui-menu-checkbox-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
              </ui-menu-checkbox-item>
              <ui-menu-radio-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
              </ui-menu-radio-item>
              <ui-menu-sub-trigger class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
                ${createElement(ChevronRight, { class: "size-4 ms-auto", "aria-hidden": "true" }).outerHTML}
              </ui-menu-sub-trigger>
              <ui-menu-sub-content class="min-w-48 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 **:data-[slot=menu-shortcut]:ms-auto **:data-[slot=menu-shortcut]:text-xs **:data-[slot=menu-shortcut]:tracking-widest **:data-[slot=menu-shortcut]:text-muted-foreground data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"></ui-menu-sub-content>
              <ui-menu-separator class="-mx-1 my-1 h-px bg-border/50"></ui-menu-separator>
            </ui-menu-content>
          </template>
        </ui-menu>
        <ui-menu>
          <ui-menu-trigger>
            <button class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted">View</button>
          </ui-menu-trigger>
          <template>
            <ui-menu-content class="min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
              <ui-menu-item class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"></ui-menu-item>
              <ui-menu-checkbox-item class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
                <ui-menu-item-indicator class="pointer-events-none absolute start-1.5 flex size-4 items-center justify-center">${createElement(Check, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-menu-item-indicator>
              </ui-menu-checkbox-item>
              <ui-menu-radio-item class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
                <ui-menu-item-indicator class="pointer-events-none absolute start-1.5 flex size-4 items-center justify-center">${createElement(Circle, { class: "size-2 fill-current", "aria-hidden": "true" }).outerHTML}</ui-menu-item-indicator>
              </ui-menu-radio-item>
              <ui-menu-sub-trigger class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
              </ui-menu-sub-trigger>
              <ui-menu-sub-content class="min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"></ui-menu-sub-content>
            </ui-menu-content>
          </template>
        </ui-menu>
      </ui-menubar>
      <output class="text-sm text-muted-foreground block min-h-5">Last: nothing yet</output>
    </div>
  `
  const [fileMenu, viewMenu] = root.querySelectorAll("ui-menu")
  Object.assign(fileMenu, {
    items: file,
  })
  Object.assign(viewMenu, {
    items: view,
  })
  const output = root.querySelector("output")!
  const content = viewMenu.querySelector("ui-menu-content")!
  fileMenu.addEventListener("action", (event) => {
    output.textContent = `Last: ${event.detail.value}`
  })
  content.addEventListener(
    "checkedchange",
    (event) => {
      const { value } = (event as CustomEvent<{ value: boolean }>).detail
      output.textContent = `Last: ${(event.target as HTMLElement).getAttribute("value")} ${value ? "on" : "off"}`
    },
    { capture: true },
  )
}

export { mount }
