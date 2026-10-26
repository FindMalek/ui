<script lang="ts">
  import { Toolbar, ToolbarButton } from "@ui-sdk/svelte/toolbar"
</script>

<Toolbar
  loop={false}
  aria-label="Pages"
  class="flex w-fit items-center gap-1 rounded-3xl border border-border p-1"
>
  {#each ["First", "Previous", "Next", "Last"] as label (label)}
    <ToolbarButton
      class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
    >
      {label}
    </ToolbarButton>
  {/each}
</Toolbar>
