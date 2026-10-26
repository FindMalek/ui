import { Meter, MeterIndicator, MeterLabel, MeterTrack, MeterValue } from "@ui-sdk/react/meter"

const meters = [
  { label: "Storage", value: 120, max: 250, format: { style: "unit", unit: "gigabyte" } },
  {
    label: "Budget",
    value: 1840,
    max: 2500,
    format: { style: "currency", currency: "USD", maximumFractionDigits: 0 },
  },
  { label: "Seats", value: 18, max: 25, format: (seats: number) => `${seats} of 25 seats` },
  { label: "Auslastung", value: 40, locale: "de-DE" },
] satisfies {
  label: string
  value: number
  max?: number
  format?: Intl.NumberFormatOptions | ((value: number) => string)
  locale?: string
}[]

export function Example() {
  return (
    <div className="flex w-full max-w-xs flex-col gap-5 text-foreground">
      {meters.map(({ label, ...options }) => (
        <Meter key={label} {...options} className="flex flex-wrap gap-3 text-foreground">
          <MeterLabel className="text-sm font-medium">{label}</MeterLabel>
          <MeterValue className="ms-auto text-sm text-muted-foreground tabular-nums" />
          <MeterTrack className="relative flex h-2 w-full items-center overflow-x-hidden rounded-2xl bg-muted">
            <MeterIndicator className="h-full bg-primary transition-[width] motion-reduce:transition-none" />
          </MeterTrack>
        </Meter>
      ))}
    </div>
  )
}
