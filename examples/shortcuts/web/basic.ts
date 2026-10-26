import { ariaKeyshortcuts, formatShortcut, registerShortcut } from "@ui-sdk/web"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-center gap-3">
      <div class="flex gap-2">
        <button type="button" data-action="new" aria-keyshortcuts="N" class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding ps-3 pe-1.5 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px dark:bg-transparent dark:hover:bg-input/30">New note <kbd aria-hidden="true" class="inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-muted px-1 font-sans text-xs font-medium text-muted-foreground">N</kbd></button>
        <button type="button" data-action="save" aria-keyshortcuts="${ariaKeyshortcuts("mod+s")}" class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding ps-3 pe-1.5 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px dark:bg-transparent dark:hover:bg-input/30">Save <kbd aria-hidden="true" class="inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-muted px-1 font-sans text-xs font-medium text-muted-foreground">${formatShortcut("mod+s")}</kbd></button>
      </div>
      <output class="text-sm text-muted-foreground">Press N or the keys to save.</output>
    </div>
  `
  const output = root.querySelector("output")!
  const actions = {
    new: () => (output.textContent = "Note created"),
    save: () => (output.textContent = "Saved"),
  }
  root.querySelector('[data-action="new"]')!.addEventListener("click", actions.new)
  root.querySelector('[data-action="save"]')!.addEventListener("click", actions.save)

  const offs = [
    registerShortcut("n", actions.new, { description: "New note" }),
    registerShortcut("mod+s", actions.save, { description: "Save" }),
  ]
  return () => offs.forEach((off) => off())
}
