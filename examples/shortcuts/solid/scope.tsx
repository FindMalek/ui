import { shortcuts, useShortcut } from "@ui-sdk/solid/shortcuts"
import { createSignal } from "solid-js"

export function Example() {
  const [text, setText] = createSignal("")
  const [status, setStatus] = createSignal("Focus the note to turn on its shortcuts.")

  useShortcut(
    "mod+enter",
    () => {
      setStatus(`Characters saved: ${text().trim().length}`)
    },
    {
      scope: "note",
      when: () => text().trim() !== "",
      description: "Save the note",
    },
  )
  useShortcut(
    "escape",
    () => {
      setText("")
      setStatus("Cleared")
    },
    { scope: "note", allowInInput: true, description: "Clear the note" },
  )

  return (
    <div class="flex flex-col items-center gap-3">
      <textarea
        aria-label="Note"
        placeholder="Write a note…"
        class="field-sizing-content min-h-16 w-72 min-w-0 resize-none rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm"
        value={text()}
        onInput={(event) => setText(event.currentTarget.value)}
        onFocus={() => shortcuts.setScope("note", true)}
        onBlur={() => shortcuts.setScope("note", false)}
      />
      <output class="text-sm text-muted-foreground">{status()}</output>
    </div>
  )
}
