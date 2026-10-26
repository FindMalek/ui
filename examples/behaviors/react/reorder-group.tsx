import * as React from "react"
import {
  createChange,
  createReorder,
  createRovingFocus,
  definePrimitive,
  type ReorderDraft,
} from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type BacklogState = {
  value: string[]
  selected: string[]
  focused: string | null
  moving: ReorderDraft | null
}

const backlog = definePrimitive({
  name: "backlog",
  state: (): BacklogState => ({
    value: ["Login page", "Search", "Dark mode", "Exports", "Billing", "Onboarding"],
    selected: [],
    focused: null,
    moving: null,
  }),
  api: (context) => {
    const { store } = context
    const change = createChange(context)
    return {
      roving: createRovingFocus<BacklogState, { value: string }>(context, { slot: "task", key: "focused" }),
      reorder: createReorder<BacklogState>(context, {
        slot: "task",
        key: "value",
        draft: "moving",
        set: (value, details) => change("value", value, details),
        group: (key) => {
          const { selected } = store.get()
          return selected.includes(key) ? selected : [key]
        },
      }),
      tick(key: string) {
        const { selected } = store.get()
        store.set({
          selected: selected.includes(key) ? selected.filter((other) => other !== key) : [...selected, key],
        })
      },
    }
  },
  slots: (slot) => ({
    root: slot<{}, { order: string[] }>({
      state: (state, { api }) => ({ order: api.reorder.order(state) }),
      attrs: () => ({ role: "list" }),
    }),
    task: slot<{ value: string }>({
      props: { value: "string" },
      attrs: (state, part) => ({
        role: "listitem",
        tabindex: part.api.roving.tabIndex(state, part),
        "data-moving": part.api.reorder.moving(state, part.key) ? "" : undefined,
        "data-dragging": part.api.reorder.dragging(state, part.key) ? "" : undefined,
        style: "touch-action:none;user-select:none",
      }),
      on: {
        keydown: (event, { el, api, key }) =>
          api.reorder.keydown(event, key) || api.roving.keydown(event, el!),
        pointerdown: (event, { api, key }) => api.reorder.pointerdown(event, key),
      },
      bind: (el, part) => {
        const cleanups = [part.api.roving.bind(el, part), part.api.reorder.bind(el, part)]
        return () => cleanups.forEach((cleanup) => cleanup())
      },
    }),
    tick: slot<{ value: string }>({
      props: { value: "string" },
      attrs: (state, part) => ({
        type: "button",
        role: "checkbox",
        "aria-checked": String(state.selected.includes(part.key)),
        "aria-label": `Select ${part.key}`,
        tabindex: "-1",
      }),
      on: {
        pointerdown: (event) => event.preventDefault(),
        click: (_event, { api, key }) => api.tick(key),
      },
    }),
  }),
})

const parts = createParts(backlog, { root: "div", task: "div", tick: "button" })

const Backlog = parts.Root

const BacklogTask = parts.Task

const BacklogTick = parts.Tick

function Example() {
  return (
    <Backlog aria-label="Backlog" className="flex w-60 flex-col gap-1">
      {({ order }) =>
        order.map((task) => (
          <BacklogTask
            key={task}
            value={task}
            className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-1.5 text-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50 data-moving:border-primary data-moving:bg-primary/10 data-dragging:shadow-md"
          >
            <BacklogTick
              value={task}
              className="grid size-4 place-items-center rounded border border-border text-[10px] aria-checked:border-primary aria-checked:bg-primary aria-checked:text-primary-foreground"
            />
            {task}
          </BacklogTask>
        ))
      }
    </Backlog>
  )
}

export { Backlog, backlog, type BacklogState, BacklogTask, BacklogTick, Example }
