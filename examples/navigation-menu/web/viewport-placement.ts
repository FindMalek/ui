import "@ui-sdk/web/navigation-menu"
import { ChevronDown, createElement } from "lucide"

const sections = [
  {
    value: "guides",
    label: "Guides",
    links: [
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
    ],
  },
  {
    value: "components",
    label: "Components",
    links: [
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
    ],
  },
]

const controls = {
  side: ["bottom", "top"],
  align: ["start", "center", "end"],
  anchor: ["trigger", "bar"],
}

function mount(root: HTMLElement) {
  const id = `viewport-placement-bar-${crypto.randomUUID()}`
  root.innerHTML = `
    <div class="flex flex-col items-center gap-6">
      <div class="flex flex-wrap justify-center gap-2">
        ${Object.entries(controls)
          .map(
            ([name, options]) => `
        <div role="group" aria-label="${name}" class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground cursor-default">
          ${options.map((option, index) => `<button aria-pressed="${index === 0}" data-${name}="${option}" class="inline-flex h-full flex-1 cursor-default items-center justify-center rounded-2xl border border-transparent px-2.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none">${option}</button>`).join("")}
        </div>`,
          )
          .join("")}
      </div>
      <div id="${id}" class="rounded-3xl border border-border p-1">
        <ui-navigation-menu aria-label="Main">
          <ui-navigation-menu-list class="flex flex-wrap items-center">
            ${sections
              .map(
                (section) => `
            <ui-navigation-menu-item value="${section.value}">
              <ui-navigation-menu-trigger>
                <button class="group inline-flex h-8 items-center justify-center rounded-2xl px-2.5 text-sm font-medium outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted/50 data-open:hover:bg-muted cursor-default motion-reduce:transition-none">
                  ${section.label}
                  ${createElement(ChevronDown, { class: "relative top-px ms-1 size-3 transition-transform duration-300 group-data-open:rotate-180 motion-reduce:transition-none", "aria-hidden": "true" }).outerHTML}
                </button>
              </ui-navigation-menu-trigger>
              <ui-navigation-menu-content class="absolute start-0 top-0 w-[min(300px,calc(100vw-2rem))] p-1.5 max-h-[var(--available-height,var(--panel-height))] overflow-y-auto">
                <ul class="grid gap-1">
                  ${section.links
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
            </ui-navigation-menu-item>`,
              )
              .join("")}
          </ui-navigation-menu-list>
          <ui-navigation-menu-viewport side="bottom" align="start" side-offset="8" align-offset="0" collision-padding="16" class="h-(--viewport-height) w-(--viewport-width) [--panel-height:var(--available-height)] origin-(--transform-origin) overflow-hidden rounded-3xl bg-popover text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale,width,height,left,top] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none dark:ring-foreground/10"></ui-navigation-menu-viewport>
        </ui-navigation-menu>
      </div>
    </div>
  `
  const viewport = root.querySelector("ui-navigation-menu-viewport")!
  for (const name of Object.keys(controls)) {
    const buttons = root.querySelectorAll<HTMLButtonElement>(`[data-${name}]`)
    for (const button of buttons) {
      button.addEventListener("click", () => {
        const option = button.getAttribute(`data-${name}`)!
        if (name !== "anchor") {
          viewport.setAttribute(name, option)
        } else if (option === "bar") {
          viewport.setAttribute("anchor", `#${id}`)
        } else {
          viewport.removeAttribute("anchor")
        }
        for (const other of buttons) {
          other.setAttribute("aria-pressed", String(other === button))
        }
      })
    }
  }
}

export { mount }
