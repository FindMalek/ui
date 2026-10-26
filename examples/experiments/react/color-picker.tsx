import * as React from "react"
import {
  createArea,
  createChange,
  css,
  definePrimitive,
  type AreaReason,
  type ChangeDetails,
} from "@ui-sdk/core"
import {
  createParts,
  usePart,
  usePrimitive,
  type PartProps,
  type PrimitiveHandle,
} from "@ui-sdk/react/primitive"
import { Slider, SliderControl, SliderThumb, SliderTrack } from "@ui-sdk/react/slider"

type Hsv = { h: number; s: number; v: number }

type ColorPickerState = { color: Hsv }

type ColorPickerChangeReason = AreaReason | "hue" | "hex" | "swatch"

type ColorPickerOptions = {
  color?: Hsv
  defaultColor?: Hsv
  onColorChange?: (color: Hsv, details: ChangeDetails<ColorPickerChangeReason>) => void
}

function toRgb({ h, s, v }: Hsv) {
  const f = (n: number) => {
    const k = (n + h / 60) % 6
    return Math.round((v - v * s * Math.max(0, Math.min(k, 4 - k, 1))) * 255)
  }
  return [f(5), f(3), f(1)] as const
}

function toHex(color: Hsv) {
  return `#${toRgb(color)
    .map((n) => n.toString(16).padStart(2, "0"))
    .join("")}`
}

function fromHex(hex: string): Hsv | null {
  const match = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i.exec(hex.trim())
  if (!match) return null
  const full = match[1].length === 3 ? [...match[1]].map((c) => c + c).join("") : match[1]
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16) / 255)
  const max = Math.max(r, g, b)
  const delta = max - Math.min(r, g, b)
  const h = !delta
    ? 0
    : max === r
      ? ((g - b) / delta) % 6
      : max === g
        ? (b - r) / delta + 2
        : (r - g) / delta + 4
  return { h: (h * 60 + 360) % 360, s: max ? delta / max : 0, v: max }
}

type ColorPickerRootState = { color: Hsv; hex: string }
type ColorPickerSwatchState = { selected: boolean }

const colorPicker = /* @__PURE__ */ definePrimitive({
  name: "color-picker",
  options: { color: "value", defaultColor: "value", onColorChange: "callback" },
  state: (options: ColorPickerOptions): ColorPickerState => ({
    color: options.color ?? options.defaultColor ?? { h: 0, s: 0, v: 0 },
  }),
  sync: (options) => (options.color === undefined ? {} : { color: options.color }),
  controlled: ["color"],
  api: (context) => {
    const { store } = context
    const change = createChange(context)
    const area = createArea<ColorPickerState>(context, {
      value: (state) => ({ x: state.color.s, y: state.color.v }),
      set: (value, details) => change("color", { ...store.get().color, s: value.x, v: value.y }, details),
      x: () => ({ step: 0.01, label: "Saturation" }),
      y: () => ({ step: 0.01, label: "Brightness" }),
    })
    const api = {
      area,
      setColor: (color: Hsv, details: { reason: ColorPickerChangeReason; event?: Event }) =>
        change("color", color, details),
      setHue: (h: number, event?: Event) =>
        change("color", { ...store.get().color, h }, { reason: "hue", event }),
      setHex(hex: string, event?: Event) {
        const color = fromHex(hex)
        return !!color && change("color", color, { reason: "hex", event })
      },
      bindInput(el: HTMLInputElement) {
        const show = () => {
          if (el.ownerDocument.activeElement !== el) el.value = toHex(store.get().color)
        }
        show()
        el.addEventListener("blur", show)
        const unsubscribe = store.subscribe(show)
        return () => {
          el.removeEventListener("blur", show)
          unsubscribe()
        }
      },
    }
    return api
  },
  slots: (slot) => ({
    root: slot<{}, ColorPickerRootState>({
      state: (state) => ({ color: state.color, hex: toHex(state.color) }),
    }),
    area: slot({
      attrs: (state) => ({
        style: css({
          position: "relative",
          "touch-action": "none",
          "background-color": `hsl(${state.color.h} 100% 50%)`,
          "background-image":
            "linear-gradient(to top, #000, transparent), linear-gradient(to right, #fff, transparent)",
        }),
      }),
      on: { pointerdown: (event, { el, api }) => el && api.area.pointerdown(event, el) },
    }),
    thumb: slot({
      attrs: (state, { api }) => ({
        ...api.area.thumbAttrs(state),
        "aria-label": "Color",
        style: `${api.area.thumbStyle(state)};background:${toHex(state.color)};translate:-50% -50%`,
      }),
      on: { keydown: (event, { api }) => api.area.keydown(event) },
    }),
    input: slot({
      attrs: () => ({ "aria-label": "Hex", spellcheck: "false", autocomplete: "off" }),
      on: { input: (event, { el, api }) => el && api.setHex((el as HTMLInputElement).value, event) },
      bind: (el, { api }) => api.bindInput(el as HTMLInputElement),
    }),
    swatch: slot<{ value: string }, ColorPickerSwatchState>({
      props: { value: "string" },
      state: (state, { props }) => ({ selected: toHex(state.color) === props.value.toLowerCase() }),
      attrs: (state, { props }) => ({
        type: "button",
        "aria-label": props.value,
        "aria-pressed": String(toHex(state.color) === props.value.toLowerCase()),
        style: `background:${props.value}`,
      }),
      press: ({ api, props }, event) => api.setColor(fromHex(props.value)!, { reason: "swatch", event }),
    }),
  }),
})

const parts = createParts(colorPicker, {
  area: "div",
  thumb: "div",
  input: "input",
  swatch: "button",
})

const ColorPickerContext = React.createContext<PrimitiveHandle<typeof colorPicker> | null>(null)

function ColorPicker({
  color,
  defaultColor,
  onColorChange,
  ...props
}: ColorPickerOptions & PartProps<"div", ColorPickerRootState>) {
  const handle = usePrimitive(colorPicker, { color, defaultColor, onColorChange })
  return (
    <ColorPickerContext.Provider value={handle}>
      {usePart(handle, "root", {}, props)}
    </ColorPickerContext.Provider>
  )
}

const ColorPickerArea = parts.Area

const ColorPickerThumb = parts.Thumb

function ColorPickerHue(
  props: Omit<React.ComponentProps<typeof Slider>, "value" | "defaultValue" | "onValueChange">,
) {
  const handle = React.useContext(ColorPickerContext)
  if (!handle) throw new Error("ColorPickerHue must be used inside <ColorPicker>.")
  const render = (_root: object, state: ColorPickerRootState) => (
    <Slider
      {...props}
      value={state.color.h}
      min={0}
      max={359}
      onValueChange={(h) => handle.api.setHue(h as number)}
    />
  )
  return usePart(handle, "root", {}, { render })
}

const ColorPickerInput = parts.Input

const ColorPickerSwatch = parts.Swatch

const swatches = ["#ef4444", "#f59e0b", "#10b981", "#0ea5e9", "#6366f1", "#a855f7", "#ec4899", "#18181b"]

function Example() {
  return (
    <ColorPicker
      defaultColor={{ h: 262, s: 0.7, v: 0.85 }}
      className="flex w-64 flex-col gap-3 rounded-xl border border-border p-3"
    >
      {({ hex }) => (
        <>
          <ColorPickerArea className="h-40 w-full cursor-crosshair rounded-lg">
            <ColorPickerThumb className="size-4 rounded-full border-2 border-white shadow-[0_0_0_1px_rgb(0_0_0/0.2),0_1px_3px_rgb(0_0_0/0.3)] outline-none focus-visible:ring-4 focus-visible:ring-ring/40" />
          </ColorPickerArea>
          <ColorPickerHue className="w-full">
            <SliderControl className="flex w-full items-center py-1 select-none">
              <SliderTrack className="h-3 w-full rounded-full bg-[linear-gradient(to_right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00)]">
                <SliderThumb
                  aria-label="Hue"
                  className="block size-4 rounded-full border-2 border-white shadow-[0_0_0_1px_rgb(0_0_0/0.2)] has-focus-visible:ring-4 has-focus-visible:ring-ring/40"
                />
              </SliderTrack>
            </SliderControl>
          </ColorPickerHue>
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="size-8 shrink-0 rounded-md border border-border"
              style={{ background: hex }}
            />
            <ColorPickerInput className="h-8 min-w-0 flex-1 rounded-md border border-input bg-background px-2 font-mono text-sm uppercase outline-none focus-visible:ring-3 focus-visible:ring-ring/50" />
          </div>
          <div className="flex justify-between" role="group" aria-label="Swatches">
            {swatches.map((swatch) => (
              <ColorPickerSwatch
                key={swatch}
                value={swatch}
                className="size-6 rounded-full border border-border outline-none focus-visible:ring-3 focus-visible:ring-ring/50 aria-pressed:ring-2 aria-pressed:ring-foreground aria-pressed:ring-offset-2 aria-pressed:ring-offset-background"
              />
            ))}
          </div>
        </>
      )}
    </ColorPicker>
  )
}

export {
  ColorPicker,
  ColorPickerArea,
  ColorPickerHue,
  ColorPickerInput,
  ColorPickerSwatch,
  ColorPickerThumb,
  colorPicker,
  Example,
  fromHex,
  toHex,
  type ColorPickerChangeReason,
  type ColorPickerOptions,
  type ColorPickerRootState,
  type ColorPickerSwatchState,
  type Hsv,
}
