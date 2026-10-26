import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@ui-sdk/solid/navigation-menu"
import { createSignal, For } from "solid-js"

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

function Example() {
  const [status, setStatus] = createSignal("Closed")

  return (
    <div class="flex w-full max-w-sm flex-col items-center gap-4">
      <NavigationMenu
        aria-label="Main"
        onValueChange={(value) => setStatus(value ? `Showing ${value}` : "Closing")}
        onOpenChangeComplete={(open) => setStatus(open ? "Open" : "Closed")}
      >
        <NavigationMenuList class="flex flex-wrap items-center">
          <NavigationMenuItem value="guides">
            <NavigationMenuTrigger class="group inline-flex h-8 items-center justify-center rounded-2xl px-2.5 text-sm font-medium outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted/50 data-open:hover:bg-muted cursor-default motion-reduce:transition-none">
              Guides
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                class="relative top-px ms-1 size-3 transition-transform duration-300 group-data-open:rotate-180 motion-reduce:transition-none"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </NavigationMenuTrigger>
            <NavigationMenuContent class="absolute start-0 top-0 w-[min(280px,calc(100vw-2rem))] p-1.5 transition-[opacity,translate] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] data-starting-style:opacity-0 data-ending-style:opacity-0 data-[motion=from-end]:data-starting-style:translate-x-16 rtl:data-[motion=from-end]:data-starting-style:-translate-x-16 data-[motion=from-start]:data-starting-style:-translate-x-16 rtl:data-[motion=from-start]:data-starting-style:translate-x-16 data-[motion=to-end]:data-ending-style:translate-x-16 rtl:data-[motion=to-end]:data-ending-style:-translate-x-16 data-[motion=to-start]:data-ending-style:-translate-x-16 rtl:data-[motion=to-start]:data-ending-style:translate-x-16 motion-reduce:transition-none max-h-[var(--available-height,var(--panel-height))] overflow-y-auto">
              <ul class="grid gap-1">
                <For each={gettingStarted}>
                  {(page) => (
                    <li>
                      <NavigationMenuLink
                        href={page.href}
                        class="flex flex-col gap-1 rounded-xl p-2 text-sm outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
                      >
                        <span class="leading-none font-medium">{page.title}</span>
                        <span class="line-clamp-2 leading-snug text-muted-foreground">
                          {page.description}
                        </span>
                      </NavigationMenuLink>
                    </li>
                  )}
                </For>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem value="components">
            <NavigationMenuTrigger class="group inline-flex h-8 items-center justify-center rounded-2xl px-2.5 text-sm font-medium outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted/50 data-open:hover:bg-muted cursor-default motion-reduce:transition-none">
              Components
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                class="relative top-px ms-1 size-3 transition-transform duration-300 group-data-open:rotate-180 motion-reduce:transition-none"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </NavigationMenuTrigger>
            <NavigationMenuContent class="absolute start-0 top-0 w-[min(460px,calc(100vw-2rem))] p-1.5 transition-[opacity,translate] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] data-starting-style:opacity-0 data-ending-style:opacity-0 data-[motion=from-end]:data-starting-style:translate-x-16 rtl:data-[motion=from-end]:data-starting-style:-translate-x-16 data-[motion=from-start]:data-starting-style:-translate-x-16 rtl:data-[motion=from-start]:data-starting-style:translate-x-16 data-[motion=to-end]:data-ending-style:translate-x-16 rtl:data-[motion=to-end]:data-ending-style:-translate-x-16 data-[motion=to-start]:data-ending-style:-translate-x-16 rtl:data-[motion=to-start]:data-ending-style:translate-x-16 motion-reduce:transition-none max-h-[var(--available-height,var(--panel-height))] overflow-y-auto">
              <ul class="grid grid-cols-2 gap-1">
                <For each={components}>
                  {(page) => (
                    <li>
                      <NavigationMenuLink
                        href={page.href}
                        class="flex flex-col gap-1 rounded-xl p-2 text-sm outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
                      >
                        <span class="leading-none font-medium">{page.title}</span>
                        <span class="line-clamp-2 leading-snug text-muted-foreground">
                          {page.description}
                        </span>
                      </NavigationMenuLink>
                    </li>
                  )}
                </For>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuViewport class="h-(--viewport-height) w-(--viewport-width) [--panel-height:var(--available-height)] origin-(--transform-origin) overflow-hidden rounded-3xl bg-popover text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale,width,height,left,top] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] data-starting-style:scale-90 data-starting-style:opacity-0 data-ending-style:scale-90 data-ending-style:opacity-0 motion-reduce:transition-none dark:ring-foreground/10" />
      </NavigationMenu>
      <output class="text-sm text-muted-foreground">{status()}</output>
    </div>
  )
}

export { Example }
