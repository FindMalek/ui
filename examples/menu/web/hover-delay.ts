import "@ui-sdk/web/menu"
import { ChevronRight, createElement } from "lucide"

const menus = [
  { name: "Instant", delay: 0 },
  { name: "Default", delay: 100 },
  { name: "Slow", delay: 500 },
]

const submenus = [
  { label: "Open recent", items: ["report.pdf", "notes.md"] },
  { label: "Share", items: ["Email", "Copy link"] },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-wrap justify-center gap-2">
      ${menus
        .map(
          ({ name, delay }) => `
            <ui-menu delay="${delay}">
              <ui-menu-trigger>
                <button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">${name}</button>
              </ui-menu-trigger>
              <ui-menu-content class="min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
                <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4">New file</ui-menu-item>
                ${submenus
                  .map(
                    (submenu) => `
                      <ui-menu-sub>
                        <ui-menu-sub-trigger class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4 data-open:bg-accent data-open:text-accent-foreground">
                          ${submenu.label}
                          ${createElement(ChevronRight, { class: "ms-auto size-4 rtl:rotate-180", "aria-hidden": "true" }).outerHTML}
                        </ui-menu-sub-trigger>
                        <ui-menu-sub-content class="min-w-36 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
                          ${submenu.items.map((label) => `<ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4">${label}</ui-menu-item>`).join("")}
                        </ui-menu-sub-content>
                      </ui-menu-sub>
                    `,
                  )
                  .join("")}
                <ui-menu-item class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4">Close</ui-menu-item>
              </ui-menu-content>
            </ui-menu>
          `,
        )
        .join("")}
    </div>
  `
}

export { mount }
