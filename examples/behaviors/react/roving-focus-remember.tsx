import * as React from "react"
import { createRovingFocus, definePrimitive, selects } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type EditorState = { focused: string | null }

const shortcuts: Record<string, string> = { b: "Bold", i: "Italic", u: "Underline" }

const editor = definePrimitive({
  name: "editor",
  state: (): EditorState => ({ focused: null }),
  api: (context) => ({
    roving: createRovingFocus<EditorState, { value: string }>(context, {
      slot: "button",
      key: "focused",
      orientation: () => "horizontal",
    }),
  }),
  slots: (slot) => ({
    root: slot({}),
    toolbar: slot({ attrs: () => ({ role: "toolbar" }) }),
    button: slot<{ value: string }>({
      props: { value: "string" },
      selects: selects({ focused: ({ key }) => [key, null] }),
      attrs: (state, part) => ({ type: "button", tabindex: part.api.roving.tabIndex(state, part) }),
      on: { keydown: (event, { el, api }) => api.roving.keydown(event, el!) },
      bind: (el, part) => part.api.roving.bind(el, part),
    }),
    field: slot({
      on: {
        keydown: (event, { api }) => {
          const button = shortcuts[event.key.toLowerCase()]
          if (!button || !(event.ctrlKey || event.metaKey)) return
          event.preventDefault()
          api.roving.remember(button)
        },
      },
    }),
  }),
})

const parts = createParts(editor, { root: "div", toolbar: "div", button: "button", field: "textarea" })

const Editor = parts.Root

const EditorToolbar = parts.Toolbar

const EditorButton = parts.Button

const EditorField = parts.Field

function Example() {
  return (
    <Editor className="flex w-80 flex-col gap-2 text-sm">
      <EditorToolbar aria-label="Format" className="flex gap-1 rounded-lg border border-border p-1">
        {Object.values(shortcuts).map((label) => (
          <EditorButton
            key={label}
            value={label}
            className="rounded-md px-3 py-1.5 outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            {label}
          </EditorButton>
        ))}
      </EditorToolbar>
      <EditorField
        aria-label="Notes"
        rows={3}
        defaultValue="Press Control or Command with U, then Shift+Tab."
        className="resize-none rounded-lg border border-border bg-transparent p-2 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      />
    </Editor>
  )
}

export { Editor, EditorButton, EditorField, type EditorState, EditorToolbar, editor, Example }
