import * as React from "react"
import { dateParts, isISODate, isoDate, toISODate } from "@ui-sdk/core/date"

function Example() {
  const [fields, setFields] = React.useState({ year: "2026", month: "2", day: "30" })
  const [picked, setPicked] = React.useState("2026-10-16")
  const built = isoDate(Number(fields.year), Number(fields.month), Number(fields.day))
  const parts = dateParts(picked)
  return (
    <div className="flex w-72 flex-col gap-4 text-sm">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2">
          {(["year", "month", "day"] as const).map((field) => (
            <label key={field} className="flex w-full flex-col gap-1 text-xs text-muted-foreground">
              {field[0].toUpperCase() + field.slice(1)}
              <input
                inputMode="numeric"
                value={fields[field]}
                onChange={(event) => setFields({ ...fields, [field]: event.target.value })}
                className="h-8 rounded-md border border-input bg-background px-2 text-sm text-foreground"
              />
            </label>
          ))}
        </div>
        <p data-built className="font-mono text-xs">
          {built ?? "No such day"}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <input
            type="date"
            aria-label="Picked date"
            value={picked}
            onChange={(event) => setPicked(event.target.value)}
            className="h-8 flex-1 rounded-md border border-input bg-background px-2"
          />
          <button
            type="button"
            onClick={() => setPicked(toISODate(new Date())!)}
            className="h-8 rounded-md border border-border px-2 text-xs"
          >
            Today
          </button>
        </div>
        <p data-parts className="font-mono text-xs">
          {isISODate(picked) && parts
            ? `year ${parts.year}, month ${parts.month}, day ${parts.day}`
            : "Pick a date"}
        </p>
      </div>
    </div>
  )
}

export { Example }
