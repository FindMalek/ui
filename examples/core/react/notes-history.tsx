import * as React from "react"
import { createHistory, definePrimitive, matchesShortcut } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type NotesState = { text: string; canUndo: boolean; canRedo: boolean }

const notes = definePrimitive({
  name: "notes",
  state: (): NotesState => ({ text: "", canUndo: false, canRedo: false }),
  api: (context) => {
    const { store } = context
    const history = createHistory("", { limit: 10, groupDelay: 800 })
    const show = (text: string | undefined) => {
      if (text !== undefined) store.set({ text })
      store.set({ canUndo: history.canUndo(), canRedo: history.canRedo() })
    }
    return {
      type(text: string) {
        history.record(text, { group: "typing" })
        show(text)
      },
      key(event: KeyboardEvent) {
        if (matchesShortcut(event, "mod+shift+z")) show(history.redo())
        else if (matchesShortcut(event, "mod+z")) show(history.undo())
        else return
        event.preventDefault()
      },
      seal: () => history.seal(),
      undo: () => show(history.undo()),
      redo: () => show(history.redo()),
      fix() {
        history.map((text) => text.replaceAll("teh", "the"))
        show(store.get().text.replaceAll("teh", "the"))
      },
      clear() {
        history.reset("")
        show("")
      },
    }
  },
  slots: (slot) => ({
    input: slot({
      attrs: (state) => ({ value: state.text }),
      on: {
        input: (event, { api }) => api.type((event.target as HTMLTextAreaElement).value),
        keydown: (event, { api }) => api.key(event),
        pointerup: (_event, { api }) => api.seal(),
      },
    }),
    undo: slot({
      attrs: (state) => ({ type: "button", disabled: state.canUndo ? undefined : "" }),
      press: ({ api }) => api.undo(),
    }),
    redo: slot({
      attrs: (state) => ({ type: "button", disabled: state.canRedo ? undefined : "" }),
      press: ({ api }) => api.redo(),
    }),
    fix: slot({ attrs: () => ({ type: "button" }), press: ({ api }) => api.fix() }),
    clear: slot({ attrs: () => ({ type: "button" }), press: ({ api }) => api.clear() }),
  }),
})

const parts = createParts(notes, {
  input: "textarea",
  undo: "button",
  redo: "button",
  fix: "button",
  clear: "button",
})

const button =
  "h-8 rounded-lg border border-border px-3 font-medium outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 disabled:opacity-50"

function Example() {
  return (
    <parts.Root>
      <div className="flex w-80 flex-col gap-3 text-sm">
        <parts.Input
          aria-label="Notes"
          rows={3}
          placeholder="Type a few words, pause, and type more. Try “teh”."
          className="resize-none rounded-lg border border-border bg-transparent px-3 py-2 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        />
        <div className="flex flex-wrap gap-2">
          <parts.Undo className={button}>Undo</parts.Undo>
          <parts.Redo className={button}>Redo</parts.Redo>
          <parts.Fix className={button}>Fix “teh”</parts.Fix>
          <parts.Clear className={button}>Clear</parts.Clear>
        </div>
      </div>
    </parts.Root>
  )
}

export { Example, notes, type NotesState }
