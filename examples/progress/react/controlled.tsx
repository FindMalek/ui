import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@ui-sdk/react/progress"
import * as React from "react"

export function Example() {
  const [value, setValue] = React.useState(20)

  return (
    <div className="flex w-full max-w-xs flex-col gap-4 text-foreground">
      <Progress value={value} className="flex flex-wrap gap-3 text-foreground">
        <ProgressLabel className="text-sm font-medium">Uploading files</ProgressLabel>
        <ProgressValue className="ms-auto text-sm text-muted-foreground tabular-nums" />
        <ProgressTrack className="relative flex h-2 w-full items-center overflow-x-hidden rounded-2xl bg-muted">
          <ProgressIndicator className="h-full bg-primary transition-[width] motion-reduce:transition-none" />
        </ProgressTrack>
      </Progress>
      <div className="flex gap-2">
        <button
          type="button"
          aria-disabled={value >= 100}
          className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklab,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px aria-disabled:pointer-events-none aria-disabled:opacity-50 motion-reduce:transition-none"
          onClick={() => setValue((current) => Math.min(100, current + 20))}
        >
          Upload more
        </button>
        <button
          type="button"
          className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklab,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px aria-disabled:pointer-events-none aria-disabled:opacity-50 motion-reduce:transition-none"
          onClick={() => setValue(0)}
        >
          Reset
        </button>
      </div>
    </div>
  )
}
