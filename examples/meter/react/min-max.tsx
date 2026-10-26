import { Meter, MeterIndicator, MeterLabel, MeterTrack, MeterValue } from "@ui-sdk/react/meter"

export function Example() {
  return (
    <Meter
      value={720}
      min={300}
      max={850}
      format={{ style: "decimal" }}
      className="flex w-full max-w-xs flex-wrap gap-3 text-foreground"
    >
      <MeterLabel className="text-sm font-medium">Credit score</MeterLabel>
      <MeterValue className="ms-auto text-sm text-muted-foreground tabular-nums" />
      <MeterTrack className="relative flex h-2 w-full items-center overflow-x-hidden rounded-2xl bg-muted">
        <MeterIndicator className="h-full bg-primary transition-[width] motion-reduce:transition-none" />
      </MeterTrack>
    </Meter>
  )
}
