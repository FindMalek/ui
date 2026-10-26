import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@ui-sdk/react/progress"

export function Example() {
  return (
    <Progress value={56} className="flex w-full max-w-xs flex-wrap items-center gap-x-3 gap-y-2">
      <ProgressLabel className="text-sm font-medium">Upload progress</ProgressLabel>
      <ProgressValue className="ms-auto text-sm text-muted-foreground tabular-nums" />
      <ProgressTrack className="h-2 w-full overflow-hidden rounded-full bg-muted">
        <ProgressIndicator className="h-full bg-primary transition-[width]" />
      </ProgressTrack>
    </Progress>
  )
}
