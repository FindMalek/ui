import * as React from "react"
import { definePrimitive } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type MuteButtonState = { muted: boolean }

const muteButton = definePrimitive({
  name: "mute-button",
  state: (): MuteButtonState => ({ muted: false }),
  api: (context) => ({
    toggle: () => context.store.set({ muted: !context.store.get().muted }),
  }),
  slots: (slot) => ({
    root: slot<{}, { muted: boolean }>({
      state: (state) => ({ muted: state.muted }),
      attrs: (state) => ({ type: "button", "aria-pressed": String(state.muted) }),
      press: ({ api }) => api.toggle(),
    }),
  }),
})

const parts = createParts(muteButton, { root: "button" })

const MuteButton = parts.Root

function Example() {
  return (
    <MuteButton className="h-8 w-24 rounded-lg border border-border px-3 text-sm font-medium outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50">
      {({ muted }) => (muted ? "Unmute" : "Mute")}
    </MuteButton>
  )
}

export { Example, muteButton, MuteButton, type MuteButtonState }
