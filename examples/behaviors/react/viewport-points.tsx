import * as React from "react"
import {
  createChange,
  createViewport,
  css,
  definePrimitive,
  live,
  type ChangeDetails,
  type Viewport,
  type ViewportReason,
} from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type Point = { x: number; y: number }

type DotsState = { viewport: Viewport; dots: Point[] }

type DotsOptions = {
  viewport?: Viewport
  onViewportChange?: (viewport: Viewport, details: ChangeDetails<ViewportReason>) => void
}

const round = (point: Point) => `${Math.round(point.x)}, ${Math.round(point.y)}`

const dots = definePrimitive({
  name: "dots",
  options: { viewport: "value", onViewportChange: "callback" },
  state: (options: DotsOptions): DotsState => ({
    viewport: options.viewport ?? { x: 0, y: 0, zoom: 1 },
    dots: [],
  }),
  sync: (options) => (options.viewport ? { viewport: options.viewport } : {}),
  live: ["viewport"],
  api: (context) => {
    const { store } = context
    const change = createChange(context)
    const viewport = createViewport<DotsState>(context, {
      key: "viewport",
      surface: () => context.element("root"),
      set: (value, details) => change("viewport", value, details),
    })
    return {
      viewport,
      drop(event: MouseEvent) {
        store.set({ dots: [...store.get().dots, viewport.toCanvas(event.clientX, event.clientY)] })
      },
      labelAt(state: DotsState) {
        const surface = context.element("root")
        const dot = state.dots.at(-1)
        if (!surface || !dot) return undefined
        const box = surface.getBoundingClientRect()
        const at = viewport.toScreen(dot)
        return { x: at.x - box.left, y: at.y - box.top }
      },
      inView() {
        const { left, top, right, bottom } = viewport.visible()
        return `${round({ x: left, y: top })} to ${round({ x: right, y: bottom })}`
      },
    }
  },
  slots: (slot) => ({
    root: slot<{}, { dots: Point[] }>({
      state: (state) => ({ dots: state.dots }),
      attrs: () => ({
        tabindex: "0",
        "aria-roledescription": "board",
        style: css({ position: "relative", overflow: "clip", "touch-action": "none" }),
      }),
      on: {
        wheel: (event, { api }) => api.viewport.wheel(event),
        pointerdown: (event, { el, api }) => event.target === el && api.viewport.pointerdown(event),
        keydown: (event, { api }) => api.viewport.keydown(event),
        dblclick: (event, { el, api }) => event.target === el && api.drop(event),
      },
    }),
    world: slot({
      attrs: () => ({ style: css({ position: "absolute", left: "0", top: "0", "pointer-events": "none" }) }),
      live: live<DotsState, any, {}>((state, { api }) => ({ style: api.viewport.style(state) })),
    }),
    label: slot({
      live: live<DotsState, any, {}>((state, { api }) => {
        const at = api.labelAt(state)
        const dot = state.dots.at(-1)
        return at && dot
          ? {
              "data-at": round(dot),
              style: css({
                position: "absolute",
                left: `${at.x}px`,
                top: `${at.y}px`,
                "pointer-events": "none",
              }),
            }
          : { hidden: "" }
      }),
    }),
    view: slot({
      live: live<DotsState, any, {}>((state, { api }) => ({
        "data-view": state.viewport && api.inView(),
      })),
    }),
  }),
})

const parts = createParts(dots, { root: "div", world: "div", label: "span", view: "span" })

const Dots = parts.Root

const DotsWorld = parts.World

const DotsLabel = parts.Label

const DotsView = parts.View

function Example() {
  const [viewport, setViewport] = React.useState<Viewport>({ x: 0, y: 0, zoom: 1 })
  const [reason, setReason] = React.useState<ViewportReason | null>(null)
  return (
    <div className="flex w-80 flex-col gap-2 text-xs">
      <Dots
        aria-label="Dots"
        viewport={viewport}
        onViewportChange={(next, details) => {
          setViewport(next)
          setReason(details.reason)
        }}
        className="h-56 cursor-crosshair rounded-xl border border-border bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] bg-size-[16px_16px] outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        {({ dots }) => (
          <>
            <DotsWorld>
              {dots.map((dot, index) => (
                <span
                  key={index}
                  className="absolute -mt-1.5 -ml-1.5 size-3 rounded-full bg-foreground"
                  style={{ left: dot.x, top: dot.y }}
                />
              ))}
            </DotsWorld>
            <DotsView className="pointer-events-none absolute bottom-2 left-2 rounded bg-background/80 px-1.5 py-0.5 text-muted-foreground before:content-['In_view:_'] after:content-[attr(data-view)]" />
            <DotsLabel className="ml-2 -translate-y-1/2 rounded bg-background px-1.5 py-0.5 shadow-sm after:content-[attr(data-at)]" />
          </>
        )}
      </Dots>
      <p data-reason className="text-muted-foreground">
        {reason
          ? `Moved by ${reason}, zoom ${Math.round(viewport.zoom * 100)}%`
          : "Double-click to drop a dot"}
      </p>
    </div>
  )
}

export { Dots, dots, DotsLabel, type DotsOptions, type DotsState, DotsView, DotsWorld, Example, type Point }
