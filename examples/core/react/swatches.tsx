import * as React from "react"
import { definePrimitive } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type SwatchesState = { color: string }

const swatches = definePrimitive({
  name: "swatches",
  state: (): SwatchesState => ({ color: "slate" }),
  api: (context) => ({
    choose: (color: string) => context.store.set({ color }),
  }),
  slots: (slot) => ({
    root: slot({ attrs: () => ({ role: "group" }) }),
    swatch: slot<{ value: string }>({
      props: { value: "string" },
      attrs: (state, part) => ({
        type: "button",
        "aria-label": part.props.value,
        "aria-pressed": String(state.color === part.key),
      }),
      press: ({ api, key }) => api.choose(key),
    }),
  }),
})

const parts = createParts(swatches, { root: "div", swatch: "button" })

const Swatches = parts.Root

const Swatch = parts.Swatch

const colors = { slate: "bg-slate-500", rose: "bg-rose-500", amber: "bg-amber-500", teal: "bg-teal-500" }

function Example() {
  return (
    <Swatches aria-label="Color" className="flex gap-2">
      {Object.entries(colors).map(([color, background]) => (
        <Swatch
          key={color}
          value={color}
          className={`size-8 rounded-full ${background} outline-none ring-offset-2 ring-offset-background focus-visible:ring-3 focus-visible:ring-ring/50 aria-pressed:ring-2 aria-pressed:ring-foreground`}
        />
      ))}
    </Swatches>
  )
}

export { Example, Swatch, swatches, Swatches, type SwatchesState }
