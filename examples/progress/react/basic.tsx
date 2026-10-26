import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@ui-sdk/react/progress"

export function Example() {
  return (
    <Progress value={60} className="flex w-full max-w-xs flex-wrap gap-3 text-foreground">
      <ProgressLabel className="text-sm font-medium">Loading</ProgressLabel>
      <ProgressValue className="ms-auto text-sm text-muted-foreground tabular-nums" />
      <ProgressTrack className="relative flex h-2 w-full items-center overflow-x-hidden rounded-2xl bg-muted">
        <ProgressIndicator className="h-full bg-primary transition-[width] motion-reduce:transition-none" />
      </ProgressTrack>
    </Progress>
  )
}
