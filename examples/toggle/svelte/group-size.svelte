<script lang="ts">
  import { Bold, Italic, Underline } from "@lucide/svelte"
  import { Toggle, ToggleGroup, ToggleIcon } from "@ui-sdk/svelte/toggle"

  const formatting = [
    { value: "bold", label: "Bold", icon: Bold },
    { value: "italic", label: "Italic", icon: Italic },
    { value: "underline", label: "Underline", icon: Underline },
  ]

  const sizes = [
    { label: "Text formatting, small", toggle: "h-7 min-w-7 px-1.5", icon: "size-3.5" },
    { label: "Text formatting", toggle: "h-8 min-w-8 px-2", icon: "size-4" },
    { label: "Text formatting, large", toggle: "h-9 min-w-9 px-2.5", icon: "size-4" },
  ]
</script>

<div class="flex flex-col items-start gap-4">
  {#each sizes as size (size.label)}
    <ToggleGroup multiple aria-label={size.label} class="flex w-fit items-center gap-1">
      {#each formatting as item (item.value)}
        <Toggle
          value={item.value}
          aria-label={item.label}
          class={[
            size.toggle,
            "inline-flex shrink-0 items-center justify-center rounded-2xl border border-input bg-transparent text-sm font-medium whitespace-nowrap outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50",
          ]}
        >
          <ToggleIcon class="flex">
            <item.icon class={size.icon} />
          </ToggleIcon>
        </Toggle>
      {/each}
    </ToggleGroup>
  {/each}
</div>
