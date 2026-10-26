import { Meter, MeterIndicator, MeterLabel, MeterTrack, MeterValue } from "@ui-sdk/solid/meter"

export function Example() {
  return (
    <Meter
      value={720}
      min={300}
      max={850}
      format={{ style: "decimal" }}
      class="flex w-full max-w-xs flex-wrap gap-3 text-foreground"
    >
      <MeterLabel class="text-sm font-medium">Credit score</MeterLabel>
      <MeterValue class="ms-auto text-sm text-muted-foreground tabular-nums" />
      <MeterTrack class="relative flex h-2 w-full items-center overflow-x-hidden rounded-2xl bg-muted">
        <MeterIndicator class="h-full bg-primary transition-[width] motion-reduce:transition-none" />
      </MeterTrack>
    </Meter>
  )
}
