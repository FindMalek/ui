import "@ui-sdk/web/dialog"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <label class="flex items-center gap-2 text-sm"><input type="checkbox" class="m-0 size-4 accent-primary" />open</label>
    <ui-dialog>
      <ui-dialog-trigger><button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 mt-3">Open</button></ui-dialog-trigger>
      <ui-dialog-backdrop class="fixed inset-0 bg-black/30 transition-opacity duration-100 supports-backdrop-filter:backdrop-blur-sm data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none"></ui-dialog-backdrop>
      <ui-dialog-content class="fixed top-1/2 left-1/2 grid w-full max-w-[calc(100%-2rem)] -translate-1/2 gap-6 rounded-[min(var(--radius-4xl),24px)] border-0 bg-popover p-6 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 sm:max-w-md motion-reduce:transition-none">
        <div class="flex flex-col gap-1.5">
          <ui-dialog-title class="m-0 text-base leading-none font-medium">Controlled</ui-dialog-title>
          <ui-dialog-description class="m-0 text-sm text-muted-foreground">Close it any way you like, and watch the log.</ui-dialog-description>
        </div>
        <div class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <ui-dialog-close><button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-colors hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">Close</button></ui-dialog-close>
        </div>
      </ui-dialog-content>
    </ui-dialog>
    <ol class="m-0 mt-3 h-24 w-full max-w-xs list-none overflow-y-auto rounded-2xl bg-muted p-2 font-mono text-xs leading-5 text-muted-foreground"></ol>
  `
  const dialog = root.querySelector("ui-dialog")!
  const checkbox = root.querySelector<HTMLInputElement>('input[type="checkbox"]')!
  const log = root.querySelector("ol")!
  const write = (line: string) => {
    log.prepend(Object.assign(document.createElement("li"), { textContent: line }))
    while (log.children.length > 8) log.lastElementChild!.remove()
  }
  checkbox.addEventListener("change", () => (dialog.open = checkbox.checked))
  dialog.addEventListener("openchange", (event) => {
    const { value, reason } = (event as CustomEvent<{ value: boolean; reason: string }>).detail
    checkbox.checked = value
    write(`openchange(${value}, "${reason}")`)
  })
  dialog.addEventListener("openchangecomplete", (event) => write(`openchangecomplete(${event.detail.value})`))
}

export { mount }
