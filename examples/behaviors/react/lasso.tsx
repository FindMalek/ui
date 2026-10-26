import * as React from "react"
import {
  createChange,
  createLasso,
  definePrimitive,
  live,
  type ChangeDetails,
  type LassoDraft,
} from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type ShapesState = { selected: string[]; lasso: LassoDraft | null }

type ShapesOptions = {
  onSelectedChange?: (selected: string[], details: ChangeDetails<"lasso">) => void
}

const shapes = definePrimitive({
  name: "shapes",
  options: { onSelectedChange: "callback" },
  state: (_options: ShapesOptions): ShapesState => ({ selected: [], lasso: null }),
  live: ["lasso"],
  api: (context) => {
    const change = createChange(context)
    return {
      lasso: createLasso<ShapesState>(context, {
        slot: "shape",
        draft: "lasso",
        selected: () => context.store.get().selected,
        set: (keys, details) => change("selected", keys, details),
      }),
    }
  },
  slots: (slot) => ({
    root: slot({
      attrs: () => ({ style: "position:relative;touch-action:none;user-select:none" }),
      on: { pointerdown: (event, { el, api }) => event.target === el && api.lasso.pointerdown(event, el!) },
    }),
    shape: slot<{ value: string }>({
      props: { value: "string" },
      attrs: (state, { key }) => ({ "data-selected": state.selected.includes(key) ? "" : undefined }),
      live: live<ShapesState, any, { value: string }>((state, { key, api }) => ({
        "data-lassoed": api.lasso.touches(state, key) ? "" : undefined,
      })),
    }),
    lasso: slot({
      attrs: () => ({ "aria-hidden": "true" }),
      live: live<ShapesState, any, {}>((state, { api }) => ({ style: api.lasso.style(state) })),
    }),
  }),
})

const parts = createParts(shapes, { root: "div", shape: "div", lasso: "div" })

const Shapes = parts.Root

const ShapesItem = parts.Shape

const ShapesLasso = parts.Lasso

const items = [
  { key: "Circle", x: 24, y: 24, round: true },
  { key: "Square", x: 150, y: 40, round: false },
  { key: "Dot", x: 70, y: 130, round: true },
  { key: "Tile", x: 230, y: 120, round: false },
]

function Example() {
  const [selected, setSelected] = React.useState<string[]>([])
  return (
    <div className="flex flex-col gap-2">
      <Shapes
        aria-label="Shapes"
        onSelectedChange={setSelected}
        className="h-52 w-80 rounded-xl border border-border bg-muted/40"
      >
        {items.map((item) => (
          <ShapesItem
            key={item.key}
            value={item.key}
            style={{ left: item.x, top: item.y }}
            className={`pointer-events-none absolute size-14 border-2 border-border bg-background data-lassoed:border-foreground data-selected:border-foreground data-selected:bg-foreground/15 ${item.round ? "rounded-full" : "rounded-md"}`}
          />
        ))}
        <ShapesLasso className="rounded-sm border border-foreground bg-foreground/10" />
      </Shapes>
      <p className="text-xs text-muted-foreground">
        {selected.length ? `Selected: ${selected.join(", ")}` : "Drag on the surface to select."}
      </p>
    </div>
  )
}

export { Example, shapes, Shapes, ShapesItem, ShapesLasso, type ShapesOptions, type ShapesState }
