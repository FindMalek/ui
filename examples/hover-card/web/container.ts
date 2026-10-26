import "@ui-sdk/web/hover-card"

function mount(root: HTMLElement) {
  const id = `hover-card-${crypto.randomUUID()}`
  root.innerHTML = `
    <div class="flex w-full max-w-sm flex-col items-center gap-3">
      <ui-hover-card container="#${id}">
        <ui-hover-card-trigger><a href="https://example.com/box" class="rounded-sm text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 data-open:underline">Show in the box</a></ui-hover-card-trigger>
        <ui-hover-card-content class="flex w-56 origin-(--transform-origin) flex-col gap-1 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
          <p class="font-medium">Portaled</p>
          <p class="text-muted-foreground">This card is in the box below, in the DOM.</p>
        </ui-hover-card-content>
      </ui-hover-card>
      <div class="flex h-24 w-full items-end justify-center rounded-2xl border border-dashed border-border p-3 text-xs text-muted-foreground">Container<div id="${id}"></div></div>
    </div>
  `
}

export { mount }
