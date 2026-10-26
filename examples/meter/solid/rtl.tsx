import { Meter, MeterIndicator, MeterLabel, MeterTrack, MeterValue } from "@ui-sdk/solid/meter"

export function Example() {
  return (
    <div dir="rtl" class="w-full max-w-xs">
      <Meter value={68} locale="ar-EG" class="flex flex-wrap items-center gap-x-3 gap-y-2">
        <MeterLabel class="text-sm font-medium">مساحة التخزين</MeterLabel>
        <MeterValue class="ms-auto text-sm text-muted-foreground tabular-nums" />
        <MeterTrack class="h-2 w-full overflow-hidden rounded-full bg-muted">
          <MeterIndicator class="h-full bg-primary transition-[width]" />
        </MeterTrack>
      </Meter>
    </div>
  )
}
