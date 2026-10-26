import "@ui-sdk/web/popover"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full flex-col items-center gap-4">
      <ui-popover container="#popover-container">
        <ui-popover-trigger><button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Open in the box</button></ui-popover-trigger>
        <ui-popover-content class="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
          <div class="flex flex-col gap-1">
            <ui-popover-title class="text-base font-medium">Portaled</ui-popover-title>
            <ui-popover-description class="text-sm text-muted-foreground">This popover is in the box below, in the DOM.</ui-popover-description>
          </div>
        </ui-popover-content>
      </ui-popover>
      <div class="flex h-24 w-full max-w-sm items-end justify-center rounded-3xl border border-dashed border-border p-3 text-sm text-muted-foreground">
        Container
        <div id="popover-container"></div>
      </div>
    </div>
  `
}

export { mount }
