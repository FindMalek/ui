<script lang="ts">
  import { Bold, Italic, Underline } from "@lucide/svelte"
  import { Toggle, ToggleGroup, ToggleIcon, createToggleGroupController } from "@ui-sdk/svelte/toggle"

  const formatting = [
    { value: "bold", label: "Bold", icon: Bold },
    { value: "italic", label: "Italic", icon: Italic },
    { value: "underline", label: "Underline", icon: Underline },
  ]

  const editor = createToggleGroupController()
  let value = $state(["bold"])
  let reason = $state("")
</script>

<div class="flex flex-col items-start gap-3">
  <ToggleGroup
    bind:value
    multiple
    aria-label="Text formatting"
    class="flex w-fit items-center gap-1"
    controller={editor}
    onValueChange={(_, details) => (reason = details.reason)}
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
  <button
    type="button"
    class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px motion-reduce:transform-none motion-reduce:transition-none"
    onclick={() => editor.setValue([])}
  >
    Clear
  </button>
  <output class="text-sm text-muted-foreground">
    Pressed: {value.length ? value.join(", ") : "none"}{reason && `, last change: ${reason}`}
  </output>
</div>
