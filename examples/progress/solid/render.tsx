import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@ui-sdk/solid/progress"

export function Example() {
  return (
    <Progress value={18} class="flex w-full max-w-xs flex-wrap items-center gap-x-3 gap-y-2">
      <ProgressLabel class="text-sm font-medium">Battery</ProgressLabel>
      <ProgressValue class="ms-auto text-sm text-muted-foreground tabular-nums">
        {(state) => (state.status === "complete" ? "Charged" : `${state.text} charged`)}
      </ProgressValue>
      <ProgressTrack
        render={(props) => <span {...props} />}
        class="block h-2 w-full overflow-hidden rounded-full bg-muted"
      >
        <ProgressIndicator
          class={(state) =>
            (state.percent ?? 0) < 20
              ? "h-full bg-destructive transition-[width]"
              : "h-full bg-primary transition-[width]"
          }
        />
      </ProgressTrack>
    </Progress>
  )
}
