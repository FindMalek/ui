<script lang="ts">
  import { Bold, Italic } from "@lucide/svelte"
  import { Toggle, ToggleGroup } from "@ui-sdk/svelte/toggle"
  import { Toolbar, ToolbarButton, ToolbarSeparator } from "@ui-sdk/svelte/toolbar"
</script>

<div dir="rtl">
  <Toolbar
    aria-label="تنسيق"
    class="flex w-fit items-center gap-1 rounded-3xl border border-border p-1"
  >
    <ToggleGroup
      multiple
      aria-label="نمط النص"
      class="flex items-center gap-1"
    >
      <Toggle
        value="bold"
        aria-label="غامق"
        class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2 text-sm font-medium outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
      >
        <Bold class="size-4" />
      </Toggle>
      <Toggle
        value="italic"
        aria-label="مائل"
        class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2 text-sm font-medium outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
      >
        <Italic class="size-4" />
      </Toggle>
    </ToggleGroup>
    <ToolbarSeparator class="mx-1 h-5 w-px shrink-0 bg-border" />
    <ToolbarButton
      class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
    >
      حفظ
    </ToolbarButton>
  </Toolbar>
</div>
