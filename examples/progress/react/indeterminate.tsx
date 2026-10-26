import { Progress, ProgressIndicator, ProgressLabel, ProgressTrack } from "@ui-sdk/react/progress"

export function Example() {
  return (
    <Progress value={null} className="flex w-full max-w-xs flex-wrap gap-3 text-foreground">
      <ProgressLabel className="text-sm font-medium">Connecting</ProgressLabel>
      <ProgressTrack className="relative flex h-2 w-full items-center overflow-x-hidden rounded-2xl bg-muted">
        <ProgressIndicator className="h-full bg-primary data-indeterminate:w-full data-indeterminate:animate-pulse motion-reduce:animate-none" />
      </ProgressTrack>
    </Progress>
  )
}
