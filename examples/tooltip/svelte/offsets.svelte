<script lang="ts">
  import { Tooltip, TooltipContent, TooltipTrigger } from "@ui-sdk/svelte/tooltip"

  const aligns = ["start", "center", "end"] as const
  const sideOffsets = [4, 12, 24]
  const alignOffsets = [-16, 0, 16]
  const paddings = [8, 48]
  let align = $state<(typeof aligns)[number]>("start")
  let sideOffset = $state(4)
  let alignOffset = $state(0)
  let collisionPadding = $state(8)
</script>

<div class="flex flex-col items-center gap-6">
  <div class="grid grid-cols-[auto_auto] items-center gap-x-3 gap-y-2">
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
  <Tooltip>
    <TooltipTrigger
      class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none w-40"
    >
      Offsets
    </TooltipTrigger>
    <TooltipContent
      {align}
      {sideOffset}
      {alignOffset}
      {collisionPadding}
      class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none"
    >
      {align}, {sideOffset}px away, shifted {alignOffset}px
    </TooltipContent>
  </Tooltip>
</div>
