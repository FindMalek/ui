import "@ui-sdk/web/menu"
import { Check, ChevronRight, createElement } from "lucide"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-wrap items-center justify-center gap-2">
      <ui-menu>
        <ui-menu-trigger>
          <button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Document</button>
        </ui-menu-trigger>
        <ui-menu-content class="min-w-48 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 **:data-[slot=menu-shortcut]:ms-auto **:data-[slot=menu-shortcut]:ps-4 **:data-[slot=menu-shortcut]:text-xs **:data-[slot=menu-shortcut]:tracking-widest **:data-[slot=menu-shortcut]:text-muted-foreground motion-reduce:transition-none">
          <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="undo" shortcut="mod+z" disabled>
            <span class="size-4 shrink-0"></span>
            Undo
          </ui-menu-item>
          <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="redo" shortcut="mod+shift+z">
            <span class="size-4 shrink-0"></span>
            Redo
          </ui-menu-item>
          <ui-menu-separator class="-mx-1 my-1 h-px bg-border/50"></ui-menu-separator>
          <ui-menu-checkbox-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="autosave" default-checked disabled>
            ${createElement(Check, { class: "invisible size-4 group-data-checked:visible", "aria-hidden": "true" }).outerHTML}
            Autosave
          </ui-menu-checkbox-item>
          <ui-menu-separator class="-mx-1 my-1 h-px bg-border/50"></ui-menu-separator>
          <ui-menu-radio-group default-value="pdf">
            <ui-menu-group-label class="px-2 py-1 text-xs text-muted-foreground">Export as</ui-menu-group-label>
            <ui-menu-radio-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="pdf">
              ${createElement(Check, { class: "invisible size-4 group-data-checked:visible", "aria-hidden": "true" }).outerHTML}
              PDF
            </ui-menu-radio-item>
            <ui-menu-radio-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="docx" disabled>
              ${createElement(Check, { class: "invisible size-4 group-data-checked:visible", "aria-hidden": "true" }).outerHTML}
              Word
            </ui-menu-radio-item>
            <ui-menu-radio-item class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" value="markdown">
              ${createElement(Check, { class: "invisible size-4 group-data-checked:visible", "aria-hidden": "true" }).outerHTML}
              Markdown
            </ui-menu-radio-item>
          </ui-menu-radio-group>
          <ui-menu-separator class="-mx-1 my-1 h-px bg-border/50"></ui-menu-separator>
          <ui-menu-sub>
            <ui-menu-sub-trigger class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 data-open:bg-accent data-open:text-accent-foreground" disabled>
              <span class="size-4 shrink-0"></span>
              Move to
              ${createElement(ChevronRight, { class: "ms-auto size-4 rtl:rotate-180", "aria-hidden": "true" }).outerHTML}
            </ui-menu-sub-trigger>
            <ui-menu-sub-content class="min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
              <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4">Archive</ui-menu-item>
            </ui-menu-sub-content>
          </ui-menu-sub>
        </ui-menu-content>
      </ui-menu>
      <ui-menu>
        <ui-menu-trigger disabled>
          <button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Locked</button>
        </ui-menu-trigger>
        <ui-menu-content class="min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
          <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4">Unlock</ui-menu-item>
        </ui-menu-content>
      </ui-menu>
    </div>
    <output class="mt-3 text-sm text-muted-foreground block min-h-5">Disabled items can be focused but not chosen</output>
  `
  root.addEventListener(
    "action",
    (event) => {
      root.querySelector("output")!.textContent =
        `Ran ${(event as CustomEvent<{ value: string }>).detail.value}`
    },
    { capture: true },
  )
}

export { mount }
