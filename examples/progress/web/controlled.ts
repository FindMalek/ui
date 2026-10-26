import "@ui-sdk/web/progress"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-xs flex-col gap-4 text-foreground">
      <ui-progress value="20" class="flex flex-wrap gap-3 text-foreground">
        <ui-progress-label class="text-sm font-medium">Uploading files</ui-progress-label>
        <ui-progress-value class="ms-auto text-sm text-muted-foreground tabular-nums"></ui-progress-value>
        <ui-progress-track class="relative flex h-2 w-full items-center overflow-x-hidden rounded-2xl bg-muted">
          <ui-progress-indicator class="h-full bg-primary transition-[width] motion-reduce:transition-none"></ui-progress-indicator>
        </ui-progress-track>
      </ui-progress>
      <div class="flex gap-2">
        <button type="button" aria-disabled="false" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklab,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px aria-disabled:pointer-events-none aria-disabled:opacity-50 motion-reduce:transition-none">Upload more</button>
        <button type="button" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklab,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px aria-disabled:pointer-events-none aria-disabled:opacity-50 motion-reduce:transition-none">Reset</button>
      </div>
    </div>
  `
  const progress = root.querySelector("ui-progress")!
  const [more, reset] = root.querySelectorAll("button")
  const set = (value: number) => {
    progress.setAttribute("value", String(value))
    more.setAttribute("aria-disabled", String(value >= 100))
  }
  more.addEventListener("click", () => set(Math.min(100, Number(progress.getAttribute("value")) + 20)))
  reset.addEventListener("click", () => set(0))
}
