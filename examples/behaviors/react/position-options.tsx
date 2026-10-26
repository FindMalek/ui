import * as React from "react"
import { css, definePrimitive, position, type Align, type Side } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type HintOptions = {
  side?: Side
  align?: Align
  sideOffset?: number
  alignOffset?: number
  collisionPadding?: number
  arrowPadding?: number
}

type HintState = { open: boolean }

const hint = definePrimitive({
  name: "hint",
  options: {
    side: "string",
    align: "string",
    sideOffset: "number",
    alignOffset: "number",
    collisionPadding: "number",
    arrowPadding: "number",
  },
  state: (_options: HintOptions): HintState => ({ open: true }),
  api: (context) => ({
    toggle: () => context.store.set({ open: !context.store.get().open }),
    target: () => context.element("target"),
    placement: () => ({ ...context.options(), arrow: () => context.element("arrow") }),
  }),
  slots: (slot) => ({
    root: slot({}),
    target: slot({
      attrs: (state) => ({ type: "button", "aria-expanded": String(state.open) }),
      press: ({ api }) => api.toggle(),
    }),
    bubble: slot({
      present: (state) => state.open,
      attrs: () => ({ role: "tooltip" }),
      bind: (el, { api }) => position(api.target, el, api.placement),
    }),
    arrow: slot({ attrs: () => ({ "aria-hidden": "true", style: css({ position: "absolute" }) }) }),
  }),
})

const parts = createParts(hint, { root: "div", target: "button", bubble: "div", arrow: "span" })

const Hint = parts.Root

const HintTarget = parts.Target

const HintBubble = parts.Bubble

const HintArrow = parts.Arrow

const sides: Side[] = ["top", "right", "bottom", "left", "start", "end"]
const aligns: Align[] = ["start", "center", "end"]

function Example() {
  const [side, setSide] = React.useState<Side>("top")
  const [align, setAlign] = React.useState<Align>("center")
  const [offsets, setOffsets] = React.useState({ sideOffset: 8, alignOffset: 0, collisionPadding: 8 })
  return (
    <Hint
      {...{ side, align, ...offsets, arrowPadding: 8 }}
      className="flex w-72 flex-col items-center gap-4 text-xs"
    >
      <div className="grid h-28 place-items-center">
        <HintTarget className="rounded-md border border-border px-3 py-1.5 text-sm">Shortcuts</HintTarget>
      </div>
      <HintBubble className="w-36 rounded-md bg-foreground px-2 py-1.5 text-background before:content-['On_the_'_attr(data-side)_'_side']">
        <HintArrow className="size-2.5 rotate-45 bg-foreground data-[side=bottom]:-top-1 data-[side=left]:-right-1 data-[side=right]:-left-1 data-[side=top]:-bottom-1" />
      </HintBubble>
      <div className="grid w-full grid-cols-2 gap-2">
        <label className="flex flex-col gap-1">
          Side
          <select
            value={side}
            onChange={(event) => setSide(event.target.value as Side)}
            className="rounded-md border border-border bg-background px-1 py-0.5"
          >
            {sides.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1">
          Align
          <select
            value={align}
            onChange={(event) => setAlign(event.target.value as Align)}
            className="rounded-md border border-border bg-background px-1 py-0.5"
          >
            {aligns.map((value) => (
              <option key={value}>{value}</option>
            ))}
          </select>
        </label>
        {(["sideOffset", "alignOffset", "collisionPadding"] as const).map((key) => (
          <label key={key} className="flex flex-col gap-1">
            {key}
            <input
              type="range"
              min={key === "alignOffset" ? -40 : 0}
              max={40}
              value={offsets[key]}
              onChange={(event) => setOffsets({ ...offsets, [key]: Number(event.target.value) })}
            />
          </label>
        ))}
      </div>
    </Hint>
  )
}

export { Example, hint, Hint, HintArrow, HintBubble, type HintOptions, type HintState, HintTarget }
