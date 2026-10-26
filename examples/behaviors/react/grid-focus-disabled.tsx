import * as React from "react"
import { createGridFocus, definePrimitive, type GridCell } from "@ui-sdk/core"
import { createParts, usePart, type PartProps } from "@ui-sdk/react/primitive"

type TheaterState = { active: GridCell | null }

type TheaterOptions = {
  taken: string[]
}

const theater = definePrimitive({
  name: "theater",
  options: { taken: "list" },
  state: (_options: TheaterOptions): TheaterState => ({ active: null }),
  api: (context) => ({
    grid: createGridFocus<TheaterState>(context, {
      key: "active",
      rows: () => 3,
      cols: () => 6,
      disabled: (cell) => context.options().taken.includes(`${cell.row}:${cell.col}`),
    }),
  }),
  slots: (slot) => ({
    root: slot({ attrs: () => ({ role: "grid" }) }),
    row: slot<{ id: string }>({ props: { id: "string" }, attrs: () => ({ role: "row" }) }),
    seat: slot<{ id: string; row: number; col: number }>({
      props: { row: "number", col: "number" },
      attrs: (state, { props, api }) => ({
        role: "gridcell",
        tabindex: api.grid.tabIndex(state, props),
        "data-active": api.grid.isActive(state, props) ? "" : undefined,
      }),
      on: {
        keydown: (event, { api }) => api.grid.keydown(event),
        pointerdown: (event, { api, props }) => api.grid.focus(props, { reason: "item-press", event }),
      },
      bind: (el, { api, props }) => api.grid.bind(el, props),
    }),
  }),
})

const parts = createParts(theater, { root: "div", row: "div" })

const Theater = parts.Root

const TheaterRow = parts.Row

function TheaterSeat({ row, col, ...props }: { row: number; col: number } & PartProps<"div">) {
  return usePart(theater, "seat", { id: `${row}:${col}`, row, col }, props, "div")
}

const letters = "ABC"
const taken = ["0:1", "0:2", "1:3", "2:0", "2:4"]

function Example() {
  return (
    <Theater taken={taken} aria-label="Theater" className="flex flex-col gap-1.5">
      {[0, 1, 2].map((row) => (
        <TheaterRow key={row} id={String(row)} className="flex gap-1.5">
          {[0, 1, 2, 3, 4, 5].map((col) => {
            const isTaken = taken.includes(`${row}:${col}`)
            return (
              <TheaterSeat
                key={col}
                row={row}
                col={col}
                aria-label={`Seat ${letters[row]}${col + 1}${isTaken ? ", taken" : ""}`}
                aria-disabled={isTaken || undefined}
                className="grid size-9 place-items-center rounded-md border border-border text-xs outline-none aria-disabled:border-dashed aria-disabled:text-muted-foreground/50 data-active:bg-muted focus-visible:bg-primary focus-visible:text-primary-foreground"
              >
                {letters[row]}
                {col + 1}
              </TheaterSeat>
            )
          })}
        </TheaterRow>
      ))}
    </Theater>
  )
}

export { Example, theater, Theater, TheaterRow, TheaterSeat, type TheaterOptions, type TheaterState }
