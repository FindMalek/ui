import "@ui-sdk/web/tooltip"

function mount(root: HTMLElement) {
  const id = `tooltip-${crypto.randomUUID()}`
  root.innerHTML = `
    <div class="flex w-full max-w-sm flex-col items-center gap-3">
      <ui-tooltip container="#${id}-container">
        <ui-tooltip-trigger><button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none">Show in the box</button></ui-tooltip-trigger>
        <ui-tooltip-content class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none">This tooltip is in the box below, in the DOM.</ui-tooltip-content>
      </ui-tooltip>
      <div class="flex h-24 w-full items-end justify-center rounded-2xl border border-dashed border-border p-3 text-xs text-muted-foreground">Container<div id="${id}-container"></div></div>
    </div>
  `
}

export { mount }
