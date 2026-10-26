import "@ui-sdk/web/dialog"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-dialog>
      <ui-dialog-trigger><button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 data-open:bg-muted">Slide in</button></ui-dialog-trigger>
      <ui-dialog-backdrop class="fixed inset-0 bg-black/30 transition-opacity duration-300 supports-backdrop-filter:backdrop-blur-sm data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none"></ui-dialog-backdrop>
      <ui-dialog-content keep-mounted class="fixed top-1/2 left-1/2 grid w-full max-w-[calc(100%-2rem)] -translate-1/2 gap-6 rounded-[min(var(--radius-4xl),24px)] border-0 bg-popover p-6 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,translate] duration-300 ease-out data-starting-style:translate-y-[-40%] data-starting-style:opacity-0 data-ending-style:translate-y-[-40%] data-ending-style:opacity-0 sm:max-w-md motion-reduce:transition-none">
        <div class="flex flex-col gap-1.5">
          <ui-dialog-title class="m-0 text-base leading-none font-medium">Slide and fade</ui-dialog-title>
          <ui-dialog-description class="m-0 text-sm text-muted-foreground">300ms in and out. Focus returns as soon as it starts closing.</ui-dialog-description>
        </div>
        <div class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <ui-dialog-close><button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-colors hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">Close</button></ui-dialog-close>
        </div>
      </ui-dialog-content>
    </ui-dialog>
    <output class="mt-3 block min-h-5 text-sm text-muted-foreground">Closed</output>
  `
  const output = root.querySelector("output")!
  const dialog = root.querySelector("ui-dialog")!
  dialog.addEventListener("openchange", (event) => {
    output.textContent = event.detail.value ? "Opening" : "Closing"
  })
  dialog.addEventListener("openchangecomplete", (event) => {
    output.textContent = event.detail.value ? "Open" : "Closed"
  })
}

export { mount }
