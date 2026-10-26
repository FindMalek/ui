import * as React from "react"
import { bindLayer, css, definePrimitive, keepFocus, position } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type Point = { x: number; y: number }

type PinsState = {
  open: boolean
  anchor: Point | HTMLElement | null
  pin: Point | null
}

const pins = definePrimitive({
  name: "pins",
  state: (): PinsState => ({ open: false, anchor: null, pin: null }),
  api: (context) => {
    const { store } = context
    const close = () => {
      store.set({ open: false })
      keepFocus(() => context.element("map"))
    }
    return {
      close,
      press(event: MouseEvent, map: HTMLElement) {
        const box = map.getBoundingClientRect()
        const pin = { x: Math.round(event.clientX - box.left), y: Math.round(event.clientY - box.top) }
        store.set({ open: true, anchor: { x: event.clientX, y: event.clientY }, pin })
      },
      keydown(event: KeyboardEvent, map: HTMLElement) {
        if (event.key !== "Enter") return
        event.preventDefault()
        const pin = { x: Math.round(map.clientWidth / 2), y: Math.round(map.clientHeight / 2) }
        store.set({ open: true, anchor: map, pin })
      },
    }
  },
  slots: (slot) => ({
    map: slot({
      attrs: () => ({ role: "button", tabindex: "0" }),
      on: {
        click: (event, { el, api }) => api.press(event, el!),
        keydown: (event, { el, api }) => api.keydown(event, el!),
      },
    }),
    card: slot<{}, { pin: Point | null }>({
      present: (state) => state.open,
      state: (state) => ({ pin: state.pin }),
      attrs: () => ({ role: "dialog", style: css({ inset: "auto", margin: "0" }) }),
      bind: (el, { api, store }) => {
        const stopLayer = bindLayer(el, { topLayer: true, onDismiss: () => api.close() })
        const stopPosition = position(() => store.get().anchor, el, {
          side: "bottom",
          align: "start",
          sideOffset: 4,
        })
        el.querySelector("button")?.focus({ preventScroll: true })
        return () => {
          stopPosition()
          stopLayer()
        }
      },
    }),
    close: slot({
      attrs: () => ({ type: "button" }),
      press: ({ api }) => api.close(),
    }),
  }),
})

const parts = createParts(pins, { map: "div", card: "div", close: "button" })

const Pins = parts.Root

const PinsMap = parts.Map

const PinsCard = parts.Card

const PinsClose = parts.Close

function Example() {
  return (
    <Pins>
      <PinsMap
        aria-label="Map, press to drop a pin"
        className="h-40 w-72 cursor-crosshair rounded-xl border border-border bg-[radial-gradient(var(--color-border)_1px,transparent_1px)] bg-size-[16px_16px] outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      />
      <PinsCard
        aria-label="Pin"
        className="flex items-center gap-3 rounded-xl border border-border bg-popover p-2 pl-3 text-sm shadow-lg"
      >
        {({ pin }) => (
          <>
            <span>
              Pin at {pin?.x}, {pin?.y}
            </span>
            <PinsClose className="rounded-md px-2 py-1 text-xs hover:bg-muted">Done</PinsClose>
          </>
        )}
      </PinsCard>
    </Pins>
  )
}

export { Example, pins, Pins, PinsCard, PinsClose, PinsMap, type PinsState, type Point }
