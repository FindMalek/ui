import "@ui-sdk/web/navigation-menu"
import { ChevronDown, ChevronRight, createElement } from "lucide"

const gettingStarted = [
  {
    title: "Introduction",
    href: "https://example.com/docs",
    description: "Unstyled components with one core for every framework.",
  },
  {
    title: "Installation",
    href: "https://example.com/docs/installation",
    description: "Add the package for your framework and render your first part.",
  },
  {
    title: "Styling",
    href: "https://example.com/docs/styling",
    description: "Style parts with data attributes, CSS variables and any CSS.",
  },
]

const groups = [
  {
    value: "overlays",
    label: "Overlays",
    links: [
      { title: "Dialog", href: "https://example.com/docs/components/dialog" },
      { title: "Popover", href: "https://example.com/docs/components/popover" },
      { title: "Tooltip", href: "https://example.com/docs/components/tooltip" },
    ],
  },
  {
    value: "forms",
    label: "Forms",
    links: [
      { title: "Input", href: "https://example.com/docs/components/input" },
      { title: "Select", href: "https://example.com/docs/components/select" },
      { title: "Checkbox", href: "https://example.com/docs/components/checkbox" },
    ],
  },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-navigation-menu aria-label="Main">
      <ui-navigation-menu-list class="flex flex-wrap items-center">
        <ui-navigation-menu-item value="guides">
          <ui-navigation-menu-trigger>
            <button class="group inline-flex h-8 items-center justify-center rounded-2xl px-2.5 text-sm font-medium outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted/50 data-open:hover:bg-muted cursor-default motion-reduce:transition-none">
              Guides
              ${createElement(ChevronDown, { class: "relative top-px ms-1 size-3 transition-transform duration-300 group-data-open:rotate-180 motion-reduce:transition-none", "aria-hidden": "true" }).outerHTML}
            </button>
          </ui-navigation-menu-trigger>
          <ui-navigation-menu-content class="absolute start-0 top-0 w-[min(300px,calc(100vw-2rem))] p-1.5 max-h-[var(--available-height,var(--panel-height))] overflow-y-auto">
            <ul class="grid gap-1">
              ${gettingStarted
                .map(
                  (link) => `
              <li>
                <ui-navigation-menu-link>
                  <a href="${link.href}" class="flex flex-col gap-1 rounded-xl p-2 text-sm outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none">
                    <span class="leading-none font-medium">${link.title}</span>
                    <span class="line-clamp-2 leading-snug text-muted-foreground">${link.description}</span>
                  </a>
                </ui-navigation-menu-link>
              </li>`,
                )
                .join("")}
            </ul>
          </ui-navigation-menu-content>
        </ui-navigation-menu-item>
        <ui-navigation-menu-item value="components">
          <ui-navigation-menu-trigger>
            <button class="group inline-flex h-8 items-center justify-center rounded-2xl px-2.5 text-sm font-medium outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted/50 data-open:hover:bg-muted cursor-default motion-reduce:transition-none">
              Components
              ${createElement(ChevronDown, { class: "relative top-px ms-1 size-3 transition-transform duration-300 group-data-open:rotate-180 motion-reduce:transition-none", "aria-hidden": "true" }).outerHTML}
            </button>
          </ui-navigation-menu-trigger>
          <ui-navigation-menu-content class="absolute start-0 top-0 w-[min(220px,calc(100vw-2rem))] p-1.5 max-h-[var(--available-height,var(--panel-height))] overflow-y-auto">
            <ui-navigation-menu orientation="vertical">
              <ui-navigation-menu-list class="flex flex-col gap-1">
                ${groups
                  .map(
                    (group) => `
                <ui-navigation-menu-item value="${group.value}">
                  <ui-navigation-menu-trigger>
                    <button class="group flex h-8 w-full items-center justify-between rounded-xl px-2 text-sm font-medium outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted cursor-default motion-reduce:transition-none">
                      ${group.label}
                      ${createElement(ChevronRight, { class: "size-3 text-muted-foreground rtl:rotate-180", "aria-hidden": "true" }).outerHTML}
                    </button>
                  </ui-navigation-menu-trigger>
                  <ui-navigation-menu-content side-offset="12" class="w-[min(180px,calc(100vw-2rem))] origin-(--transform-origin) rounded-2xl bg-popover p-1.5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none dark:ring-foreground/10 max-h-[var(--available-height,var(--panel-height))] overflow-y-auto">
                    <ul class="grid gap-0.5">
                      ${group.links
                        .map(
                          (link) => `
                      <li>
                        <ui-navigation-menu-link>
                          <a href="${link.href}" class="flex rounded-xl p-2 text-sm outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none">${link.title}</a>
                        </ui-navigation-menu-link>
                      </li>`,
                        )
                        .join("")}
                    </ul>
                  </ui-navigation-menu-content>
                </ui-navigation-menu-item>`,
                  )
                  .join("")}
              </ui-navigation-menu-list>
            </ui-navigation-menu>
          </ui-navigation-menu-content>
        </ui-navigation-menu-item>
      </ui-navigation-menu-list>
      <ui-navigation-menu-viewport class="h-(--viewport-height) w-(--viewport-width) [--panel-height:var(--available-height)] origin-(--transform-origin) overflow-hidden rounded-3xl bg-popover text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale,width,height,left,top] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none dark:ring-foreground/10"></ui-navigation-menu-viewport>
    </ui-navigation-menu>
  `
}

export { mount }
