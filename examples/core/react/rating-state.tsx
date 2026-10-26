import * as React from "react"
import { createChange, definePrimitive, type ChangeDetails } from "@ui-sdk/core"
import { usePrimitive } from "@ui-sdk/react/primitive"

type RatingOptions = {
  value?: number
  defaultValue?: number
  onValueChange?: (value: number, details: ChangeDetails<"item-press" | "list-navigation">) => void
}

const rating = definePrimitive({
  name: "rating",
  options: { value: "number", defaultValue: "number", onValueChange: "callback" },
  controlled: ["value"],
  state: (options: RatingOptions) => ({ value: options.value ?? options.defaultValue ?? 0 }),
  sync: (options) => (options.value === undefined ? {} : { value: options.value }),
  api: (context) => {
    const change = createChange(context)

    return {
      rate: (value: number, event?: Event) => change("value", value, { reason: "item-press", event }),
    }
  },
  slots: (slot) => ({
    root: slot({
      attrs: () => ({ role: "radiogroup" }),
    }),
  }),
})

function Example() {
  const handle = usePrimitive(rating, {})
  const state = React.useSyncExternalStore(
    handle.instance.subscribe,
    handle.instance.get,
    handle.instance.get,
  )

  return (
    <div className="flex flex-col items-center gap-4 py-4">
      <div className="flex flex-col items-center gap-1">
        <output data-value aria-label="Rating" className="text-5xl font-medium tracking-tight tabular-nums">
          {state.value}
        </output>
        <span className="text-xs text-muted-foreground">Rating</span>
      </div>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={(event) => handle.api.rate(3, event.nativeEvent)}
          className="inline-flex h-8 items-center justify-center rounded-full border border-border px-3 text-xs font-medium outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          Set to 3
        </button>
        <button
          type="button"
          onClick={(event) => handle.api.rate(0, event.nativeEvent)}
          className="inline-flex h-8 items-center justify-center rounded-full border border-border px-3 text-xs font-medium outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export { Example, rating }
