import { Meter, MeterIndicator, MeterLabel, MeterTrack, MeterValue } from "@ui-sdk/solid/meter"

export function Example() {
  return (
    <Meter
      value={750}
      max={1000}
      getValueLabel={(value, details) => `${value} of ${details.max} requests, ${details.formatted}`}
      class="flex w-full max-w-xs flex-wrap gap-3 text-foreground"
    >
      <MeterLabel class="text-sm font-medium">API requests</MeterLabel>
      <MeterValue class="ms-auto text-sm text-muted-foreground tabular-nums">750 / 1,000</MeterValue>
      <MeterTrack class="relative flex h-2 w-full items-center overflow-x-hidden rounded-2xl bg-muted">
        <MeterIndicator class="h-full bg-primary transition-[width] motion-reduce:transition-none" />
      </MeterTrack>
    </Meter>
  )
}
