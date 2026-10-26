import * as React from "react"
import { addDays, clampDate, daysBetween, formatDate, weekday } from "@ui-sdk/core/date"

const season = { min: "2026-11-01", max: "2027-01-31" }
const today = "2026-10-16"
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function Example() {
  const [picked, setPicked] = React.useState("2026-12-24")
  const [nights, setNights] = React.useState(3)
  const checkIn = clampDate(picked || today, season.min, season.max)
  const checkOut = addDays(checkIn, nights)
  return (
    <div className="flex w-72 flex-col gap-3 text-sm">
      <div className="flex gap-2">
        <label className="flex flex-1 flex-col gap-1 text-xs text-muted-foreground">
          Check-in
          <input
            type="date"
            value={picked}
            onChange={(event) => setPicked(event.target.value)}
            className="h-8 rounded-md border border-input bg-background px-2 text-sm text-foreground"
          />
        </label>
        <label className="flex w-20 flex-col gap-1 text-xs text-muted-foreground">
          Nights
          <input
            type="number"
            min={1}
            max={14}
            value={nights}
            onChange={(event) => setNights(Number(event.target.value) || 1)}
            className="h-8 rounded-md border border-input bg-background px-2 text-sm text-foreground"
          />
        </label>
      </div>
      <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs">
        <dt className="text-muted-foreground">Check-in</dt>
        <dd data-check-in>
          {days[weekday(checkIn)]}, {checkIn}
          {checkIn !== picked && " (moved into the season)"}
        </dd>
        <dt className="text-muted-foreground">Check-out</dt>
        <dd data-check-out>
          {days[weekday(checkOut)]}, {checkOut}
        </dd>
        <dt className="text-muted-foreground">From today</dt>
        <dd data-away>
          {daysBetween(today, checkIn)} days after{" "}
          {formatDate(today, "en-US", { month: "short", day: "numeric" })}
        </dd>
      </dl>
    </div>
  )
}

export { Example }
