import { useShortcut, useShortcutHint } from "@ui-sdk/react/shortcuts"
import * as React from "react"

export function Example() {
  const [status, setStatus] = React.useState("Press N or the keys to save.")
  const newNote = () => setStatus("Note created")
  const save = () => setStatus("Saved")

  useShortcut("n", newNote, { description: "New note" })
  useShortcut("mod+s", save, { description: "Save" })
  const saveHint = useShortcutHint("mod+s")

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex gap-2">
        <button
          type="button"
          className="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding ps-3 pe-1.5 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px dark:bg-transparent dark:hover:bg-input/30"
          onClick={newNote}
          aria-keyshortcuts="N"
        >
          New note
          <kbd
            aria-hidden="true"
            className="inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-muted px-1 font-sans text-xs font-medium text-muted-foreground"
          >
            N
          </kbd>
        </button>
        <button
          type="button"
          className="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding ps-3 pe-1.5 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px dark:bg-transparent dark:hover:bg-input/30"
          onClick={save}
          aria-keyshortcuts={saveHint.ariaKeyshortcuts}
        >
          Save
          <kbd
            aria-hidden="true"
            className="inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-muted px-1 font-sans text-xs font-medium text-muted-foreground"
          >
            {saveHint.text}
          </kbd>
        </button>
      </div>
      <output className="text-sm text-muted-foreground">{status}</output>
    </div>
  )
}
