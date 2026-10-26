<script lang="ts">
  import { ChevronDown, ChevronRight } from "@lucide/svelte"
  import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@ui-sdk/svelte/navigation-menu"

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
</script>

<NavigationMenu aria-label="Main">
  <NavigationMenuList class="flex flex-wrap items-center">
    <NavigationMenuItem value="guides">
      <NavigationMenuTrigger
        class="group inline-flex h-8 items-center justify-center rounded-2xl px-2.5 text-sm font-medium outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted/50 data-open:hover:bg-muted cursor-default motion-reduce:transition-none"
      >
        Guides
        <ChevronDown
          class="relative top-px ms-1 size-3 transition-transform duration-300 group-data-open:rotate-180 motion-reduce:transition-none"
        />
      </NavigationMenuTrigger>
      <NavigationMenuContent class="absolute start-0 top-0 w-[min(300px,calc(100vw-2rem))] p-1.5 max-h-[var(--available-height,var(--panel-height))] overflow-y-auto">
        <ul class="grid gap-1">
          {#each gettingStarted as link (link.href)}
            <li>
              <NavigationMenuLink
                href={link.href}
                class="flex flex-col gap-1 rounded-xl p-2 text-sm outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
              >
                <span class="leading-none font-medium">{link.title}</span>
                <span class="line-clamp-2 leading-snug text-muted-foreground">{link.description}</span>
              </NavigationMenuLink>
            </li>
          {/each}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
    <NavigationMenuItem value="components">
      <NavigationMenuTrigger
        class="group inline-flex h-8 items-center justify-center rounded-2xl px-2.5 text-sm font-medium outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted/50 data-open:hover:bg-muted cursor-default motion-reduce:transition-none"
      >
        Components
        <ChevronDown
          class="relative top-px ms-1 size-3 transition-transform duration-300 group-data-open:rotate-180 motion-reduce:transition-none"
        />
      </NavigationMenuTrigger>
      <NavigationMenuContent class="absolute start-0 top-0 w-[min(220px,calc(100vw-2rem))] p-1.5 max-h-[var(--available-height,var(--panel-height))] overflow-y-auto">
        <NavigationMenu orientation="vertical">
          <NavigationMenuList class="flex flex-col gap-1">
            {#each groups as group (group.value)}
              <NavigationMenuItem value={group.value}>
                <NavigationMenuTrigger
                  class="group flex h-8 w-full items-center justify-between rounded-xl px-2 text-sm font-medium outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted cursor-default motion-reduce:transition-none"
                >
                  {group.label}
                  <ChevronRight class="size-3 text-muted-foreground rtl:rotate-180" />
                </NavigationMenuTrigger>
                <NavigationMenuContent
                  sideOffset={12}
                  class="w-[min(180px,calc(100vw-2rem))] origin-(--transform-origin) rounded-2xl bg-popover p-1.5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none dark:ring-foreground/10 max-h-[var(--available-height,var(--panel-height))] overflow-y-auto"
                >
                  <ul class="grid gap-0.5">
                    {#each group.links as link (link.href)}
                      <li>
                        <NavigationMenuLink
                          href={link.href}
                          class="flex rounded-xl p-2 text-sm outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
                        >
                          {link.title}
                        </NavigationMenuLink>
                      </li>
                    {/each}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            {/each}
          </NavigationMenuList>
        </NavigationMenu>
      </NavigationMenuContent>
    </NavigationMenuItem>
  </NavigationMenuList>
  <NavigationMenuViewport
    class="h-(--viewport-height) w-(--viewport-width) [--panel-height:var(--available-height)] origin-(--transform-origin) overflow-hidden rounded-3xl bg-popover text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale,width,height,left,top] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none dark:ring-foreground/10"
  />
</NavigationMenu>
