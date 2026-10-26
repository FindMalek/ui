import "@ui-sdk/web/progress"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div dir="rtl" class="w-full max-w-xs">
      <ui-progress value="56" locale="ar-EG" class="flex flex-wrap items-center gap-x-3 gap-y-2">
        <ui-progress-label class="text-sm font-medium">تقدم الرفع</ui-progress-label>
        <ui-progress-value class="ms-auto text-sm text-muted-foreground tabular-nums"></ui-progress-value>
        <ui-progress-track class="h-2 w-full overflow-hidden rounded-full bg-muted">
          <ui-progress-indicator class="h-full bg-primary transition-[width]"></ui-progress-indicator>
        </ui-progress-track>
      </ui-progress>
    </div>
  `
}
