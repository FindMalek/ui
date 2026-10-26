<script lang="ts">
  import {
    Progress,
    ProgressIndicator,
    ProgressLabel,
    ProgressTrack,
    ProgressValue,
  } from "@ui-sdk/svelte/progress"

  let value = $state(20)
</script>

<div class="flex w-full max-w-xs flex-col gap-4 text-foreground">
  <Progress {value} class="flex flex-wrap gap-3 text-foreground">
    <ProgressLabel class="text-sm font-medium">Uploading files</ProgressLabel>
    <ProgressValue class="ms-auto text-sm text-muted-foreground tabular-nums" />
    <ProgressTrack class="relative flex h-2 w-full items-center overflow-x-hidden rounded-2xl bg-muted">
      <ProgressIndicator class="h-full bg-primary transition-[width] motion-reduce:transition-none" />
    </ProgressTrack>
  </Progress>
  <div class="flex gap-2">
    <button
      type="button"
      aria-disabled={value >= 100}
      class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklab,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px aria-disabled:pointer-events-none aria-disabled:opacity-50 motion-reduce:transition-none"
      onclick={() => (value = Math.min(100, value + 20))}
    >
      Upload more
    </button>
    <button
      type="button"
      class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklab,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px aria-disabled:pointer-events-none aria-disabled:opacity-50 motion-reduce:transition-none"
      onclick={() => (value = 0)}
    >
      Reset
    </button>
  </div>
</div>
