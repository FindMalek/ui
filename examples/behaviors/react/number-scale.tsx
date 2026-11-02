import * as React from "react"
import { formatNumber, fractionOf, stepBy, stepFromKey, valueAt, type NumberScale } from "@ui-sdk/core/number"

const range = { min: 20, max: 20000 }
const positions = { min: 0, max: 1, step: 0.01, largeStep: 0.1 }

function Example() {
  const [scale, setScale] = React.useState<NumberScale>("log")
  const [value, setValue] = React.useState(1000)
  const fraction = fractionOf(value, range, scale)
  const text = formatNumber(value, "en-US", { notation: "compact", maximumFractionDigits: 1 }) + " Hz"
  return (
    <div className="flex w-80 flex-col gap-3 text-sm">
      <div className="flex gap-2" role="radiogroup" aria-label="Scale">
        {(["linear", "log"] as const).map((option) => (
          <button
            key={option}
            type="button"
            role="radio"
            aria-checked={scale === option}
            onClick={() => setScale(option)}
            className="rounded-md border border-border px-2 py-1 text-xs aria-checked:bg-foreground aria-checked:text-background"
          >
            {option === "log" ? "Log" : "Linear"}
          </button>
        ))}
      </div>
      <div
        role="slider"
        tabIndex={0}
        aria-label="Frequency"
        aria-valuemin={range.min}
        aria-valuemax={range.max}
        aria-valuenow={Math.round(value)}
        aria-valuetext={text}
        onKeyDown={(event) => {
          const move = stepFromKey(event)
          if (!move) return
          event.preventDefault()
          setValue(valueAt(stepBy(fraction, move, positions), range, scale))
        }}
        onPointerDown={(event) => {
          const box = event.currentTarget.getBoundingClientRect()
          setValue(valueAt((event.clientX - box.left) / box.width, range, scale))
        }}
        className="relative h-6 cursor-pointer rounded-full bg-muted outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-foreground/80"
          style={{ width: `${fraction * 100}%` }}
        />
      </div>
      <p className="m-0 flex justify-between font-mono text-xs">
        <span data-frequency>{text}</span>
        <span data-position className="text-muted-foreground">
          {Math.round(fraction * 100)}% along
        </span>
      </p>
    </div>
  )
}

export { Example }
