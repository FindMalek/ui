import "@ui-sdk/web/dialog"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-dialog>
      <ui-dialog-trigger><button type="submit" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 data-open:bg-muted">New article</button></ui-dialog-trigger>
      <ui-dialog-backdrop class="fixed inset-0 bg-black/30 transition-opacity duration-100 supports-backdrop-filter:backdrop-blur-sm data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none"></ui-dialog-backdrop>
      <ui-dialog-content class="fixed top-1/2 left-1/2 grid w-full max-w-[calc(100%-2rem)] -translate-1/2 gap-6 rounded-[min(var(--radius-4xl),24px)] border-0 bg-popover p-6 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 sm:max-w-md motion-reduce:transition-none">
        <div class="flex flex-col gap-1.5">
          <ui-dialog-title class="m-0 text-base leading-none font-medium">New article</ui-dialog-title>
          <ui-dialog-description class="m-0 text-sm text-muted-foreground">Save it as a draft or publish it now.</ui-dialog-description>
        </div>
        <form method="dialog" class="grid gap-6">
          <label class="grid gap-2 text-sm font-medium">
            Title
            <input required value="Hello, world" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base font-normal text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:opacity-50 md:text-sm" />
          </label>
          <div class="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
            <button type="submit" value="draft" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">Save draft</button>
            <button type="submit" value="published" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-colors hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">Publish</button>
          </div>
        </form>
      </ui-dialog-content>
    </ui-dialog>
    <output class="mt-3 block min-h-5 text-sm text-muted-foreground"></output>
  `
  const output = root.querySelector("output")!
  root.querySelector("ui-dialog")!.addEventListener("openchange", (event) => {
    const { value, reason, returnValue } = (
      event as CustomEvent<{ value: boolean; reason: string; returnValue?: string }>
    ).detail
    if (!value) output.textContent = returnValue ? `Saved as ${returnValue}` : `Closed with ${reason}`
  })
}

export { mount }
