import { registerShortcut, shortcuts } from "@ui-sdk/web"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-center gap-3">
      <textarea aria-label="Note" placeholder="Write a note…" class="field-sizing-content min-h-16 w-72 min-w-0 resize-none rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm"></textarea>
      <output class="text-sm text-muted-foreground">Focus the note to turn on its shortcuts.</output>
    </div>
  `
  const textarea = root.querySelector("textarea")!
  const output = root.querySelector("output")!
  textarea.addEventListener("focus", () => shortcuts.setScope("note", true))
  textarea.addEventListener("blur", () => shortcuts.setScope("note", false))

  const offs = [
    registerShortcut(
      "mod+enter",
      () => (output.textContent = `Characters saved: ${textarea.value.trim().length}`),
      {
        scope: "note",
        when: () => textarea.value.trim() !== "",
        description: "Save the note",
      },
    ),
    registerShortcut(
      "escape",
      () => {
        textarea.value = ""
        output.textContent = "Cleared"
      },
      { scope: "note", allowInInput: true, description: "Clear the note" },
    ),
  ]
  return () => {
    offs.forEach((off) => off())
    shortcuts.setScope("note", false)
  }
}
