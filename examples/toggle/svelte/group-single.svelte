<script lang="ts">
  import { TextAlignCenter, TextAlignEnd, TextAlignStart } from "@lucide/svelte"
  import { Toggle, ToggleGroup, ToggleIcon } from "@ui-sdk/svelte/toggle"

  const alignments = [
    { value: "left", label: "Align left", icon: TextAlignStart },
    { value: "center", label: "Align center", icon: TextAlignCenter },
    { value: "right", label: "Align right", icon: TextAlignEnd },
  ]
</script>

<ToggleGroup
  defaultValue={["left"]}
  aria-label="Text alignment"
  class="flex w-fit items-center gap-1"
>
  {#each alignments as item (item.value)}
    <Toggle
      value={item.value}
      aria-label={item.label}
      class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted disabled:pointer-events-none data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
    >
      <ToggleIcon class="flex">
        <item.icon class="size-4" />
      </ToggleIcon>
    </Toggle>
  {/each}
</ToggleGroup>
