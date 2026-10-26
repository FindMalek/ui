import * as React from "react"
import {
  createChange,
  createCommit,
  css,
  definePrimitive,
  type ChangeDetails,
  type CommitDetails,
} from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type Reason = "track-press" | "step-key"

type VolumeOptions = {
  defaultValue?: number
  onValueChange?: (value: number, details: ChangeDetails<Reason>) => void
  onValueCommit?: (value: number, details: CommitDetails<Reason>) => void
}

type VolumeState = { value: number }

const clamp = (value: number) => Math.round(Math.min(100, Math.max(0, value)))

const volume = definePrimitive({
  name: "volume",
  options: { defaultValue: "number", onValueChange: "callback", onValueCommit: "callback" },
  state: (options: VolumeOptions): VolumeState => ({ value: options.defaultValue ?? 50 }),
  commits: ["value"],
  api: (context) => {
    const change = createChange(context)
    const commit = createCommit(context)
    const valueAt = (event: PointerEvent, track: HTMLElement) => {
      const rect = track.getBoundingClientRect()
      return clamp(((event.clientX - rect.left) / rect.width) * 100)
    }
    return {
      drag(event: PointerEvent, track: HTMLElement) {
        change("value", valueAt(event, track), { reason: "track-press", event })
      },
      release(event: PointerEvent) {
        commit("value", context.store.get().value, { reason: "track-press", event })
      },
      step(event: KeyboardEvent) {
        const by = { ArrowRight: 5, ArrowUp: 5, ArrowLeft: -5, ArrowDown: -5 }[event.key]
        if (by === undefined) return
        event.preventDefault()
        const value = clamp(context.store.get().value + by)
        if (change("value", value, { reason: "step-key", event }))
          commit("value", value, { reason: "step-key", event })
      },
    }
  },
  slots: (slot) => ({
    track: slot({
      on: {
        pointerdown: (event, { el, api }) => {
          if (!el) return
          el.setPointerCapture(event.pointerId)
          el.querySelector<HTMLElement>("[role=slider]")?.focus()
          api.drag(event, el)
        },
        pointermove: (event, { el, api }) => {
          if (el?.hasPointerCapture(event.pointerId)) api.drag(event, el)
        },
        pointerup: (event, { api }) => api.release(event),
      },
    }),
    fill: slot({ attrs: (state) => ({ style: css({ width: `${state.value}%` }) }) }),
    thumb: slot({
      attrs: (state) => ({
        role: "slider",
        tabindex: "0",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "aria-valuenow": String(state.value),
        style: css({ left: `${state.value}%` }),
      }),
      on: { keydown: (event, { api }) => api.step(event) },
    }),
  }),
})

const parts = createParts(volume, { track: "div", fill: "div", thumb: "div" })

const Volume = parts.Root

const VolumeTrack = parts.Track

const VolumeFill = parts.Fill

const VolumeThumb = parts.Thumb

function Example() {
  const [value, setValue] = React.useState(50)
  const [saved, setSaved] = React.useState(50)
  return (
    <div className="flex w-72 flex-col gap-4 text-sm">
      <Volume onValueChange={setValue} onValueCommit={setSaved}>
        <VolumeTrack className="relative h-5 cursor-pointer touch-none">
          <div className="absolute inset-x-0 top-2 h-1 rounded-full bg-muted">
            <VolumeFill className="h-full rounded-full bg-foreground" />
          </div>
          <VolumeThumb
            aria-label="Volume"
            className="absolute top-0.5 size-4 -translate-x-1/2 rounded-full border border-border bg-background shadow-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          />
        </VolumeTrack>
      </Volume>
      <p className="flex justify-between text-muted-foreground">
        <span data-value>Volume {value}</span>
        <span data-saved>Saved {saved}</span>
      </p>
    </div>
  )
}

export { Example, volume, Volume, VolumeFill, VolumeThumb, VolumeTrack, type VolumeOptions, type VolumeState }
