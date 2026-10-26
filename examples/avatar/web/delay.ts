import "@ui-sdk/web/avatar"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-start gap-4 text-foreground">
      <div class="flex flex-wrap items-center gap-6 text-sm text-muted-foreground"></div>
      <button type="button" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklab,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px aria-pressed:ring-1 aria-pressed:ring-ring motion-reduce:transition-none">Replay</button>
    </div>
  `
  const avatars = root.querySelector(":scope > div > div")!
  const show = () => {
    avatars.innerHTML = `
      <div class="flex items-center gap-2">
        <ui-avatar class="relative flex size-8 shrink-0 rounded-full select-none after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten bg-muted/50">
          <ui-avatar-fallback class="flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground"><span aria-hidden="true">AT</span><span class="sr-only">Alan Turing</span></ui-avatar-fallback>
        </ui-avatar>
        At once
      </div>
      <div class="flex items-center gap-2">
        <ui-avatar class="relative flex size-8 shrink-0 rounded-full select-none after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken dark:after:mix-blend-lighten bg-muted/50">
          <ui-avatar-fallback delay="600" class="flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground"><span aria-hidden="true">MH</span><span class="sr-only">Margaret Hamilton</span></ui-avatar-fallback>
        </ui-avatar>
        After 600 ms
      </div>
    `
  }
  show()
  root.querySelector("button")!.addEventListener("click", show)
}
