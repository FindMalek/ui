import * as React from "react"
import {
  bindLayer,
  bindPersistentLayer,
  css,
  definePrimitive,
  isDismissal,
  keepFocus,
  position,
} from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type TimerOptions = {
  modal?: boolean
  onClose?: (reason: string) => void
}

type TimerState = { open: boolean }

const timer = definePrimitive({
  name: "timer",
  options: { modal: "boolean", onClose: "callback" },
  state: (_options: TimerOptions): TimerState => ({ open: false }),
  api: (context) => {
    const { store } = context
    return {
      trigger: () => context.element("trigger"),
      modal: () => !!context.options().modal,
      open: () => store.set({ open: true }),
      close(reason: string) {
        store.set({ open: false })
        context.options().onClose?.(reason)
        keepFocus(() => context.element("trigger"))
      },
    }
  },
  slots: (slot) => ({
    root: slot({}),
    trigger: slot({
      attrs: (state) => ({ type: "button", "aria-expanded": String(state.open) }),
      press: ({ api }) => api.open(),
    }),
    panel: slot({
      present: (state) => state.open,
      attrs: () => ({ role: "dialog", style: css({ inset: "auto", margin: "0" }) }),
      bind: (el, { api }) => {
        const stopLayer = bindLayer(el, {
          topLayer: true,
          modal: api.modal(),
          closeOnBlur: true,
          contains: (target) => !!api.trigger()?.contains(target),
          onDismiss: (reason) => api.close(reason),
        })
        const stopPosition = position(api.trigger, el, { side: "bottom", align: "start" })
        el.querySelector("button")?.focus({ preventScroll: true })
        return () => {
          stopPosition()
          stopLayer()
        }
      },
    }),
    done: slot({ attrs: () => ({ type: "button" }), press: ({ api }) => api.close("done-press") }),
    player: slot({ bind: (el) => bindPersistentLayer(el) }),
  }),
})

const parts = createParts(timer, {
  root: "div",
  trigger: "button",
  panel: "div",
  done: "button",
  player: "div",
})

const Timer = parts.Root

const TimerTrigger = parts.Trigger

const TimerPanel = parts.Panel

const TimerDone = parts.Done

const TimerPlayer = parts.Player

function Example() {
  const [modal, setModal] = React.useState(true)
  const [count, setCount] = React.useState(0)
  const [playing, setPlaying] = React.useState(true)
  const [closed, setClosed] = React.useState("")
  return (
    <Timer
      modal={modal}
      onClose={(reason: string) =>
        setClosed(isDismissal(reason) ? `Dismissed by ${reason}` : `Closed by ${reason}`)
      }
      className="flex w-72 flex-col gap-3 text-sm"
    >
      <div className="flex items-center gap-2">
        <TimerTrigger className="rounded-md border border-border px-2 py-1">Set a timer</TimerTrigger>
        <button
          type="button"
          onClick={() => setCount(count + 1)}
          className="rounded-md border border-border px-2 py-1"
        >
          Count {count}
        </button>
      </div>
      <TimerPanel className="flex w-48 flex-col gap-2 rounded-xl border border-border bg-popover p-3 shadow-lg">
        <p>Remind me in 10 minutes.</p>
        <TimerDone className="self-start rounded-md bg-foreground px-2 py-1 text-xs text-background">
          Done
        </TimerDone>
      </TimerPanel>
      <TimerPlayer className="flex items-center justify-between rounded-lg bg-muted px-3 py-2 text-xs">
        {playing ? "Playing: Rain sounds" : "Paused"}
        <button
          type="button"
          onClick={() => setPlaying(!playing)}
          className="rounded px-1.5 py-0.5 hover:bg-background"
        >
          {playing ? "Pause" : "Play"}
        </button>
      </TimerPlayer>
      <label className="flex items-center gap-1.5 text-xs">
        <input type="checkbox" checked={modal} onChange={(event) => setModal(event.target.checked)} />
        Modal
      </label>
      <p data-last-close className="text-xs text-muted-foreground">
        {closed}
      </p>
    </Timer>
  )
}

export {
  Example,
  timer,
  Timer,
  TimerDone,
  TimerPanel,
  TimerPlayer,
  type TimerOptions,
  type TimerState,
  TimerTrigger,
}
