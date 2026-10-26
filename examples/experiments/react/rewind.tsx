import * as React from "react"
import { definePrimitive } from "@ui-sdk/core"
import { createAgent } from "@ui-sdk/react/agent"
import { createParts, usePart, type PartProps } from "@ui-sdk/react/primitive"
import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/react/radio"
import { Slider, SliderControl, SliderIndicator, SliderThumb, SliderTrack } from "@ui-sdk/react/slider"
import { Switch, SwitchThumb } from "@ui-sdk/react/switch"
import { createTimeline, describeEntry, type TimelineEntry } from "@ui-sdk/react/timeline"

type RewindOptions = {
  agent: ReturnType<typeof createAgent>
}

type RewindState = { entries: readonly TimelineEntry[]; position: number }

type RewindRootState = {
  entries: readonly TimelineEntry[]
  position: number
  current: TimelineEntry | undefined
}
type RewindStepState = { entry: TimelineEntry | undefined; applied: boolean }
type RewindUndoState = { disabled: boolean }

const undoable = (state: RewindState, source: string) =>
  state.entries.slice(0, state.position).some((entry) => entry.source === source && !entry.reverted)

const rewind = /* @__PURE__ */ definePrimitive({
  name: "rewind",
  options: { agent: "value" },
  state: (_options: RewindOptions): RewindState => ({ entries: [], position: 0 }),
  api: (context) => {
    const { store } = context
    let timeline: ReturnType<typeof createTimeline> | undefined
    const api = {
      seek: (to: number) => timeline?.seek(to),
      undoSource: (source: string) => timeline?.undoSource(source),
      record(el: HTMLElement) {
        const made = createTimeline(context.options().agent, { within: el })
        timeline = made
        const sync = () => store.set({ entries: made.entries(), position: made.position() })
        sync()
        const unsubscribe = made.subscribe(sync)
        return () => {
          unsubscribe()
          made.destroy()
          if (timeline === made) timeline = undefined
        }
      },
      scrubberKeydown(event: KeyboardEvent) {
        const { entries, position } = store.get()
        const to = { ArrowLeft: position - 1, ArrowRight: position + 1, Home: 0, End: entries.length }[
          event.key
        ]
        if (to === undefined) return
        event.preventDefault()
        void api.seek(to)
      },
    }
    return api
  },
  slots: (slot) => ({
    root: slot<{}, RewindRootState>({
      state: (state) => ({
        entries: state.entries,
        position: state.position,
        current: state.entries[state.position - 1],
      }),
    }),
    panel: slot({ bind: (el, { api }) => api.record(el) }),
    scrubber: slot({
      attrs: (state) => {
        const current = state.entries[state.position - 1]
        return {
          role: "slider",
          tabindex: "0",
          "aria-valuemin": "0",
          "aria-valuemax": String(state.entries.length),
          "aria-valuenow": String(state.position),
          "aria-valuetext": current
            ? `${state.position} of ${state.entries.length}: ${describeEntry(current)}`
            : `Start, before ${state.entries.length} changes`,
        }
      },
      on: { keydown: (event, { api }) => api.scrubberKeydown(event) },
    }),
    start: slot({
      attrs: (state) => ({
        type: "button",
        tabindex: "-1",
        "aria-label": "Start",
        "data-applied": state.position === 0 ? "" : undefined,
      }),
      press: ({ api }) => api.seek(0),
    }),
    step: slot<{ value: string }, RewindStepState>({
      props: { value: "string" },
      state: (state, { key }) => {
        const index = state.entries.findIndex((entry) => entry.id === key)
        return { entry: state.entries[index], applied: index >= 0 && index < state.position }
      },
      attrs: (state, { key }) => {
        const index = state.entries.findIndex((entry) => entry.id === key)
        const entry = state.entries[index]
        if (!entry) return {}
        return {
          type: "button",
          tabindex: "-1",
          title: describeEntry(entry),
          "aria-label": describeEntry(entry),
          "data-source": entry.source,
          "data-applied": index < state.position ? "" : undefined,
          "data-reverted": entry.reverted ? "" : undefined,
        }
      },
      press: ({ api, store, key }) =>
        api.seek(store.get().entries.findIndex((entry) => entry.id === key) + 1),
    }),
    undo: slot<{ value: string }, RewindUndoState>({
      props: { value: "string" },
      state: (state, { key }) => ({ disabled: !undoable(state, key) }),
      attrs: (state, { key }) => ({ type: "button", disabled: undoable(state, key) ? undefined : "" }),
      press: ({ api, key }) => api.undoSource(key),
    }),
  }),
})

const parts = createParts(rewind, {
  root: "div",
  panel: "div",
  scrubber: "div",
  start: "button",
  step: "button",
})

const Rewind = parts.Root

const RewindPanel = parts.Panel

const RewindScrubber = parts.Scrubber

const RewindStart = parts.Start

const RewindStep = parts.Step

function RewindUndo({ source, ...props }: { source: string } & PartProps<"button", RewindUndoState>) {
  return usePart(rewind, "undo", { value: source }, props, "button")
}

const agent = createAgent()

const runAgent = () =>
  agent.act({
    steps: [
      { ref: "Volume", action: "setValue", args: [20] },
      { ref: "Do not disturb", action: "setChecked", args: [true] },
      { ref: "Density", action: "setValue", args: ["compact"] },
    ],
  })

const button =
  "rounded-lg border border-border px-2.5 py-1 text-xs font-medium hover:bg-accent disabled:opacity-50"

function Example() {
  return (
    <Rewind agent={agent} className="flex w-full max-w-md flex-col gap-4">
      {({ entries, current }) => (
        <>
          <RewindPanel className="flex flex-col gap-4 rounded-xl border border-border p-4 text-sm font-medium">
            <Settings />
          </RewindPanel>
          <div className="flex flex-col gap-2 rounded-xl border border-border p-3">
            <RewindScrubber
              aria-label="Rewind"
              className="flex h-8 items-center gap-1 rounded-lg px-1 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              <RewindStart className="h-4 w-1.5 rounded-full bg-muted-foreground/40" />
              {entries.map((entry) => (
                <RewindStep
                  key={entry.id}
                  value={entry.id}
                  className="h-4 flex-1 rounded-full bg-foreground/15 transition-colors data-applied:bg-foreground/70 data-reverted:opacity-30 data-[source=agent]:bg-violet-500/30 data-[source=agent]:data-applied:bg-violet-500"
                />
              ))}
            </RewindScrubber>
            <div className="flex items-center justify-between gap-2 text-sm">
              <span className="truncate text-muted-foreground">
                {current
                  ? current.reverted
                    ? `Undone: ${describeEntry(current)}`
                    : describeEntry(current)
                  : "Change a setting, or let the agent."}
              </span>
              <div className="flex shrink-0 gap-1">
                <button type="button" onClick={runAgent} className={button}>
                  Run the agent
                </button>
                <RewindUndo source="agent" className={button}>
                  Undo the agent
                </RewindUndo>
              </div>
            </div>
          </div>
        </>
      )}
    </Rewind>
  )
}

const densities = ["comfortable", "compact"]

function Settings() {
  return (
    <>
      <div className="flex items-center gap-4">
        <span className="w-28">Volume</span>
        <Slider defaultValue={60} className="flex-1">
          <SliderControl className="flex w-full items-center py-2 select-none">
            <SliderTrack className="h-1 w-full rounded-full bg-input/90">
              <SliderIndicator className="rounded-full bg-primary" />
              <SliderThumb
                aria-label="Volume"
                className="block size-4 rounded-full bg-white shadow-md ring-1 ring-black/10 has-focus-visible:ring-4 has-focus-visible:ring-ring/30"
              />
            </SliderTrack>
          </SliderControl>
        </Slider>
      </div>
      <label className="flex items-center gap-4">
        <span className="w-28">Do not disturb</span>
        <Switch className="inline-flex h-5 w-8 shrink-0 items-center rounded-full border-2 border-transparent bg-input/90 outline-none focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary">
          <SwitchThumb className="block size-4 rounded-full bg-background shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)]" />
        </Switch>
      </label>
      <RadioGroup defaultValue="comfortable" aria-label="Density" className="flex items-center gap-4">
        <span className="w-28">Density</span>
        {densities.map((density) => (
          <label key={density} className="flex items-center gap-2 font-normal capitalize">
            <Radio
              value={density}
              className="flex size-4 items-center justify-center rounded-full bg-input/90 outline-none focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary"
            >
              <RadioIndicator className="size-2 rounded-full bg-primary-foreground" />
            </Radio>
            {density}
          </label>
        ))}
      </RadioGroup>
    </>
  )
}

export {
  Example,
  rewind,
  Rewind,
  type RewindOptions,
  RewindPanel,
  type RewindRootState,
  RewindScrubber,
  RewindStart,
  RewindStep,
  type RewindStepState,
  RewindUndo,
  type RewindUndoState,
}
