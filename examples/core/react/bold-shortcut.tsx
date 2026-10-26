import * as React from "react"
import { ariaKeyshortcuts, definePrimitive, formatShortcut, matchesShortcut } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type BoldState = { bold: boolean }

const shortcut = "mod+b"

const boldText = definePrimitive({
  name: "bold-text",
  state: (): BoldState => ({ bold: false }),
  api: (context) => ({
    toggle: () => context.store.set({ bold: !context.store.get().bold }),
  }),
  slots: (slot) => ({
    root: slot({
      on: {
        keydown: (event, { api }) => {
          if (!matchesShortcut(event, shortcut)) return
          event.preventDefault()
          api.toggle()
        },
      },
    }),
    toggle: slot({
      attrs: (state) => ({ type: "button", "aria-pressed": String(state.bold) }),
      press: ({ api }) => api.toggle(),
      bind: (el) => el.setAttribute("aria-keyshortcuts", ariaKeyshortcuts(shortcut)),
    }),
    keys: slot({
      attrs: () => ({ "aria-hidden": "true" }),
      bind: (el) => {
        el.textContent = formatShortcut(shortcut)
      },
    }),
    text: slot<{}, BoldState>({ state: (state) => ({ bold: state.bold }) }),
  }),
})

const parts = createParts(boldText, { root: "div", toggle: "button", keys: "kbd", text: "textarea" })

function Example() {
  return (
    <parts.Root className="flex w-72 flex-col gap-2 text-sm">
      <parts.Toggle className="flex h-8 w-fit items-center gap-2 rounded-lg border border-border px-3 font-medium outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 aria-pressed:bg-foreground aria-pressed:text-background">
        Bold
        <parts.Keys className="font-sans text-xs opacity-70" />
      </parts.Toggle>
      <parts.Text
        aria-label="Note"
        rows={2}
        defaultValue="Press the shortcut while typing."
        className={({ bold }) =>
          `resize-none rounded-lg border border-border bg-transparent px-3 py-2 outline-none focus-visible:ring-3 focus-visible:ring-ring/50 ${bold ? "font-bold" : ""}`
        }
      />
    </parts.Root>
  )
}

export { boldText, Example, type BoldState }
