import * as React from "react"
import { createChange, createController, definePrimitive, type ChangeDetails } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

function createCountdownController() {
  return createController<{
    start: (seconds: number) => void
    stop: () => void
    left: () => number
  }>()
}

type CountdownOptions = {
  controller?: ReturnType<typeof createCountdownController>
  onLeftChange?: (left: number, details: ChangeDetails<"imperative" | "timeout">) => void
}

type CountdownState = { left: number }

const countdown = definePrimitive({
  name: "countdown",
  options: { controller: "value", onLeftChange: "callback" },
  state: (_options: CountdownOptions): CountdownState => ({ left: 0 }),
  api: (context) => {
    const change = createChange(context)
    let timer: ReturnType<typeof setInterval> | undefined
    context.onDestroy(() => clearInterval(timer))
    return {
      start(seconds: number) {
        clearInterval(timer)
        change("left", seconds, { reason: "imperative" })
        timer = setInterval(() => {
          const left = context.store.get().left - 1
          change("left", left, { reason: "timeout" })
          if (left <= 0) clearInterval(timer)
        }, 1000)
      },
      stop() {
        clearInterval(timer)
        change("left", 0, { reason: "imperative" })
      },
      left: () => context.store.get().left,
    }
  },
  slots: (slot) => ({
    root: slot<{}, CountdownState>({
      state: (state) => ({ left: state.left }),
      attrs: () => ({ role: "timer" }),
    }),
  }),
})

const parts = createParts(countdown, { root: "div" })

const Countdown = parts.Root

const button =
  "h-8 rounded-lg border border-border px-3 font-medium outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"

function Example() {
  const [controller] = React.useState(createCountdownController)
  return (
    <div className="flex w-72 flex-col items-start gap-3 text-sm">
      <Countdown controller={controller} aria-label="Tea" className="text-2xl font-medium tabular-nums">
        {({ left }) => `0:${String(left).padStart(2, "0")}`}
      </Countdown>
      <div className="flex gap-2">
        <button type="button" className={button} onClick={() => controller.start(30)}>
          Start 30 seconds
        </button>
        <button type="button" className={button} onClick={() => controller.stop()}>
          Stop
        </button>
      </div>
    </div>
  )
}

export {
  countdown,
  Countdown,
  type CountdownOptions,
  type CountdownState,
  createCountdownController,
  Example,
}
