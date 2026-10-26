import * as React from "react"
import { definePrimitive, live, selects } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type SeatsState = { selected: string | null; hovered: string | null }

const seats = definePrimitive({
  name: "seats",
  state: (): SeatsState => ({ selected: null, hovered: null }),
  live: ["hovered"],
  api: (context) => ({
    choose: (seat: string) => context.store.set({ selected: seat }),
    hover: (seat: string | null) => context.store.set({ hovered: seat }),
  }),
  slots: (slot) => ({
    root: slot({ attrs: () => ({ role: "group" }) }),
    seat: slot<{ value: string }>({
      props: { value: "string" },
      selects: selects({ selected: ({ key }) => [key] }),
      attrs: (state, part) => ({
        type: "button",
        "aria-label": `Seat ${part.key}`,
        "aria-pressed": String(state.selected === part.key),
      }),
      live: live((state, part) => ({ "data-hovered": state.hovered === part.key ? "" : undefined })),
      press: ({ api, key }) => api.choose(key),
      on: {
        pointerenter: (_event, { api, key }) => api.hover(key),
        pointerleave: (_event, { api }) => api.hover(null),
      },
    }),
    label: slot<{}, { seat: string | null }>({
      state: (state) => ({ seat: state.hovered ?? state.selected }),
    }),
  }),
})

const parts = createParts(seats, { root: "div", seat: "button", label: "p" })

const Seats = parts.Root

const Seat = parts.Seat

const SeatsLabel = parts.Label

const rows = ["A", "B", "C", "D"]

function Example() {
  return (
    <Seats aria-label="Seats" className="flex flex-col items-center gap-3 text-sm">
      <div className="grid grid-cols-8 gap-1.5">
        {rows.flatMap((row) =>
          Array.from({ length: 8 }, (_, index) => `${row}${index + 1}`).map((value) => (
            <Seat
              key={value}
              value={value}
              className="size-6 rounded-md border border-border outline-none focus-visible:ring-3 focus-visible:ring-ring/50 data-hovered:bg-muted aria-pressed:border-foreground aria-pressed:bg-foreground"
            />
          )),
        )}
      </div>
      <SeatsLabel data-seat className="text-muted-foreground">
        {({ seat }) => (seat ? `Seat ${seat}` : "Choose a seat")}
      </SeatsLabel>
    </Seats>
  )
}

export { Example, Seat, seats, Seats, SeatsLabel, type SeatsState }
