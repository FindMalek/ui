import { Meter, MeterIndicator, MeterLabel, MeterTrack, MeterValue } from "@ui-sdk/react/meter"

export function Example() {
  return (
    <Meter
      value={750}
      max={1000}
      getValueLabel={(value, details) => `${value} of ${details.max} requests, ${details.formatted}`}
      className="flex w-full max-w-xs flex-wrap gap-3 text-foreground"
    >
      <MeterLabel className="text-sm font-medium">API requests</MeterLabel>
      <MeterValue className="ms-auto text-sm text-muted-foreground tabular-nums">750 / 1,000</MeterValue>
      <MeterTrack className="relative flex h-2 w-full items-center overflow-x-hidden rounded-2xl bg-muted">
        <MeterIndicator className="h-full bg-primary transition-[width] motion-reduce:transition-none" />
      </MeterTrack>
    </Meter>
  )
}
