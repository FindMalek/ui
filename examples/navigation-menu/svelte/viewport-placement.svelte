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

  const sides = ["bottom", "top"] as const
  const aligns = ["start", "center", "end"] as const
  const anchors = ["trigger", "bar"] as const
  let side = $state<(typeof sides)[number]>("bottom")
  let align = $state<(typeof aligns)[number]>("start")
  let anchor = $state<(typeof anchors)[number]>("trigger")
  let bar: HTMLDivElement | undefined = $state()
</script>

<div class="flex flex-col items-center gap-6">
  <div class="flex flex-wrap justify-center gap-2">
    <div
      role="group"
      aria-label="side"
      class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground cursor-default"
    >
      {#each sides as option (option)}
        <button
          aria-pressed={side === option}
          class="inline-flex h-full flex-1 cursor-default items-center justify-center rounded-2xl border border-transparent px-2.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none"
          onclick={() => (side = option)}
        >
          {option}
        </button>
      {/each}
    </div>
    <div
      role="group"
      aria-label="align"
      class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground cursor-default"
    >
      {#each aligns as option (option)}
        <button
          aria-pressed={align === option}
          class="inline-flex h-full flex-1 cursor-default items-center justify-center rounded-2xl border border-transparent px-2.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none"
          onclick={() => (align = option)}
        >
          {option}
        </button>
      {/each}
    </div>
    <div
      role="group"
      aria-label="anchor"
      class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground cursor-default"
    >
      {#each anchors as option (option)}
        <button
          aria-pressed={anchor === option}
          class="inline-flex h-full flex-1 cursor-default items-center justify-center rounded-2xl border border-transparent px-2.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none"
          onclick={() => (anchor = option)}
        >
          {option}
        </button>
      {/each}
    </div>
  </div>
  <div
    bind:this={bar}
    class="rounded-3xl border border-border p-1"
  >
    <NavigationMenu aria-label="Main">
      <NavigationMenuList class="flex flex-wrap items-center">
        {#each sections as section (section.value)}
          <NavigationMenuItem value={section.value}>
            <NavigationMenuTrigger
              class="group inline-flex h-8 items-center justify-center rounded-2xl px-2.5 text-sm font-medium outline-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted/50 data-open:hover:bg-muted cursor-default motion-reduce:transition-none"
            >
              {section.label}
              <ChevronDown
                class="relative top-px ms-1 size-3 transition-transform duration-300 group-data-open:rotate-180 motion-reduce:transition-none"
              />
            </NavigationMenuTrigger>
            <NavigationMenuContent class="absolute start-0 top-0 w-[min(300px,calc(100vw-2rem))] p-1.5 max-h-[var(--available-height,var(--panel-height))] overflow-y-auto">
              <ul class="grid gap-1">
                {#each section.links as link (link.href)}
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
        {/each}
      </NavigationMenuList>
      <NavigationMenuViewport
        {side}
        {align}
        anchor={anchor === "bar" ? bar : undefined}
        sideOffset={8}
        alignOffset={0}
        collisionPadding={16}
        class="h-(--viewport-height) w-(--viewport-width) [--panel-height:var(--available-height)] origin-(--transform-origin) overflow-hidden rounded-3xl bg-popover text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale,width,height,left,top] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none dark:ring-foreground/10"
      />
    </NavigationMenu>
  </div>
</div>
