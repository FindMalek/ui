import "@ui-sdk/web/navigation-menu"
import { ArrowRight, ChevronDown, Circle, CircleCheck, CircleQuestionMark, createElement } from "lucide"

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

const components = [
  {
    title: "Alert Dialog",
    href: "https://example.com/docs/components/alert-dialog",
    description: "Asks for a decision before anything else on the page can be used.",
  },
  {
    title: "Hover Card",
    href: "https://example.com/docs/components/hover-card",
    description: "A preview of what a link points to, for people who pause on it.",
  },
  {
    title: "Progress",
    href: "https://example.com/docs/components/progress",
    description: "Shows how far along a task is, like an upload.",
  },
  {
    title: "Scroll Area",
    href: "https://example.com/docs/components/scroll-area",
    description: "Scrolls its content with scrollbars you can style.",
  },
  {
    title: "Tabs",
    href: "https://example.com/docs/components/tabs",
    description: "Shows one panel of content at a time, picked from a list of tabs.",
  },
  {
    title: "Tooltip",
    href: "https://example.com/docs/components/tooltip",
    description: "A short label for a control, shown on hover or keyboard focus.",
  },
]

const statuses = [
  { title: "Backlog", href: "https://example.com/issues/backlog", icon: CircleQuestionMark },
  { title: "To do", href: "https://example.com/issues/to-do", icon: Circle },
  { title: "Done", href: "https://example.com/issues/done", icon: CircleCheck },
  { title: "All issues", href: "https://example.com/issues", icon: ArrowRight, mirror: true },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-navigation-menu aria-label="Main">
      <ui-navigation-menu-list class="flex flex-wrap items-center">
        <ui-navigation-menu-item value="getting-started">
          <ui-navigation-menu-trigger>
            <button class="group inline-flex h-8 items-center justify-center rounded-2xl px-2.5 text-sm font-medium outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted/50 data-open:hover:bg-muted cursor-default motion-reduce:transition-none">
              Getting started
              ${createElement(ChevronDown, { class: "relative top-px ms-1 size-3 transition-transform duration-300 group-data-open:rotate-180 motion-reduce:transition-none", "aria-hidden": "true" }).outerHTML}
            </button>
          </ui-navigation-menu-trigger>
          <ui-navigation-menu-content class="absolute start-0 top-0 w-[min(420px,calc(100vw-2rem))] p-1.5 max-h-[var(--available-height,var(--panel-height))] overflow-y-auto">
            <ul class="grid grid-cols-[0.8fr_1fr] gap-1">
              <li class="row-span-3">
                <ui-navigation-menu-link>
                  <a href="https://example.com" class="flex h-full flex-col justify-end gap-2 rounded-xl bg-muted p-4 outline-none transition-[box-shadow] focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none">
                    <span class="text-lg font-medium">ui-sdk</span>
                    <span class="text-sm leading-tight text-muted-foreground">Accessible components for React, Vue, Svelte, Solid and Web Components.</span>
                  </a>
                </ui-navigation-menu-link>
              </li>
              ${gettingStarted
                .map(
                  (page) => `
              <li>
                <ui-navigation-menu-link>
                  <a href="${page.href}" class="flex flex-col gap-1 rounded-xl p-2 text-sm outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none">
                    <span class="leading-none font-medium">${page.title}</span>
                    <span class="line-clamp-2 leading-snug text-muted-foreground">${page.description}</span>
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
          <ui-navigation-menu-content class="absolute start-0 top-0 w-[min(500px,calc(100vw-2rem))] p-1.5 max-h-[var(--available-height,var(--panel-height))] overflow-y-auto">
            <ul class="grid grid-cols-2 gap-1">
              ${components
                .map(
                  (page) => `
              <li>
                <ui-navigation-menu-link>
                  <a href="${page.href}" class="flex flex-col gap-1 rounded-xl p-2 text-sm outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none">
                    <span class="leading-none font-medium">${page.title}</span>
                    <span class="line-clamp-2 leading-snug text-muted-foreground">${page.description}</span>
                  </a>
                </ui-navigation-menu-link>
              </li>`,
                )
                .join("")}
            </ul>
          </ui-navigation-menu-content>
        </ui-navigation-menu-item>
        <ui-navigation-menu-item value="with-icon">
          <ui-navigation-menu-trigger>
            <button class="group inline-flex h-8 items-center justify-center rounded-2xl px-2.5 text-sm font-medium outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted/50 data-open:hover:bg-muted cursor-default motion-reduce:transition-none">
              With Icon
              ${createElement(ChevronDown, { class: "relative top-px ms-1 size-3 transition-transform duration-300 group-data-open:rotate-180 motion-reduce:transition-none", "aria-hidden": "true" }).outerHTML}
            </button>
          </ui-navigation-menu-trigger>
          <ui-navigation-menu-content class="absolute start-0 top-0 w-[min(200px,calc(100vw-2rem))] p-1.5 max-h-[var(--available-height,var(--panel-height))] overflow-y-auto">
            <ul class="grid gap-1">
              ${statuses
                .map(
                  (status) => `
              <li>
                <ui-navigation-menu-link>
                  <a href="${status.href}" class="flex items-center gap-2 rounded-xl p-2 text-sm outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none">
                    <ui-navigation-menu-link-icon${status.mirror ? " mirror" : ""} class="flex text-muted-foreground">${createElement(status.icon, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-navigation-menu-link-icon>
                    ${status.title}
                  </a>
                </ui-navigation-menu-link>
              </li>`,
                )
                .join("")}
            </ul>
          </ui-navigation-menu-content>
        </ui-navigation-menu-item>
        <ui-navigation-menu-item>
          <ui-navigation-menu-link>
            <a href="https://example.com/docs" class="inline-flex h-8 items-center rounded-2xl px-2.5 text-sm font-medium outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 cursor-default motion-reduce:transition-none">Docs</a>
          </ui-navigation-menu-link>
        </ui-navigation-menu-item>
      </ui-navigation-menu-list>
      <ui-navigation-menu-viewport class="h-(--viewport-height) w-(--viewport-width) [--panel-height:var(--available-height)] origin-(--transform-origin) overflow-hidden rounded-3xl bg-popover text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale,width,height,left,top] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none dark:ring-foreground/10"></ui-navigation-menu-viewport>
    </ui-navigation-menu>
  `
}

export { mount }
