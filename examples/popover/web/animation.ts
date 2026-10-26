import "@ui-sdk/web/popover"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-popover>
      <ui-popover-trigger><button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Animated</button></ui-popover-trigger>
      <ui-popover-content keep-mounted class="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale,translate] duration-300 ease-out data-starting-style:-translate-y-1 data-starting-style:scale-90 data-starting-style:opacity-0 data-ending-style:scale-90 data-ending-style:opacity-0 motion-reduce:transition-none">
        <div class="flex flex-col gap-1">
          <ui-popover-title class="text-base font-medium">Scale and fade</ui-popover-title>
          <ui-popover-description class="text-sm text-muted-foreground">300ms in and out, from the trigger.</ui-popover-description>
        </div>
      </ui-popover-content>
    </ui-popover>
    <output class="mt-3 text-sm text-muted-foreground block min-h-5">Closed</output>
  `
  const popover = root.querySelector("ui-popover")!
  const status = root.querySelector("output")!
  popover.addEventListener("openchange", (event) => {
    status.textContent = event.detail.value ? "Opening" : "Closing"
  })
  popover.addEventListener("openchangecomplete", (event) => {
    status.textContent = event.detail.value ? "Open" : "Closed"
  })
}

export { mount }
