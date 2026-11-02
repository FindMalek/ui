import * as React from "react"
import { formatNumber, stepBy, stepFromKey } from "@ui-sdk/core/number"

const range = { min: 0, max: 20, step: 0.5, largeStep: 5, smallStep: 0.1 }

function Example() {
  const [value, setValue] = React.useState(2.5)
  const text = formatNumber(value, "en-US", { maximumFractionDigits: 1 })
  return (
    <div className="flex w-72 flex-col gap-3 text-sm">
      <div className="flex items-center justify-between gap-3">
        <span id="quantity-label" className="text-muted-foreground">
          Quantity in kg
        </span>
        <div
          role="spinbutton"
          tabIndex={0}
          aria-labelledby="quantity-label"
          aria-valuemin={range.min}
          aria-valuemax={range.max}
          aria-valuenow={value}
          aria-valuetext={`${text} kg`}
          data-value
          onKeyDown={(event) => {
            const move = stepFromKey(event, { arrows: "vertical" })
            if (!move) return
            event.preventDefault()
            setValue(stepBy(value, move, range))
          }}
          className="h-9 w-24 rounded-md border border-input bg-background px-3 text-right font-mono leading-9 tabular-nums outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          {text}
        </div>
      </div>
      <p className="m-0 text-xs text-muted-foreground">
        Arrows step by 0.5, Shift by 5, Alt by 0.1. Home and End go to 0 and 20.
      </p>
    </div>
  )
}

export { Example }
