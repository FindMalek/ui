import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@ui-sdk/solid/progress"

export function Example() {
  return (
    <Progress value={60} class="flex w-full max-w-xs flex-wrap gap-3 text-foreground">
      <ProgressLabel class="text-sm font-medium">Loading</ProgressLabel>
      <ProgressValue class="ms-auto text-sm text-muted-foreground tabular-nums" />
      <ProgressTrack class="relative flex h-2 w-full items-center overflow-x-hidden rounded-2xl bg-muted">
        <ProgressIndicator class="h-full bg-primary transition-[width] motion-reduce:transition-none" />
      </ProgressTrack>
    </Progress>
  )
}
