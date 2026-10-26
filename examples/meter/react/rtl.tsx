import { Meter, MeterIndicator, MeterLabel, MeterTrack, MeterValue } from "@ui-sdk/react/meter"

export function Example() {
  return (
    <div dir="rtl" className="w-full max-w-xs">
      <Meter value={68} locale="ar-EG" className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <MeterLabel className="text-sm font-medium">مساحة التخزين</MeterLabel>
        <MeterValue className="ms-auto text-sm text-muted-foreground tabular-nums" />
        <MeterTrack className="h-2 w-full overflow-hidden rounded-full bg-muted">
          <MeterIndicator className="h-full bg-primary transition-[width]" />
        </MeterTrack>
      </Meter>
    </div>
  )
}
