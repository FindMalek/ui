<script lang="ts">
  import { Meter, MeterIndicator, MeterLabel, MeterTrack, MeterValue } from "@ui-sdk/svelte/meter"

</script>

<Meter value={91} class="flex w-full max-w-xs flex-wrap items-center gap-x-3 gap-y-2">
  <MeterLabel class="text-sm font-medium">Disk</MeterLabel>
  <MeterValue class="ms-auto text-sm text-muted-foreground tabular-nums">
    {#snippet children(state)}
      {state.text} used
    {/snippet}
  </MeterValue>
  <MeterTrack class="block h-2 w-full overflow-hidden rounded-full bg-muted">
    {#snippet render({ props })}
      <span {...props}>
        <MeterIndicator>
          {#snippet render({ props, state })}
            <div
              {...props}
              class={state.percent >= 90
                ? "h-full bg-destructive transition-[width]"
                : state.percent >= 70
                  ? "h-full bg-amber-500 transition-[width]"
                  : "h-full bg-primary transition-[width]"}
            ></div>
          {/snippet}
        </MeterIndicator>
      </span>
    {/snippet}
  </MeterTrack>
</Meter>
