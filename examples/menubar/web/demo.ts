import "@ui-sdk/web/menubar"
import "@ui-sdk/web/menu"
import { Check, ChevronRight, createElement } from "lucide"

const profiles = [
  { value: "andy", label: "Andy" },
  { value: "benoit", label: "Benoit" },
  { value: "luis", label: "Luis" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-menubar class="flex h-8 w-fit items-center rounded-2xl border border-border p-[3px]">
      <ui-menu>
        <ui-menu-trigger>
          <button class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted">File</button>
        </ui-menu-trigger>
        <ui-menu-content class="min-w-48 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 **:data-[slot=menu-shortcut]:ms-auto **:data-[slot=menu-shortcut]:text-xs **:data-[slot=menu-shortcut]:tracking-widest **:data-[slot=menu-shortcut]:text-muted-foreground data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
          <ui-menu-item shortcut="mod+t" class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">New Tab</ui-menu-item>
          <ui-menu-item shortcut="mod+n" class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">New Window</ui-menu-item>
          <ui-menu-item disabled class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">New Incognito Window</ui-menu-item>
          <ui-menu-separator class="-mx-1 my-1 h-px bg-border/50"></ui-menu-separator>
          <ui-menu-sub>
            <ui-menu-sub-trigger class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground">
              Share
              ${createElement(ChevronRight, { class: "ms-auto size-4 rtl:rotate-180", "aria-hidden": "true" }).outerHTML}
            </ui-menu-sub-trigger>
            <ui-menu-sub-content class="min-w-32 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
              <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">Email link</ui-menu-item>
              <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">Messages</ui-menu-item>
              <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">Notes</ui-menu-item>
            </ui-menu-sub-content>
          </ui-menu-sub>
          <ui-menu-separator class="-mx-1 my-1 h-px bg-border/50"></ui-menu-separator>
          <ui-menu-item shortcut="mod+p" class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">Print…</ui-menu-item>
        </ui-menu-content>
      </ui-menu>
      <ui-menu>
        <ui-menu-trigger>
          <button class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted">Edit</button>
        </ui-menu-trigger>
        <ui-menu-content class="min-w-48 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 **:data-[slot=menu-shortcut]:ms-auto **:data-[slot=menu-shortcut]:text-xs **:data-[slot=menu-shortcut]:tracking-widest **:data-[slot=menu-shortcut]:text-muted-foreground data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
          <ui-menu-item shortcut="mod+z" class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">Undo</ui-menu-item>
          <ui-menu-item shortcut="mod+shift+z" class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">Redo</ui-menu-item>
          <ui-menu-separator class="-mx-1 my-1 h-px bg-border/50"></ui-menu-separator>
          <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">Cut</ui-menu-item>
          <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">Copy</ui-menu-item>
          <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">Paste</ui-menu-item>
        </ui-menu-content>
      </ui-menu>
      <ui-menu>
        <ui-menu-trigger>
          <button class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted">View</button>
        </ui-menu-trigger>
        <ui-menu-content class="min-w-48 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 **:data-[slot=menu-shortcut]:ms-auto **:data-[slot=menu-shortcut]:text-xs **:data-[slot=menu-shortcut]:tracking-widest **:data-[slot=menu-shortcut]:text-muted-foreground data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
          <ui-menu-checkbox-item value="bookmarks" class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
            <ui-menu-item-indicator class="pointer-events-none absolute start-1.5 flex size-4 items-center justify-center">${createElement(Check, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-menu-item-indicator>
            Always Show Bookmarks Bar
          </ui-menu-checkbox-item>
          <ui-menu-checkbox-item value="urls" default-checked class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
            <ui-menu-item-indicator class="pointer-events-none absolute start-1.5 flex size-4 items-center justify-center">${createElement(Check, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-menu-item-indicator>
            Always Show Full URLs
          </ui-menu-checkbox-item>
          <ui-menu-separator class="-mx-1 my-1 h-px bg-border/50"></ui-menu-separator>
          <ui-menu-item shortcut="mod+r" class="flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-2 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">Reload</ui-menu-item>
          <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-2 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">Toggle Fullscreen</ui-menu-item>
        </ui-menu-content>
      </ui-menu>
      <ui-menu>
        <ui-menu-trigger>
          <button class="flex cursor-default items-center rounded-2xl px-1.5 py-0.5 text-sm font-medium outline-none select-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted">Profiles</button>
        </ui-menu-trigger>
        <ui-menu-content class="min-w-48 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
          <ui-menu-radio-group default-value="benoit">
            ${profiles
              .map(
                (profile) => `
                  <ui-menu-radio-item value="${profile.value}" class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
                    <ui-menu-item-indicator class="pointer-events-none absolute start-1.5 flex size-4 items-center justify-center">
                      <span class="size-2 rounded-full bg-current"></span>
                    </ui-menu-item-indicator>
                    ${profile.label}
                  </ui-menu-radio-item>
                `,
              )
              .join("")}
          </ui-menu-radio-group>
          <ui-menu-separator class="-mx-1 my-1 h-px bg-border/50"></ui-menu-separator>
          <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-2 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">Edit…</ui-menu-item>
          <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-7 pe-2 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">Add Profile…</ui-menu-item>
        </ui-menu-content>
      </ui-menu>
    </ui-menubar>
  `
}

export { mount }
