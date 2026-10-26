import * as React from "react"
import {
  createChange,
  createSpans,
  css,
  definePrimitive,
  stackSpans,
  type Span,
  type SpanAction,
  type SpansDraft,
} from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type Plan = Span & { title: string }

type WeekState = { plans: Plan[]; draft: SpansDraft<Plan> | null; hover: number | null }

const time = (minutes: number) => `${Math.floor(minutes / 60)}:${String(minutes % 60).padStart(2, "0")}`

let made = 0

const week = definePrimitive({
  name: "week",
  state: (): WeekState => ({
    plans: [
      { id: "gym", track: "Mon", start: 9 * 60, end: 10 * 60, title: "Gym" },
      { id: "call", track: "Mon", start: 9 * 60 + 30, end: 11 * 60, title: "Call" },
      { id: "lunch", track: "Tue", start: 12 * 60, end: 13 * 60, title: "Lunch" },
    ],
    draft: null,
    hover: null,
  }),
  api: (context) => {
    const change = createChange(context)
    const spans = createSpans<WeekState, Plan>(context, {
      key: "plans",
      draft: "draft",
      set: (value, details) => change("plans", value, details),
      min: () => 8 * 60,
      max: () => 14 * 60,
      step: () => 30,
      minSize: () => 60,
      maxSize: () => 180,
      size: () => 60,
      tracks: () => ["Mon", "Tue", "Wed"],
      create: (span) => ({ ...span, id: `plan-${++made}`, title: "New" }),
      label: (plan) => `${plan.title}, ${plan.track} ${time(plan.start)} to ${time(plan.end)}`,
      createAutoScroll: { edge: 32 },
    })
    return {
      spans,
      hover: (track: string | null, event?: PointerEvent) =>
        context.store.set({
          hover: track && event ? spans.valueAt(track, event.clientX, event.clientY) : null,
        }),
    }
  },
  slots: (slot) => ({
    root: slot<{}, { hover: number | null }>({ state: (state) => ({ hover: state.hover }) }),
    day: slot<{ value: string }, { plans: Plan[] }>({
      props: { value: "string" },
      state: (state, { api, key }) => ({ plans: api.spans.spansOn(state, key) }),
      attrs: () => ({ role: "group", style: "position:relative;touch-action:none;user-select:none" }),
      on: {
        pointerdown: (event, { api, key }) => api.spans.trackPointerdown(event, key),
        pointermove: (event, { api, key }) => api.hover(key, event),
        pointerleave: (_event, { api }) => api.hover(null),
      },
      bind: (el, { api, key }) => api.spans.bindTrack(el, key),
    }),
    plan: slot<{ value: string }, { plan: Plan; action: SpanAction | undefined }>({
      props: { value: "string" },
      present: (state, { api, key }) => api.spans.spans(state).some((plan) => plan.id === key),
      state: (state, { api, key }) => ({
        plan: api.spans.spans(state).find((plan) => plan.id === key)!,
        action: api.spans.action(state, key),
      }),
      attrs: (state, { api, key }) => {
        const plans = api.spans.spans(state)
        const plan = plans.find((other) => other.id === key)!
        const lanes = stackSpans(plans.filter((other) => other.track === plan.track))
        return {
          tabindex: "0",
          "aria-label": `${plan.title}, ${plan.track} ${time(plan.start)} to ${time(plan.end)}`,
          ...api.spans.spanAttrs(state, key),
          style: api.spans.spanStyle(plan, lanes.get(key)),
        }
      },
      on: {
        pointerdown: (event, { api, key }) => api.spans.spanPointerdown(event, key),
        keydown: (event, { api, key }) => api.spans.keydown(event, key),
      },
      bind: (el, { api, key }) => api.spans.bindSpan(el, key),
    }),
    edge: slot<{ edge: "start" | "end" }>({
      props: { edge: "string" },
      attrs: (_state, { props }) => ({
        "data-span-edge": props.edge,
        style: css({ position: "absolute", left: "0", right: "0", height: "6px", cursor: "ns-resize" }),
      }),
    }),
  }),
})

const parts = createParts(week, { root: "div", day: "div", plan: "div", edge: "div" })

const Week = parts.Root

const WeekDay = parts.Day

const WeekPlan = parts.Plan

const WeekEdge = parts.Edge

function Example() {
  return (
    <Week className="flex w-full max-w-sm flex-col gap-2">
      {({ hover }) => (
        <>
          <div className="flex pl-10 text-xs text-muted-foreground">
            {["Mon", "Tue", "Wed"].map((day) => (
              <span key={day} className="flex-1 pl-1.5">
                {day}
              </span>
            ))}
          </div>
          <div className="-mt-1 h-44 overflow-y-auto rounded-xl border border-border">
            <div className="flex">
              <div className="w-10 shrink-0">
                {[8, 9, 10, 11, 12, 13].map((hour) => (
                  <div key={hour} className="h-15 pt-0.5 pr-1 text-right text-[10px] text-muted-foreground">
                    {hour}:00
                  </div>
                ))}
              </div>
              {["Mon", "Tue", "Wed"].map((day) => (
                <WeekDay
                  key={day}
                  value={day}
                  aria-label={day}
                  className="h-90 flex-1 border-l border-border bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_59px,var(--color-border)_59px,var(--color-border)_60px)]"
                >
                  {({ plans }) =>
                    plans.map((plan) => (
                      <WeekPlan
                        key={plan.id}
                        value={plan.id}
                        className="cursor-grab overflow-hidden rounded-md border border-background bg-primary px-1.5 text-[11px] text-primary-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/50 data-dragging:opacity-80"
                      >
                        {({ plan, action }) => (
                          <>
                            <WeekEdge edge="start" className="top-0" />
                            {plan.title}
                            {action && ` ${time(plan.start)}–${time(plan.end)}`}
                            <WeekEdge edge="end" className="bottom-0" />
                          </>
                        )}
                      </WeekPlan>
                    ))
                  }
                </WeekDay>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted-foreground tabular-nums">
            {hover === null ? "Point at a day" : `Pointer at ${time(hover)}`}
          </p>
        </>
      )}
    </Week>
  )
}

export { type Plan, week, Week, WeekDay, WeekEdge, WeekPlan, type WeekState, Example }
