import "@ui-sdk/web/dialog"

const notes = {
  true: "The rest of the page is inert and doesn't scroll.",
  "trap-focus": "Tab stays inside, and the page still scrolls and takes clicks.",
  false: "The page stays usable. Tab leaves the notes, and Escape closes them while focus is inside.",
}

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="grid gap-4">
      <fieldset class="m-0 flex flex-wrap gap-4 border-0 p-0 text-sm">
        <legend class="sr-only">modal</legend>
        <label class="flex items-center gap-2"><input type="radio" name="modal" value="true" class="m-0 size-4 accent-primary" />Modal</label>
        <label class="flex items-center gap-2"><input type="radio" name="modal" value="trap-focus" class="m-0 size-4 accent-primary" />Trap focus</label>
        <label class="flex items-center gap-2"><input type="radio" name="modal" value="false" checked class="m-0 size-4 accent-primary" />Non-modal</label>
        <label class="flex items-center gap-2"><input type="checkbox" data-outside class="m-0 size-4 accent-primary" />closeOnOutsidePress</label>
      </fieldset>
      <ui-dialog modal="false" close-on-outside-press="false">
        <ui-dialog-trigger><button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 justify-self-start data-open:bg-muted">Open notes</button></ui-dialog-trigger>
        <ui-dialog-content class="fixed end-4 bottom-4 grid w-80 max-w-[calc(100%-2rem)] gap-6 rounded-[min(var(--radius-4xl),24px)] border-0 bg-popover p-6 text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none transition-[opacity,translate] duration-100 data-starting-style:translate-y-2 data-starting-style:opacity-0 data-ending-style:translate-y-2 data-ending-style:opacity-0 motion-reduce:transition-none">
          <div class="flex flex-col gap-1.5">
            <ui-dialog-title class="m-0 text-base leading-none font-medium">Notes</ui-dialog-title>
            <ui-dialog-description class="m-0 text-sm text-muted-foreground">${notes.false}</ui-dialog-description>
          </div>
          <textarea aria-label="Notes" class="h-auto min-h-16 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base font-normal text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:opacity-50 md:text-sm resize-none">Call the printer about the proofs.</textarea>
          <ui-dialog-close><button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 justify-self-end">Done</button></ui-dialog-close>
        </ui-dialog-content>
      </ui-dialog>
    </div>
  `
  const dialog = root.querySelector("ui-dialog")!
  const backdrop = Object.assign(document.createElement("ui-dialog-backdrop"), {
    className:
      "fixed inset-0 bg-black/30 transition-opacity duration-100 supports-backdrop-filter:backdrop-blur-sm data-starting-style:opacity-0 data-ending-style:opacity-0 motion-reduce:transition-none",
  })
  const description = root.querySelector("ui-dialog-description")!
  root.querySelectorAll<HTMLInputElement>('input[name="modal"]').forEach((input) =>
    input.addEventListener("change", () => {
      dialog.setAttribute("modal", input.value)
      if (input.value === "true") root.querySelector("ui-dialog-trigger")!.after(backdrop)
      else backdrop.remove()
      description.textContent = notes[input.value as keyof typeof notes]
    }),
  )
  root
    .querySelector<HTMLInputElement>("[data-outside]")!
    .addEventListener("change", (event) =>
      dialog.setAttribute("close-on-outside-press", String((event.target as HTMLInputElement).checked)),
    )
}

export { mount }
