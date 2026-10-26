"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@ui-sdk/react/navigation-menu"
import { ChevronDown } from "lucide-react"
import * as React from "react"

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
  const [opened, setOpened] = React.useState("")

  return (
    <div className="flex w-full max-w-sm flex-col items-center gap-4">
      <NavigationMenu aria-label="Main" closeOnSelect={false}>
        <NavigationMenuList className="flex flex-wrap items-center">
          <NavigationMenuItem value="components">
            <NavigationMenuTrigger className="group inline-flex h-8 items-center justify-center rounded-2xl px-2.5 text-sm font-medium outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted/50 data-open:hover:bg-muted cursor-default motion-reduce:transition-none">
              Components
              <ChevronDown className="relative top-px ms-1 size-3 transition-transform duration-300 group-data-open:rotate-180 motion-reduce:transition-none" />
            </NavigationMenuTrigger>
            <NavigationMenuContent className="absolute start-0 top-0 w-[min(260px,calc(100vw-2rem))] p-1.5 max-h-[var(--available-height,var(--panel-height))] overflow-y-auto">
              <ul className="grid gap-1">
                {components.map((page) => (
                  <li key={page.href}>
                    <NavigationMenuLink
                      href={page.href}
                      onClick={(event) => {
                        event.preventDefault()
                        setOpened(page.title)
                      }}
                      className="flex rounded-xl p-2 text-sm outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
                    >
                      {page.title}
                    </NavigationMenuLink>
                  </li>
                ))}
                <li className="mt-1 border-t border-border pt-1">
                  <NavigationMenuLink
                    href="https://example.com/docs/components"
                    closeOnSelect
                    onClick={(event) => {
                      event.preventDefault()
                      setOpened("All components")
                    }}
                    className="flex rounded-xl p-2 text-sm outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 font-medium motion-reduce:transition-none"
                  >
                    Browse all
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuViewport className="h-(--viewport-height) w-(--viewport-width) [--panel-height:var(--available-height)] origin-(--transform-origin) overflow-hidden rounded-3xl bg-popover text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale,width,height,left,top] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none dark:ring-foreground/10" />
      </NavigationMenu>
      <output className="text-sm text-muted-foreground">
        {opened ? `Opened: ${opened}` : "Press a link"}
      </output>
    </div>
  )
}

export { Example }
