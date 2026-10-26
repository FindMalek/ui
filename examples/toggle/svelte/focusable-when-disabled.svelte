<script lang="ts">
  import { Pin } from "@lucide/svelte"
  import { Toggle, ToggleIcon } from "@ui-sdk/svelte/toggle"

  const hint = $props.id()
</script>

<div class="flex flex-col items-start gap-2">
  <Toggle
    disabled
    focusableWhenDisabled
    aria-describedby={hint}
    class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted disabled:pointer-events-none data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
  >
    <ToggleIcon class="flex">
      <Pin class="size-4" />
    </ToggleIcon>
    Pin to top
  </Toggle>
  <p
    id={hint}
    class="text-sm text-muted-foreground"
  >Only owners can pin messages.</p>
</div>
