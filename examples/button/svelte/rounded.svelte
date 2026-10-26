<script lang="ts">
  import { ArrowUp } from "@lucide/svelte"
  import { Button } from "@ui-sdk/svelte/button"
</script>

<div class="flex flex-wrap items-center gap-2">
  <Button
    class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-full border border-transparent bg-primary bg-clip-padding px-4 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50"
    >Subscribe</Button
  >
  <Button
    aria-label="Scroll to top"
    class="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background bg-clip-padding outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30"
  >
    <ArrowUp class="size-4" />
  </Button>
</div>
