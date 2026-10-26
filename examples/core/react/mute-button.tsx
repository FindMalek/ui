import { definePrimitive } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type MuteButtonState = { muted: boolean }

const muteButton = definePrimitive({
  name: "mute-button",
  state: () => ({ muted: false }),
  api: (context) => ({
    toggle: () => context.store.set({ muted: !context.store.get().muted }),
  }),
  slots: (slot) => ({
    root: slot({
      attrs: (state) => ({ type: "button", "aria-pressed": String(state.muted) }),
      press: ({ api }) => api.toggle(),
    }),
  }),
})

const parts = createParts(muteButton, { root: "button" })

const MuteButton = parts.Root

function Example() {
  return (
    <MuteButton className="h-8 rounded-full border border-border px-5 text-sm font-medium outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:border-ring aria-pressed:border-muted aria-pressed:bg-muted aria-pressed:focus-visible:border-ring">
      Mute
    </MuteButton>
  )
}

export { Example, muteButton, MuteButton, type MuteButtonState }
