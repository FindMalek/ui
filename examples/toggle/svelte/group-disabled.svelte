<script lang="ts">
  import { Bold, Italic, Underline } from "@lucide/svelte"
  import { Toggle, ToggleGroup, ToggleIcon } from "@ui-sdk/svelte/toggle"

  const formatting = [
    { value: "bold", label: "Bold", icon: Bold },
    { value: "italic", label: "Italic", icon: Italic },
    { value: "underline", label: "Underline", icon: Underline },
  ]
</script>

<div class="flex flex-col items-start gap-4">
  <ToggleGroup
    multiple
    disabled
    defaultValue={["bold"]}
    aria-label="Text formatting, disabled"
    class="flex w-fit items-center gap-1"
  >
    {#each formatting as item (item.value)}
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
  <ToggleGroup
    multiple
    aria-label="Text formatting"
    class="flex w-fit items-center gap-1"
  >
    {#each formatting as item (item.value)}
      <Toggle
        value={item.value}
        disabled={item.value === "underline"}
        aria-label={item.label}
        class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted disabled:pointer-events-none data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
      >
        <ToggleIcon class="flex">
          <item.icon class="size-4" />
        </ToggleIcon>
      </Toggle>
    {/each}
  </ToggleGroup>
</div>
