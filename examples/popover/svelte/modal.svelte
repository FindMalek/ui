<script lang="ts">
  import {
    Popover,
    PopoverClose,
    PopoverContent,
    PopoverDescription,
    PopoverTitle,
    PopoverTrigger,
  } from "@ui-sdk/svelte/popover"

  const modes = [
    { label: "Non-modal", modal: false },
    { label: "Trap focus", modal: "trap-focus" },
    { label: "Modal", modal: true },
  ] as const
  let clicks = $state(0)
</script>

<div class="flex flex-col items-center gap-4">
  <div class="flex flex-wrap justify-center gap-2">
    {#each modes as mode (mode.label)}
      <Popover modal={mode.modal}>
        <PopoverTrigger
          class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
        >
          {mode.label}
        </PopoverTrigger>
        <PopoverContent
          class="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
        >
          <div class="flex flex-col gap-1">
            <PopoverTitle class="text-base font-medium">{mode.label}</PopoverTitle>
            <PopoverDescription class="text-sm text-muted-foreground">Press Tab, then click the box below.</PopoverDescription>
          </div>
          <PopoverClose
            class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 self-end rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
          >
            Close
          </PopoverClose>
        </PopoverContent>
      </Popover>
    {/each}
  </div>
  <button
    type="button"
    class="rounded-2xl border border-dashed border-border px-3 py-1.5 text-sm text-muted-foreground outline-none hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
    onclick={() => clicks++}
  >
    Clicked {clicks} {clicks === 1 ? "time" : "times"}. Open a popover, then click here.
  </button>
</div>
