import * as React from "react"
import { createChange, definePrimitive, type ChangeDetails } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type ConfirmButtonOptions = {
  onConfirm?: () => void
  onArmedChange?: (armed: boolean, details: ChangeDetails<"press" | "timeout">) => void
  timeout?: number
}

type ConfirmButtonState = { armed: boolean }

const confirmButton = definePrimitive({
  name: "confirm-button",
  options: { onConfirm: "callback", onArmedChange: "callback", timeout: "number" },
  state: (_options: ConfirmButtonOptions): ConfirmButtonState => ({ armed: false }),
  api: (context) => {
    const { store, options, onDestroy } = context
    const change = createChange(context)
    let timer: ReturnType<typeof setTimeout> | undefined
    onDestroy(() => clearTimeout(timer))
    return {
      press(event?: Event) {
        clearTimeout(timer)
        if (store.get().armed) {
          change("armed", false, { reason: "press", event })
          options().onConfirm?.()
        } else if (change("armed", true, { reason: "press", event })) {
          timer = setTimeout(() => change("armed", false, { reason: "timeout" }), options().timeout ?? 3000)
        }
      },
    }
  },
  slots: (slot) => ({
    root: slot<{}, ConfirmButtonState>({
      state: (state) => ({ armed: state.armed }),
      attrs: (state) => ({ type: "button", "data-armed": state.armed ? "" : undefined }),
      press: ({ api }, event) => api.press(event),
    }),
  }),
})

const parts = createParts(confirmButton, { root: "button" })

const ConfirmButton = parts.Root

function Example() {
  const [deleted, setDeleted] = React.useState(0)
  return (
    <div className="flex items-center gap-3 text-sm">
      <ConfirmButton
        onConfirm={() => setDeleted((count) => count + 1)}
        className="h-8 rounded-2xl border border-destructive/20 bg-destructive/5 px-3 font-medium text-destructive outline-none transition-colors hover:bg-destructive/10 focus-visible:ring-3 focus-visible:ring-destructive/30 data-armed:border-destructive/40 data-armed:bg-destructive/10"
      >
        {({ armed }) => (armed ? "Press again to delete" : "Delete")}
      </ConfirmButton>
      <span data-deleted className="text-muted-foreground">
        Deleted {deleted} {deleted === 1 ? "time" : "times"}
      </span>
    </div>
  )
}

export { confirmButton, ConfirmButton, Example, type ConfirmButtonOptions, type ConfirmButtonState }
