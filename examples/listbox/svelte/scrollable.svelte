<script lang="ts">
  import { Check } from "@lucide/svelte"
  import { Listbox, ListboxItem, ListboxItemIndicator } from "@ui-sdk/svelte/listbox"

  const timezones = Array.from({ length: 27 }, (_, index) => {
    const offset = index - 12
    const label = `UTC${offset < 0 ? "−" : "+"}${String(Math.abs(offset)).padStart(2, "0")}:00`
    return { value: `utc${offset}`, label }
  })

  let highlighted = $state<unknown>(null)
</script>

<div class="flex w-full max-w-64 flex-col gap-3">
  <Listbox
    defaultValue="utc9"
    aria-label="Time zone"
    class="box-border max-h-56 scroll-py-1 overflow-y-auto flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none"
    onHighlight={(value) => (highlighted = value)}
  >
    {#each timezones as zone, index (zone.value)}
      <ListboxItem
        value={zone.value}
        {index}
        class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 tabular-nums"
      >
        {zone.label}
        <ListboxItemIndicator
          class="pointer-events-none absolute end-2 flex size-4 items-center justify-center"
        >
          <Check aria-hidden="true" class="pointer-events-none block size-4 shrink-0" />
        </ListboxItemIndicator>
      </ListboxItem>
    {/each}
  </Listbox>
  <output class="m-0 block min-h-10 text-sm leading-5 break-words text-muted-foreground">Focused: {highlighted ?? "none"}</output>
</div>
