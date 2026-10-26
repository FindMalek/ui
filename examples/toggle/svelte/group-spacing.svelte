<script lang="ts">
  import { Bold, Bookmark, Heart, Italic, Star, Underline } from "@lucide/svelte"
  import { Toggle, ToggleGroup, ToggleIcon } from "@ui-sdk/svelte/toggle"

  const formatting = [
    { value: "bold", label: "Bold", icon: Bold },
    { value: "italic", label: "Italic", icon: Italic },
    { value: "underline", label: "Underline", icon: Underline },
  ]

  const favorites = [
    { value: "star", label: "Star", icon: Star },
    { value: "heart", label: "Heart", icon: Heart },
    { value: "bookmark", label: "Bookmark", icon: Bookmark },
  ]
</script>

<div class="flex flex-col items-start gap-4">
  <ToggleGroup multiple aria-label="Text formatting" class="flex w-fit items-center rounded-2xl">
    {#each formatting as item (item.value)}
      <Toggle
        value={item.value}
        aria-label={item.label}
        class="inline-flex h-8 min-w-8 shrink-0 items-center justify-center border border-s-0 border-input bg-transparent px-2 text-sm font-medium whitespace-nowrap outline-none transition-colors first:rounded-s-2xl first:border-s last:rounded-e-2xl hover:bg-muted hover:text-foreground focus-visible:z-10 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        <ToggleIcon class="flex">
          <item.icon class="size-4" />
        </ToggleIcon>
      </Toggle>
    {/each}
  </ToggleGroup>
  <ToggleGroup multiple aria-label="Favorites" class="flex w-fit items-center gap-2">
    {#each favorites as item (item.value)}
      <Toggle
        value={item.value}
        class="group inline-flex h-8 min-w-8 shrink-0 items-center justify-center gap-1 rounded-2xl border border-input bg-transparent ps-2 pe-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        <ToggleIcon class="flex">
          <item.icon class="size-4 group-data-pressed:fill-current" />
        </ToggleIcon>
        {item.label}
      </Toggle>
    {/each}
  </ToggleGroup>
</div>
