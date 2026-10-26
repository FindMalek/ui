import "@ui-sdk/web/toggle"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-toggle-group default-value="all" aria-label="Calls" class="flex w-fit items-center gap-1">
      <ui-toggle value="all">
        <button class="inline-flex h-8 min-w-8 shrink-0 items-center justify-center rounded-2xl border border-input bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50">All</button>
      </ui-toggle>
      <ui-toggle value="missed">
        <button class="inline-flex h-8 min-w-8 shrink-0 items-center justify-center rounded-2xl border border-input bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50">Missed</button>
      </ui-toggle>
    </ui-toggle-group>
  `
}
