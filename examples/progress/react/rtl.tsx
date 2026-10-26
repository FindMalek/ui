import {
  Progress,
  ProgressIndicator,
  ProgressLabel,
  ProgressTrack,
  ProgressValue,
} from "@ui-sdk/react/progress"

export function Example() {
  return (
    <div dir="rtl" className="w-full max-w-xs">
      <Progress value={56} locale="ar-EG" className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <ProgressLabel className="text-sm font-medium">تقدم الرفع</ProgressLabel>
        <ProgressValue className="ms-auto text-sm text-muted-foreground tabular-nums" />
        <ProgressTrack className="h-2 w-full overflow-hidden rounded-full bg-muted">
          <ProgressIndicator className="h-full bg-primary transition-[width]" />
        </ProgressTrack>
      </Progress>
    </div>
  )
}
