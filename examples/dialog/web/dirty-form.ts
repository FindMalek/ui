import "@ui-sdk/web/dialog"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-dialog>
      <ui-dialog-trigger><button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 data-open:bg-muted">Write a post</button></ui-dialog-trigger>
      <ui-dialog-backdrop class="fixed inset-0 bg-black/30 transition-opacity duration-100 supports-backdrop-filter:backdrop-blur-sm data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none"></ui-dialog-backdrop>
      <ui-dialog-content class="fixed top-1/2 left-1/2 grid w-full max-w-[calc(100%-2rem)] -translate-1/2 gap-6 rounded-[min(var(--radius-4xl),24px)] border-0 bg-popover p-6 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 sm:max-w-md motion-reduce:transition-none">
        <div class="flex flex-col gap-1.5">
          <ui-dialog-title class="m-0 text-base leading-none font-medium">New post</ui-dialog-title>
          <ui-dialog-description class="m-0 text-sm text-muted-foreground">Type something, then press Escape or click outside.</ui-dialog-description>
        </div>
        <textarea aria-label="Post" class="h-auto min-h-28 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base font-normal text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:opacity-50 md:text-sm resize-none"></textarea>
        <div role="alert" hidden class="flex flex-wrap items-center gap-2 rounded-2xl bg-muted p-3">
          Discard your changes?
          <div class="ms-auto flex gap-2">
            <button type="button" data-keep class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">Keep editing</button>
            <button type="button" data-discard class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-colors hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">Discard</button>
          </div>
        </div>
        <div data-footer class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          <ui-dialog-close value="post"><button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-colors hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">Post</button></ui-dialog-close>
        </div>
      </ui-dialog-content>
    </ui-dialog>
  `
  const dialog = root.querySelector("ui-dialog")!
  const textarea = root.querySelector("textarea")!
  const alert = root.querySelector<HTMLElement>('[role="alert"]')!
  const footer = root.querySelector<HTMLElement>("[data-footer]")!
  const ask = (asking: boolean) => {
    alert.hidden = !asking
    footer.hidden = asking
  }
  textarea.addEventListener("input", () => {
    if (textarea.value) dialog.setAttribute("dismissible", "false")
    else dialog.removeAttribute("dismissible")
  })
  dialog.addEventListener("dismissattempt", () => ask(true))
  root.querySelector("[data-keep]")!.addEventListener("click", () => {
    ask(false)
    textarea.focus()
  })
  root.querySelector("[data-discard]")!.addEventListener("click", () => (dialog.open = false))
  dialog.addEventListener("openchange", (event) => {
    if (event.detail.value) return
    ask(false)
    textarea.value = ""
    dialog.removeAttribute("dismissible")
  })
}

export { mount }
