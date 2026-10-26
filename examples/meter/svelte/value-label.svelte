<script lang="ts">
  import {
    Meter,
    MeterIndicator,
    MeterLabel,
    MeterTrack,
    MeterValue,
    type MeterLabelDetails,
  } from "@ui-sdk/svelte/meter"

  const valueLabel = (value: number, details: MeterLabelDetails) =>
    `${value} of ${details.max} requests, ${details.formatted}`
</script>

<Meter value={750} max={1000} getValueLabel={valueLabel} class="flex w-full max-w-xs flex-wrap gap-3 text-foreground">
  <MeterLabel class="text-sm font-medium">API requests</MeterLabel>
  <MeterValue class="ms-auto text-sm text-muted-foreground tabular-nums">750 / 1,000</MeterValue>
  <MeterTrack class="relative flex h-2 w-full items-center overflow-x-hidden rounded-2xl bg-muted">
    <MeterIndicator class="h-full bg-primary transition-[width] motion-reduce:transition-none" />
  </MeterTrack>
</Meter>
