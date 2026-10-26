<script lang="ts">
  import { Command, CommandInput, CommandItem, CommandList } from "@ui-sdk/svelte/command"

  const commands = Array.from({ length: 10_000 }, (_, index) => ({
    value: `command-${index + 1}`,
    label: `Command ${index + 1}`,
  }))

  const row = 32
  const height = 256

  let scroller: HTMLDivElement | undefined = $state()
  let scrollTop = $state(0)

  function onValueChange(_value: string | null, { index }: { index: number }) {
    const el = scroller
    if (!el || index < 0) return
    const top = index * row
    if (top < el.scrollTop) el.scrollTop = top
    else if (top + row > el.scrollTop + el.clientHeight) el.scrollTop = top + row - el.clientHeight
  }

  function visible(items: typeof commands) {
    const start = Math.max(0, Math.floor(scrollTop / row) - 4)
    const end = Math.min(items.length, Math.ceil((scrollTop + height) / row) + 4)
    return items.slice(start, end).map((item, offset) => ({ item, index: start + offset }))
  }
</script>

<Command
  items={commands}
  class="flex h-80 w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground ring-1 ring-foreground/5"
  {onValueChange}
>
  <div class="shrink-0 p-1 pb-0">
    <CommandInput
      aria-label="Search 10,000 commands"
      placeholder="Search 10,000 commands..."
      class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
    />
  </div>
  <div
    bind:this={scroller}
    style="height: {height}px"
    class="mt-1 min-h-0 max-h-[min(16rem,50dvh)] overflow-y-auto overscroll-contain"
    onscroll={(event) => (scrollTop = event.currentTarget.scrollTop)}
  >
    <CommandList class="relative outline-none">
      {#snippet children(state)}
        <div style="height: {state.items.length * row}px">
          {#each visible(state.items as typeof commands) as { item, index } (item.value)}
            <CommandItem
              value={item.value}
              label={item.label}
              {index}
              style="top: {index * row}px; height: {row}px"
              class="absolute inset-x-1 flex cursor-default items-center rounded-xl px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground"
            >
              {item.label}
            </CommandItem>
          {/each}
        </div>
      {/snippet}
    </CommandList>
  </div>
</Command>
