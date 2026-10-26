<script lang="ts">
  import { HoverCard, HoverCardArrow, HoverCardContent, HoverCardTrigger } from "@ui-sdk/svelte/hover-card"

  const sides = ["top", "right", "bottom", "left"] as const
  const aligns = ["start", "center", "end"] as const
  const alan = {
    handle: "alan",
    name: "Alan Turing",
    bio: "Described the universal machine every computer descends from.",
  }
  let side = $state<(typeof sides)[number]>("bottom")
  let align = $state<(typeof aligns)[number]>("center")
</script>

<div class="flex flex-col items-center gap-8">
  <div class="grid grid-cols-[auto_auto] items-center gap-x-3 gap-y-2">
    <span class="text-end text-sm text-muted-foreground">side</span>
    <div
      role="group"
      aria-label="side"
      class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
    >
      {#each sides as value (value)}
        <button
          type="button"
          aria-pressed={side === value}
          class="inline-flex h-full flex-1 cursor-default items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:border-border aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none"
          onclick={() => (side = value)}
        >
          {value}
        </button>
      {/each}
    </div>
    <span class="text-end text-sm text-muted-foreground">align</span>
    <div
      role="group"
      aria-label="align"
      class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
    >
      {#each aligns as value (value)}
        <button
          type="button"
          aria-pressed={align === value}
          class="inline-flex h-full flex-1 cursor-default items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:border-border aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none"
          onclick={() => (align = value)}
        >
          {value}
        </button>
      {/each}
    </div>
  </div>
  <HoverCard>
    <HoverCardTrigger
      href="https://example.com/people/alan"
      class="rounded-sm text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 data-open:underline"
    >
      @{alan.handle}
    </HoverCardTrigger>
    <HoverCardContent
      {side}
      {align}
      sideOffset={10}
      arrowPadding={12}
      class="flex w-72 origin-(--transform-origin) flex-col gap-1 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
    >
      <HoverCardArrow
        class="size-2.5 rotate-45 border-foreground/5 bg-popover data-[side=bottom]:-top-[5px] data-[side=bottom]:border-t data-[side=bottom]:border-l data-[side=top]:-bottom-[5px] data-[side=top]:border-r data-[side=top]:border-b data-[side=left]:-right-[5px] data-[side=left]:border-t data-[side=left]:border-r data-[side=right]:-left-[5px] data-[side=right]:border-b data-[side=right]:border-l dark:border-foreground/10"
      />
      <p class="font-medium">{alan.name}</p>
      <p>{alan.bio}</p>
    </HoverCardContent>
  </HoverCard>
</div>
