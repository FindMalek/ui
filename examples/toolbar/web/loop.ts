import "@ui-sdk/web/toolbar"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-toolbar loop="false" aria-label="Pages" class="flex w-fit items-center gap-1 rounded-3xl border border-border p-1">
      ${["First", "Previous", "Next", "Last"]
        .map(
          (label) => `
            <ui-toolbar-button>
              <button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none">${label}</button>
            </ui-toolbar-button>
          `,
        )
        .join("")}
    </ui-toolbar>
  `
}

export { mount }
