import { Progress, ProgressIndicator, ProgressLabel, ProgressTrack } from "@ui-sdk/solid/progress"

export function Example() {
  return (
    <Progress value={null} class="flex w-full max-w-xs flex-wrap gap-3 text-foreground">
      <ProgressLabel class="text-sm font-medium">Connecting</ProgressLabel>
      <ProgressTrack class="relative flex h-2 w-full items-center overflow-x-hidden rounded-2xl bg-muted">
        <ProgressIndicator class="h-full bg-primary data-indeterminate:w-full data-indeterminate:animate-pulse motion-reduce:animate-none" />
      </ProgressTrack>
    </Progress>
  )
}
