import "@ui-sdk/web/menubar"
import "@ui-sdk/web/menu"
import { CircleHelp, createElement, File, Folder, Redo, Save, Settings, Trash, Undo } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-menubar class="flex h-8 w-fit items-center rounded-2xl border border-border p-[3px]">
      <ui-menu>
        <ui-menu-trigger>
          <button class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted">File</button>
        </ui-menu-trigger>
        <ui-menu-content class="min-w-36 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
          <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
            <ui-menu-item-icon class="flex text-muted-foreground">${createElement(File, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-menu-item-icon>
            New File
          </ui-menu-item>
          <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
            <ui-menu-item-icon class="flex text-muted-foreground">${createElement(Folder, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-menu-item-icon>
            Open Folder
          </ui-menu-item>
          <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
            <ui-menu-item-icon class="flex text-muted-foreground">${createElement(Save, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-menu-item-icon>
            Save
          </ui-menu-item>
        </ui-menu-content>
      </ui-menu>
      <ui-menu>
        <ui-menu-trigger>
          <button class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted">Edit</button>
        </ui-menu-trigger>
        <ui-menu-content class="min-w-36 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
          <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
            <ui-menu-item-icon mirror class="flex text-muted-foreground">${createElement(Undo, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-menu-item-icon>
            Undo
          </ui-menu-item>
          <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
            <ui-menu-item-icon mirror class="flex text-muted-foreground">${createElement(Redo, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-menu-item-icon>
            Redo
          </ui-menu-item>
        </ui-menu-content>
      </ui-menu>
      <ui-menu>
        <ui-menu-trigger>
          <button class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted">More</button>
        </ui-menu-trigger>
        <ui-menu-content class="min-w-36 origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
          <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
            <ui-menu-item-icon class="flex text-muted-foreground">${createElement(Settings, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-menu-item-icon>
            Settings
          </ui-menu-item>
          <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
            <ui-menu-item-icon class="flex text-muted-foreground">${createElement(CircleHelp, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-menu-item-icon>
            Help
          </ui-menu-item>
          <ui-menu-separator class="-mx-1 my-1 h-px bg-border/50"></ui-menu-separator>
          <ui-menu-item destructive class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm text-destructive outline-none select-none data-highlighted:bg-destructive/10 data-highlighted:text-destructive data-disabled:pointer-events-none data-disabled:opacity-50 dark:data-highlighted:bg-destructive/20">
            <ui-menu-item-icon class="flex">${createElement(Trash, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-menu-item-icon>
            Delete
          </ui-menu-item>
        </ui-menu-content>
      </ui-menu>
    </ui-menubar>
  `
}
