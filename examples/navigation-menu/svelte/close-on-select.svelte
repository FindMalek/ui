<script lang="ts">
  import { ChevronDown } from "@lucide/svelte"
  import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@ui-sdk/svelte/navigation-menu"

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
  let opened = $state("")
</script>

<div class="flex w-full max-w-sm flex-col items-center gap-4">
  <NavigationMenu
    aria-label="Main"
    closeOnSelect={false}
  >
    <NavigationMenuList class="flex flex-wrap items-center">
      <NavigationMenuItem value="components">
        <NavigationMenuTrigger
          class="group inline-flex h-8 items-center justify-center rounded-2xl px-2.5 text-sm font-medium outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted/50 data-open:hover:bg-muted cursor-default motion-reduce:transition-none"
        >
          Components
          <ChevronDown
            class="relative top-px ms-1 size-3 transition-transform duration-300 group-data-open:rotate-180 motion-reduce:transition-none"
          />
        </NavigationMenuTrigger>
        <NavigationMenuContent class="absolute start-0 top-0 w-[min(260px,calc(100vw-2rem))] p-1.5 max-h-[var(--available-height,var(--panel-height))] overflow-y-auto">
          <ul class="grid gap-1">
            {#each components as page (page.href)}
              <li>
                <NavigationMenuLink
                  href={page.href}
                  class="flex rounded-xl p-2 text-sm outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
                  onclick={(event) => {
                    event.preventDefault()
                    opened = page.title
                  }}
                >
                  {page.title}
                </NavigationMenuLink>
              </li>
            {/each}
            <li class="mt-1 border-t border-border pt-1">
              <NavigationMenuLink
                href="https://example.com/docs/components"
                closeOnSelect
                class="flex rounded-xl p-2 text-sm outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 font-medium motion-reduce:transition-none"
                onclick={(event) => {
                  event.preventDefault()
                  opened = "All components"
                }}
              >
                Browse all
              </NavigationMenuLink>
            </li>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
    <NavigationMenuViewport
      class="h-(--viewport-height) w-(--viewport-width) [--panel-height:var(--available-height)] origin-(--transform-origin) overflow-hidden rounded-3xl bg-popover text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale,width,height,left,top] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none dark:ring-foreground/10"
    />
  </NavigationMenu>
  <output class="text-sm text-muted-foreground">{opened ? `Opened: ${opened}` : "Press a link"}</output>
</div>
