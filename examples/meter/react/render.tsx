import { Meter, MeterIndicator, MeterLabel, MeterTrack, MeterValue } from "@ui-sdk/react/meter"

export function Example() {
  return (
    <Meter value={91} className="flex w-full max-w-xs flex-wrap items-center gap-x-3 gap-y-2">
      <MeterLabel className="text-sm font-medium">Disk</MeterLabel>
      <MeterValue className="ms-auto text-sm text-muted-foreground tabular-nums">
        {(state) => `${state.text} used`}
      </MeterValue>
      <MeterTrack render={<span />} className="block h-2 w-full overflow-hidden rounded-full bg-muted">
        <MeterIndicator
          className={(state) =>
            state.percent >= 90
              ? "h-full bg-destructive transition-[width]"
              : state.percent >= 70
                ? "h-full bg-amber-500 transition-[width]"
                : "h-full bg-primary transition-[width]"
          }
        />
      </MeterTrack>
    </Meter>
  )
}
