<script lang="ts">
  import { Bold, Search } from "@lucide/svelte"
  import { NumberInput, NumberInputControl } from "@ui-sdk/svelte/number-input"
  import { Toolbar, ToolbarButton, ToolbarInput } from "@ui-sdk/svelte/toolbar"
</script>

<Toolbar
  aria-label="Text"
  class="flex w-fit items-center gap-1 rounded-3xl border border-border p-1"
>
  <ToolbarButton
    aria-label="Bold"
    class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
  >
    <Bold class="size-4" />
  </ToolbarButton>
  <NumberInput
    defaultValue={14}
    min={8}
    max={72}
  >
    <ToolbarInput
      aria-label="Font size"
      class="h-8 w-14 min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base tabular-nums outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm motion-reduce:transition-none"
    >
      {#snippet render({ props })}
        <NumberInputControl {...props} />
      {/snippet}
    </ToolbarInput>
  </NumberInput>
  <ToolbarInput
    aria-label="Find"
    placeholder="Find…"
    class="h-8 w-28 min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm motion-reduce:transition-none"
  />
  <ToolbarButton
    aria-label="Search"
    class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
  >
    <Search class="size-4" />
  </ToolbarButton>
</Toolbar>
