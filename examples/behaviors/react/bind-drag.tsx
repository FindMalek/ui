import * as React from "react"
import { bindDrag, createChange, definePrimitive, dragThreshold, type ChangeDetails } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type SplitState = { size: number; draft: number | null }

type SplitOptions = {
  defaultSize?: number
  onSizeChange?: (size: number, details: ChangeDetails<"drag" | "keyboard">) => void
}

const clamp = (size: number) => Math.round(Math.min(80, Math.max(20, size)))

const split = definePrimitive({
  name: "split",
  options: { defaultSize: "number", onSizeChange: "callback" },
  state: (options: SplitOptions): SplitState => ({ size: options.defaultSize ?? 50, draft: null }),
  api: (context) => {
    const { store } = context
    const change = createChange(context)
    let stop: (() => void) | undefined
    context.onDestroy(() => stop?.())
    return {
      pointerdown(event: PointerEvent, el: HTMLElement) {
        const root = el.parentElement
        if (event.button !== 0 || !root) return
        stop?.()
        stop = bindDrag(el, event, {
          threshold: dragThreshold,
          cancelOnEscape: true,
          onMove: ({ x }) => {
            const box = root.getBoundingClientRect()
            store.set({ draft: clamp(((x - box.left) / box.width) * 100) })
          },
          onEnd: (end, canceled) => {
            const { draft } = store.get()
            stop = undefined
            store.set({ draft: null })
            if (!canceled && draft !== null) change("size", draft, { reason: "drag", event: end })
          },
        })
      },
      keydown(event: KeyboardEvent) {
        const by = { ArrowLeft: -5, ArrowRight: 5 }[event.key]
        if (!by) return
        event.preventDefault()
        change("size", clamp(store.get().size + by), { reason: "keyboard", event })
      },
    }
  },
  slots: (slot) => ({
    root: slot<{}, { size: number }>({
      state: (state) => ({ size: state.draft ?? state.size }),
      attrs: (state) => ({
        style: `--split:${state.draft ?? state.size}%`,
        "data-dragging": state.draft !== null ? "" : undefined,
      }),
    }),
    divider: slot({
      attrs: (state) => ({
        role: "separator",
        tabindex: "0",
        "aria-orientation": "vertical",
        "aria-valuenow": String(state.draft ?? state.size),
        "aria-valuemin": "20",
        "aria-valuemax": "80",
        style: "touch-action:none",
      }),
      on: {
        pointerdown: (event, { el, api }) => api.pointerdown(event, el!),
        keydown: (event, { api }) => api.keydown(event),
      },
    }),
  }),
})

const parts = createParts(split, { root: "div", divider: "div" })

const Split = parts.Root

const SplitDivider = parts.Divider

function Example() {
  return (
    <Split className="flex h-40 w-full max-w-md overflow-hidden rounded-xl border border-border text-sm select-none">
      <div className="grid w-(--split) place-items-center bg-muted/50">Files</div>
      <SplitDivider
        aria-label="Resize panes"
        className="w-1.5 cursor-col-resize bg-border outline-none hover:bg-primary/50 focus-visible:bg-primary"
      />
      <div className="grid flex-1 place-items-center">Editor</div>
    </Split>
  )
}

export { Example, split, Split, SplitDivider, type SplitOptions, type SplitState }
