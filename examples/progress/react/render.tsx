import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@ui-sdk/react/progress"

export function Example() {
  return (
    <Progress value={18} className="flex w-full max-w-xs flex-wrap items-center gap-x-3 gap-y-2">
      <ProgressLabel className="text-sm font-medium">Battery</ProgressLabel>
      <ProgressValue className="ms-auto text-sm text-muted-foreground tabular-nums">
        {(state) => (state.status === "complete" ? "Charged" : `${state.text} charged`)}
      </ProgressValue>
      <ProgressTrack render={<span />} className="block h-2 w-full overflow-hidden rounded-full bg-muted">
        <ProgressIndicator
          className={(state) =>
            (state.percent ?? 0) < 20
              ? "h-full bg-destructive transition-[width]"
              : "h-full bg-primary transition-[width]"
          }
        />
      </ProgressTrack>
    </Progress>
  )
}
