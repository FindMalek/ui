import * as React from "react"
import { bindDrag, css, definePrimitive, live } from "@ui-sdk/core"
import { createVelocityTracker, rubberBand, solveSpring } from "@ui-sdk/core/gesture"
import { createParts } from "@ui-sdk/react/primitive"

type InboxState = {
  pull: number
  refreshing: boolean
  speed: number | null
  refreshed: number
}

const hold = 48

const inbox = definePrimitive({
  name: "inbox",
  state: (): InboxState => ({ pull: 0, refreshing: false, speed: null, refreshed: 0 }),
  live: ["pull"],
  api: (context) => {
    const { store } = context
    const velocity = createVelocityTracker({ maxSpeed: 4 })
    let stop: (() => void) | undefined
    let frame = 0
    let timer: ReturnType<typeof setTimeout> | undefined

    function springTo(to: number, speed: number) {
      cancelAnimationFrame(frame)
      const spring = solveSpring(0.35, 1, store.get().pull - to, speed)
      const start = performance.now()
      const tick = () => {
        const t = performance.now() - start
        const done = t > 800 || Math.abs(spring.position(t)) < 0.5
        store.set({ pull: done ? to : to + spring.position(t) })
        if (!done) frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }

    function refresh(speed = 0) {
      store.set({ refreshing: true })
      springTo(hold, speed)
      timer = setTimeout(() => {
        store.set({ refreshing: false, refreshed: store.get().refreshed + 1 })
        springTo(0, 0)
      }, 800)
    }

    context.onDestroy(() => {
      stop?.()
      cancelAnimationFrame(frame)
      clearTimeout(timer)
    })
    return {
      refresh: () => !store.get().refreshing && refresh(),
      pointerdown(event: PointerEvent, el: HTMLElement) {
        if (event.button !== 0 || store.get().refreshing) return
        cancelAnimationFrame(frame)
        velocity.reset()
        const from = store.get().pull
        stop = bindDrag(el, event, {
          threshold: 4,
          onMove: ({ y, event: move }) => {
            const pulled = y - event.clientY + from
            const pull = rubberBand(pulled, el.clientHeight)
            velocity.add(move.timeStamp, pull)
            store.set({ pull })
          },
          onEnd: (end, canceled) => {
            stop = undefined
            const speed = canceled ? 0 : velocity.velocity(end.timeStamp)
            store.set({ speed })
            if (!canceled && (store.get().pull > hold || speed > 0.6)) refresh(speed)
            else springTo(0, speed)
          },
        })
      },
    }
  },
  slots: (slot) => ({
    root: slot<{}, { refreshing: boolean; speed: number | null; refreshed: number }>({
      state: (state) => ({ refreshing: state.refreshing, speed: state.speed, refreshed: state.refreshed }),
    }),
    list: slot({
      attrs: (state) => ({ role: "list", "aria-busy": state.refreshing ? "true" : undefined }),
      live: live<InboxState, any, {}>((state) => ({
        "data-pulling": state.pull > 0 ? "" : undefined,
        style: css({ transform: `translateY(${state.pull}px)`, "touch-action": "none" }),
      })),
      on: { pointerdown: (event, { el, api }) => api.pointerdown(event, el!) },
    }),
    refresh: slot({ attrs: () => ({ type: "button" }), press: ({ api }) => api.refresh() }),
  }),
})

const parts = createParts(inbox, { root: "div", list: "div", refresh: "button" })

const Inbox = parts.Root

const InboxList = parts.List

const InboxRefresh = parts.Refresh

const messages = ["Lunch on Friday?", "Your invoice is ready", "Design review notes", "Welcome aboard"]

function Example() {
  return (
    <Inbox className="flex w-72 flex-col gap-2 text-sm">
      {({ refreshing, speed, refreshed }) => (
        <>
          <div className="relative h-48 overflow-hidden rounded-xl border border-border bg-muted">
            <p className="absolute inset-x-0 top-3 text-center text-xs text-muted-foreground">
              {refreshing ? "Refreshing…" : "Pull to refresh"}
            </p>
            <InboxList
              aria-label="Inbox"
              className="relative flex h-full cursor-grab flex-col divide-y divide-border bg-background select-none data-pulling:cursor-grabbing"
            >
              {messages.map((message) => (
                <div key={message} role="listitem" className="px-3 py-2.5">
                  {message}
                </div>
              ))}
            </InboxList>
          </div>
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <InboxRefresh className="rounded-md border border-border px-2 py-1 text-foreground">
              Refresh
            </InboxRefresh>
            <span data-pull-state>
              {speed === null ? "" : `Let go at ${speed.toFixed(2)} px/ms, `}
              refreshed {refreshed} {refreshed === 1 ? "time" : "times"}
            </span>
          </div>
        </>
      )}
    </Inbox>
  )
}

export { Example, inbox, Inbox, InboxList, InboxRefresh, type InboxState }
