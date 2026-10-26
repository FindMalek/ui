import * as React from "react"
import { Volume2Icon, VolumeOffIcon } from "lucide-react"
import { createChange, definePrimitive } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

const muteButton = definePrimitive({
  name: "mute-button",
  options: { muted: "boolean", onMutedChange: "callback" },
  controlled: ["muted"],
  state: (options: { muted?: boolean; onMutedChange?: (muted: boolean) => void }) => ({
    muted: options.muted ?? false,
  }),
  sync: (options) => (options.muted === undefined ? {} : { muted: options.muted }),
  api: (context) => {
    const change = createChange(context)

    return {
      toggle: (event?: Event) => {
        change("muted", !context.store.get().muted, { reason: "press", event })
      },
    }
  },
  slots: (slot) => ({
    root: slot({
      attrs: (state) => ({ type: "button", "aria-pressed": String(state.muted) }),
      press: ({ api }, event) => api.toggle(event),
    }),
  }),
})

const { Root: MuteButton } = createParts(muteButton, { root: "button" })

function Example() {
  const [muted, setMuted] = React.useState(false)

  return (
    <MuteButton
      muted={muted}
      onMutedChange={setMuted}
      className="flex items-center justify-center gap-1.5 h-8 rounded-full border border-border pl-2.5 pr-3 text-sm font-medium outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:border-ring aria-pressed:border-muted aria-pressed:bg-muted aria-pressed:focus-visible:border-ring"
    >
      {muted ? (
        <VolumeOffIcon aria-hidden="true" className="size-4" />
      ) : (
        <Volume2Icon aria-hidden="true" className="size-4" />
      )}
      {muted ? "Unmute" : "Mute"}
    </MuteButton>
  )
}

export { Example }
