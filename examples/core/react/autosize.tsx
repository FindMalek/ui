import * as React from "react"
import { definePrimitive } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

const autosize = definePrimitive({
  name: "autosize",
  state: () => ({}),
  api: () => ({}),
  slots: (slot) => ({
    root: slot({
      attrs: () => ({ rows: "1" }),
      bind: (el) => {
        const fit = () => {
          el.style.height = "auto"
          el.style.height = `${el.scrollHeight}px`
        }
        fit()
        el.addEventListener("input", fit)
        return () => el.removeEventListener("input", fit)
      },
    }),
  }),
})

const parts = createParts(autosize, { root: "textarea" })

const Autosize = parts.Root

function Example() {
  return (
    <Autosize
      aria-label="Message"
      placeholder="Write a message. Press Enter for a new line."
      className="w-72 resize-none overflow-hidden rounded-lg border border-border bg-transparent px-3 py-2 text-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    />
  )
}

export { autosize, Autosize, Example }
