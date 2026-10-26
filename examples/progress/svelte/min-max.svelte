<script lang="ts">
  import {
    Progress,
    ProgressIndicator,
    ProgressLabel,
    ProgressTrack,
    ProgressValue,
  } from "@ui-sdk/svelte/progress"

</script>

<Progress value={3} min={1} max={5} class="flex w-full max-w-xs flex-wrap gap-3 text-foreground">
  <ProgressLabel class="text-sm font-medium">Setup, step 3 of 5</ProgressLabel>
  <ProgressValue class="ms-auto text-sm text-muted-foreground tabular-nums" />
  <ProgressTrack class="relative flex h-2 w-full items-center overflow-x-hidden rounded-2xl bg-muted">
    <ProgressIndicator class="h-full bg-primary transition-[width] motion-reduce:transition-none" />
  </ProgressTrack>
</Progress>
