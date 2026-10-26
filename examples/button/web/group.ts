import "@ui-sdk/web/button"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div role="group" aria-label="Message actions" class="inline-flex">
      <ui-button>
        <button class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-s-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:z-10 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">Archive</button>
      </ui-button>
      <ui-button>
        <button class="-ms-px inline-flex h-8 shrink-0 items-center justify-center gap-1.5 border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:z-10 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">Report</button>
      </ui-button>
      <ui-button>
        <button class="-ms-px inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-e-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:z-10 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">Snooze</button>
      </ui-button>
    </div>
  `
}
