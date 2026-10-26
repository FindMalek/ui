import "@ui-sdk/web/popover"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-popover>
      <ui-popover-trigger><button class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Add note</button></ui-popover-trigger>
      <ui-popover-content class="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
        <div class="flex flex-col gap-1">
          <ui-popover-title class="text-base font-medium">Note</ui-popover-title>
          <ui-popover-description class="text-sm text-muted-foreground">Type something, then press Escape or click outside.</ui-popover-description>
        </div>
        <textarea aria-label="Note" class="min-h-24 w-full min-w-0 resize-none rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base font-normal outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm motion-reduce:transition-none"></textarea>
<div class="flex min-h-24 flex-col justify-end">
        <div role="alert" hidden class="flex flex-wrap items-center gap-2 rounded-2xl bg-muted p-3">
          Discard your note?
          <div class="ms-auto flex gap-2">
            <button type="button" data-keep class="inline-flex cursor-default h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Keep editing</button>
            <button type="button" data-discard class="inline-flex cursor-default h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-foreground/40 focus-visible:ring-3 focus-visible:ring-foreground/20 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Discard</button>
          </div>
        </div>
        <button type="button" data-save class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 self-end rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">Save</button>
      </div>
</ui-popover-content>
    </ui-popover>
    <output class="mt-3 text-sm text-muted-foreground block min-h-5">No note yet</output>
  `
  const popover = root.querySelector("ui-popover")!
  const textarea = root.querySelector("textarea")!
  const alert = root.querySelector<HTMLElement>('[role="alert"]')!
  const save = root.querySelector<HTMLElement>("[data-save]")!
  const ask = (asking: boolean) => {
    alert.hidden = !asking
    save.hidden = asking
  }
  const update = () => {
    if (textarea.value) popover.setAttribute("dismissible", "false")
    else popover.removeAttribute("dismissible")
  }
  const clear = () => {
    textarea.value = ""
    update()
    popover.api.close()
  }
  textarea.addEventListener("input", update)
  popover.addEventListener("dismissattempt", () => ask(true))
  root.querySelector("[data-keep]")!.addEventListener("click", () => {
    ask(false)
    textarea.focus()
  })
  root.querySelector("[data-discard]")!.addEventListener("click", clear)
  save.addEventListener("click", () => {
    root.querySelector("output")!.textContent = "Note saved"
    clear()
  })
  popover.addEventListener("openchange", (event) => {
    if (!event.detail.value) ask(false)
  })
}

export { mount }
