<script lang="ts">
  import { HoverCard, HoverCardContent, HoverCardTrigger } from "@ui-sdk/svelte/hover-card"

  const sideOffsets = [4, 12, 24]
  const alignOffsets = [-16, 0, 16]
  const paddings = [8, 48]
  let sideOffset = $state(4)
  let alignOffset = $state(0)
  let collisionPadding = $state(8)
</script>

<div class="flex flex-col items-center gap-6">
  <div class="grid grid-cols-[auto_auto] items-center gap-x-3 gap-y-2">
    <span class="text-end text-sm text-muted-foreground">sideOffset</span>
    <div
      role="group"
      aria-label="sideOffset"
      class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
    >
      {#each sideOffsets as value (value)}
        <button
          type="button"
          aria-pressed={sideOffset === value}
          class="inline-flex h-full flex-1 cursor-default items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:border-border aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none"
          onclick={() => (sideOffset = value)}
        >
          {value}
        </button>
      {/each}
    </div>
    <span class="text-end text-sm text-muted-foreground">alignOffset</span>
    <div
      role="group"
      aria-label="alignOffset"
      class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
    >
      {#each alignOffsets as value (value)}
        <button
          type="button"
          aria-pressed={alignOffset === value}
          class="inline-flex h-full flex-1 cursor-default items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:border-border aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none"
          onclick={() => (alignOffset = value)}
        >
          {value}
        </button>
      {/each}
    </div>
    <span class="text-end text-sm text-muted-foreground">collisionPadding</span>
    <div
      role="group"
      aria-label="collisionPadding"
      class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
    >
      {#each paddings as value (value)}
        <button
          type="button"
          aria-pressed={collisionPadding === value}
          class="inline-flex h-full flex-1 cursor-default items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:border-border aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none"
          onclick={() => (collisionPadding = value)}
        >
          {value}
        </button>
      {/each}
    </div>
  </div>
  <HoverCard>
    <HoverCardTrigger
      href="https://example.com/offsets"
      class="rounded-sm text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 data-open:underline"
    >
      Offsets
    </HoverCardTrigger>
    <HoverCardContent
      align="start"
      {sideOffset}
      {alignOffset}
      {collisionPadding}
      class="flex w-56 origin-(--transform-origin) flex-col gap-1 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
    >
      <p class="font-medium">Offsets</p>
      <p class="text-muted-foreground">
        {sideOffset}px from the link, shifted {alignOffset}px, {collisionPadding}px from the edges.
      </p>
    </HoverCardContent>
  </HoverCard>
</div>
