import "@ui-sdk/web/menu"
import { CornerDownLeft, createElement } from "lucide"

const sections = [
  { href: "#anatomy", label: "Anatomy" },
  { href: "#styling", label: "Styling" },
  { href: "#api-reference", label: "API reference" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-menu>
      <ui-menu-trigger>
        <button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Links</button>
      </ui-menu-trigger>
      <ui-menu-content class="min-w-44 max-h-(--available-height) overflow-y-auto origin-(--transform-origin) rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
        ${sections
          .map(
            (section) => `
              <ui-menu-item as-child>
                <a class="group flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg:not([class*='size-'])]:size-4" href="${section.href}">
                  ${section.label}
                  ${createElement(CornerDownLeft, { class: "ms-auto invisible size-4 text-muted-foreground group-data-highlighted:visible", "aria-hidden": "true" }).outerHTML}
                </a>
              </ui-menu-item>
            `,
          )
          .join("")}
      </ui-menu-content>
    </ui-menu>
  `
}

export { mount }
