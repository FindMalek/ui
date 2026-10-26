import * as React from "react"
import {
  createChange,
  createReorder,
  createRovingFocus,
  definePrimitive,
  type ChangeDetails,
  type ReorderDraft,
  type ReorderReason,
} from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type RankingState = { value: string[]; focused: string | null; moving: ReorderDraft | null }

type RankingOptions = {
  defaultValue: string[]
  onValueChange?: (value: string[], details: ChangeDetails<ReorderReason>) => void
}

const ranking = definePrimitive({
  name: "ranking",
  options: { defaultValue: "list", onValueChange: "callback" },
  state: (options: RankingOptions): RankingState => ({
    value: options.defaultValue,
    focused: null,
    moving: null,
  }),
  api: (context) => {
    const change = createChange(context)
    return {
      roving: createRovingFocus<RankingState, { value: string }>(context, { slot: "item", key: "focused" }),
      reorder: createReorder<RankingState>(context, {
        slot: "item",
        key: "value",
        draft: "moving",
        set: (value, details) => change("value", value, details),
      }),
    }
  },
  slots: (slot) => ({
    root: slot<{}, { order: string[] }>({
      state: (state, { api }) => ({ order: api.reorder.order(state) }),
      attrs: () => ({ role: "listbox", "aria-roledescription": "sortable list" }),
    }),
    item: slot<{ value: string }>({
      props: { value: "string" },
      attrs: (state, part) => ({
        role: "option",
        "aria-roledescription": "sortable item",
        "aria-selected": String(state.moving?.key === part.key),
        tabindex: part.api.roving.tabIndex(state, part),
        "data-grabbed": state.moving?.key === part.key ? "" : undefined,
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
  }),
})

const parts = createParts(ranking, { root: "div", item: "div" })

const Ranking = parts.Root

const RankingItem = parts.Item

function Example() {
  return (
    <Ranking
      aria-label="Favorite seasons"
      defaultValue={["Spring", "Summer", "Autumn", "Winter"]}
      className="flex w-56 flex-col gap-1.5"
    >
      {({ order }) =>
        order.map((season, index) => (
          <RankingItem
            key={season}
            value={season}
            className="flex items-center gap-3 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50 data-grabbed:relative data-grabbed:z-10 data-grabbed:translate-x-(--drag-x) data-grabbed:translate-y-(--drag-y) data-grabbed:shadow-md"
          >
            <span className="text-muted-foreground tabular-nums">{index + 1}</span>
            {season}
          </RankingItem>
        ))
      }
    </Ranking>
  )
}

export { Example, ranking, Ranking, RankingItem, type RankingOptions, type RankingState }
