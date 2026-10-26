<script lang="ts">
  import {
    Progress,
    ProgressIndicator,
    ProgressLabel,
    ProgressTrack,
    ProgressValue,
  } from "@ui-sdk/svelte/progress"

</script>

<Progress value={18} class="flex w-full max-w-xs flex-wrap items-center gap-x-3 gap-y-2">
  <ProgressLabel class="text-sm font-medium">Battery</ProgressLabel>
  <ProgressValue class="ms-auto text-sm text-muted-foreground tabular-nums">
    {#snippet children(state)}
      {state.status === "complete" ? "Charged" : `${state.text} charged`}
    {/snippet}
  </ProgressValue>
  <ProgressTrack class="block h-2 w-full overflow-hidden rounded-full bg-muted">
    {#snippet render({ props })}
      <span {...props}>
        <ProgressIndicator>
          {#snippet render({ props, state })}
            <div
              {...props}
              class={(state.percent ?? 0) < 20
                ? "h-full bg-destructive transition-[width]"
                : "h-full bg-primary transition-[width]"}
            ></div>
          {/snippet}
        </ProgressIndicator>
      </span>
    {/snippet}
  </ProgressTrack>
</Progress>
