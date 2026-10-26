import * as React from "react"
import { bindPanel, definePrimitive, hiddenAttrs } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type NotesState = {
  expanded: string[]
  exiting: string[]
  opening: "mount" | "instant" | "animate"
  settled: string
}

const without = (list: string[], value: string) => list.filter((other) => other !== value)

const notes = definePrimitive({
  name: "notes",
  state: (): NotesState => ({ expanded: ["3.0"], exiting: [], opening: "mount", settled: "" }),
  api: (context) => {
    const { store } = context
    return {
      toggle(value: string) {
        const { expanded, exiting } = store.get()
        if (expanded.includes(value))
          store.set({ opening: "animate", expanded: without(expanded, value), exiting: [...exiting, value] })
        else
          store.set({ opening: "animate", expanded: [...expanded, value], exiting: without(exiting, value) })
      },
      show(values: string[]) {
        const { expanded } = store.get()
        store.set({
          opening: "instant",
          expanded: [...expanded, ...values.filter((v) => !expanded.includes(v))],
        })
      },
    }
  },
  slots: (slot) => ({
    root: slot<{}, { settled: string }>({ state: (state) => ({ settled: state.settled }) }),
    trigger: slot<{ value: string }>({
      props: { value: "string" },
      attrs: (state, { id, key }) => ({
        type: "button",
        "aria-expanded": String(state.expanded.includes(key)),
        "aria-controls": `${id}-${key}`,
      }),
      press: ({ api, key }) => api.toggle(key),
    }),
    panel: slot<{ value: string }>({
      props: { value: "string" },
      attrs: (state, { id, key }) => ({
        id: `${id}-${key}`,
        role: "region",
        ...hiddenAttrs(state.expanded.includes(key) || state.exiting.includes(key), true),
      }),
      bind: (el, { api, key, store }) =>
        bindPanel(el, {
          size: (el, height) => el.style.setProperty("--panel-height", height),
          isOpen: () => store.get().expanded.includes(key),
          isExiting: () => store.get().exiting.includes(key),
          isFindable: () => true,
          opening: () => store.get().opening,
          reveal: () => api.show([key]),
          trigger: () => el.previousElementSibling as HTMLElement | undefined,
          subscribe: store.subscribe,
          settled: (open) => store.set({ settled: `${key} ${open ? "opened" : "closed"}` }),
          exited: () => store.set({ exiting: without(store.get().exiting, key) }),
        }),
    }),
    expand: slot<{ value: string }>({
      props: { value: "string" },
      attrs: () => ({ type: "button" }),
      press: ({ api, key }) => api.show(key.split(" ")),
    }),
  }),
})

const parts = createParts(notes, { root: "div", trigger: "button", panel: "div", expand: "button" })

const Notes = parts.Root

const NotesTrigger = parts.Trigger

const NotesPanel = parts.Panel

const NotesExpand = parts.Expand

const releases = [
  { value: "3.0", notes: "Dark mode follows your system, and the sidebar remembers its width." },
  { value: "2.4", notes: "Drafts save while you're offline and sync once you're back." },
  { value: "2.3", notes: "Export a board as a PDF, with one page per column." },
]

function Example() {
  return (
    <Notes className="flex min-h-80 w-72 flex-col gap-2 text-sm">
      {({ settled }) => (
        <>
          <div className="flex flex-col divide-y divide-border rounded-xl border border-border">
            {releases.map((release) => (
              <div key={release.value}>
                <NotesTrigger
                  value={release.value}
                  className="w-full px-3 py-2 text-left font-medium outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  Version {release.value}
                </NotesTrigger>
                <NotesPanel
                  value={release.value}
                  className="h-(--panel-height) overflow-hidden transition-[height] duration-200 ease-out data-ending-style:h-0 data-starting-style:h-0 motion-reduce:transition-none"
                >
                  <p className="px-3 pb-3 text-muted-foreground">{release.notes}</p>
                </NotesPanel>
              </div>
            ))}
          </div>
          <div className="mt-auto flex items-center justify-between text-xs">
            <NotesExpand
              value={releases.map((release) => release.value).join(" ")}
              className="rounded-md border border-border px-2 py-1"
            >
              Open all
            </NotesExpand>
            <span data-settled className="text-muted-foreground">
              {settled}
            </span>
          </div>
        </>
      )}
    </Notes>
  )
}

export { Example, notes, Notes, NotesExpand, NotesPanel, NotesTrigger, type NotesState }
