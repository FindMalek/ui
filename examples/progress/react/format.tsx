import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@ui-sdk/react/progress"

const bars = [
  { label: "Transferred", value: 120, max: 250, format: { style: "unit", unit: "gigabyte" } },
  { label: "Processing", value: 87.25, format: { style: "percent", maximumFractionDigits: 1 } },
  { label: "Time left", value: 45, max: 60, format: (minutes: number) => `${60 - minutes} min left` },
  { label: "Fortschritt", value: 40, locale: "de-DE" },
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
      {bars.map(({ label, ...options }) => (
        <Progress key={label} {...options} className="flex flex-wrap gap-3 text-foreground">
          <ProgressLabel className="text-sm font-medium">{label}</ProgressLabel>
          <ProgressValue className="ms-auto text-sm text-muted-foreground tabular-nums" />
          <ProgressTrack className="relative flex h-2 w-full items-center overflow-x-hidden rounded-2xl bg-muted">
            <ProgressIndicator className="h-full bg-primary transition-[width] motion-reduce:transition-none" />
          </ProgressTrack>
        </Progress>
      ))}
    </div>
  )
}
