<script lang="ts">
  import { CircleQuestionMark } from "@lucide/svelte"
  import {
    Popover,
    PopoverArrow,
    PopoverContent,
    PopoverDescription,
    PopoverTitle,
    PopoverTrigger,
  } from "@ui-sdk/svelte/popover"

  const sides = ["top", "right", "bottom", "left"] as const
  const aligns = ["start", "center", "end"] as const
  let open = $state(false)
  let side = $state<(typeof sides)[number]>("bottom")
  let align = $state<(typeof aligns)[number]>("start")
  let controls: HTMLDivElement | undefined = $state()

  function onOpenChange(next: boolean, details: { event?: Event; cancel: () => void }) {
    const target = details.event?.target
    if (!next && target instanceof Node && controls?.contains(target)) return details.cancel()
    open = next
  }
</script>

<div class="flex flex-col items-center gap-8">
  <div bind:this={controls} class="flex flex-col items-center gap-2">
    <div
      role="group"
      aria-label="Side"
      class="inline-flex cursor-default h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
    >
      {#each sides as value (value)}
        <button
          type="button"
          aria-pressed={side === value}
          class="inline-flex cursor-default h-full flex-1 items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none"
          onclick={() => (side = value)}
        >
          {value}
        </button>
      {/each}
    </div>
    <div
      role="group"
      aria-label="Align"
      class="inline-flex cursor-default h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
    >
      {#each aligns as value (value)}
        <button
          type="button"
          aria-pressed={align === value}
          class="inline-flex cursor-default h-full flex-1 items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none"
          onclick={() => (align = value)}
        >
          {value}
        </button>
      {/each}
    </div>
  </div>
  <Popover {open} {onOpenChange}>
    <PopoverTrigger
      aria-label="Help"
      class="inline-flex cursor-default size-8 shrink-0 items-center justify-center rounded-2xl border border-border bg-background bg-clip-padding whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
    >
      <CircleQuestionMark aria-hidden="true" class="size-4" />
    </PopoverTrigger>
    <PopoverContent
      {side}
      {align}
      sideOffset={10}
      arrowPadding={12}
      class="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
    >
      <PopoverArrow
        class="size-2.5 rotate-45 border-foreground/5 bg-popover data-[side=bottom]:-top-[5px] data-[side=bottom]:border-t data-[side=bottom]:border-l data-[side=top]:-bottom-[5px] data-[side=top]:border-r data-[side=top]:border-b data-[side=left]:-right-[5px] data-[side=left]:border-t data-[side=left]:border-r data-[side=right]:-left-[5px] data-[side=right]:border-b data-[side=right]:border-l"
      />
      <div class="flex flex-col gap-1">
        <PopoverTitle class="text-base font-medium">Keyboard shortcuts</PopoverTitle>
        <PopoverDescription class="text-sm text-muted-foreground">
          Press ? anywhere to see every shortcut.
        </PopoverDescription>
      </div>
    </PopoverContent>
  </Popover>
</div>
