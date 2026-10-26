<script lang="ts">
  import { Bold, Italic, Underline } from "@lucide/svelte"
  import { Toggle, ToggleGroup, ToggleIcon } from "@ui-sdk/svelte/toggle"
</script>

<ToggleGroup
  multiple
  aria-label="Text formatting"
  class="flex w-fit items-center gap-1"
>
  <Toggle
    value="bold"
    aria-label="Bold"
    class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted disabled:pointer-events-none data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
  >
    <ToggleIcon class="flex">
      <Bold class="size-4" />
    </ToggleIcon>
  </Toggle>
  <Toggle
    value="italic"
    aria-label="Italic"
    class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted disabled:pointer-events-none data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
  >
    <ToggleIcon class="flex">
      <Italic class="size-4" />
    </ToggleIcon>
  </Toggle>
  <Toggle
    value="underline"
    aria-label="Underline"
    class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted disabled:pointer-events-none data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
  >
    <ToggleIcon class="flex">
      <Underline class="size-4" />
    </ToggleIcon>
  </Toggle>
</ToggleGroup>
