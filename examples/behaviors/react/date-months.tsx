import * as React from "react"
import {
  addMonths,
  addYears,
  daysInMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from "@ui-sdk/core/date"

function Example() {
  const [date, setDate] = React.useState("2026-01-31")
  const [weekStartsOn, setWeekStartsOn] = React.useState(1)
  const [year, month] = date.split("-").map(Number)
  const week = { start: startOfWeek(date, weekStartsOn), end: endOfWeek(date, weekStartsOn) }
  const steps: [string, string, () => string][] = [
    ["month-back", "− Month", () => addMonths(date, -1)],
    ["month", "+ Month", () => addMonths(date, 1)],
    ["year", "+ Year", () => addYears(date, 1)],
  ]
  return (
    <div className="flex w-72 flex-col gap-3 text-sm">
      <p data-date className="font-mono text-base">
        {date}
      </p>
      <div className="flex flex-wrap gap-1 text-xs">
        {steps.map(([value, text, next]) => (
          <button
            key={value}
            type="button"
            onClick={() => setDate(next())}
            className="rounded-md border border-border px-2 py-1"
          >
            {text}
          </button>
        ))}
        <button
          type="button"
          onClick={() => setDate("2026-01-31")}
          className="rounded-md border border-border px-2 py-1"
        >
          Reset
        </button>
      </div>
      <label className="flex items-center gap-2 text-xs">
        Weeks start on
        <select
          value={weekStartsOn}
          onChange={(event) => setWeekStartsOn(Number(event.target.value))}
          className="rounded-md border border-border bg-background px-1 py-0.5"
        >
          <option value={0}>Sunday</option>
          <option value={1}>Monday</option>
          <option value={6}>Saturday</option>
        </select>
      </label>
      <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-xs">
        <dt className="text-muted-foreground">Week</dt>
        <dd data-this-week>
          {week.start} to {week.end}
          {!isSameMonth(week.start, week.end) && ", across two months"}
        </dd>
        <dt className="text-muted-foreground">Month</dt>
        <dd data-this-month>
          {startOfMonth(date)} to {endOfMonth(date)}, {daysInMonth(year, month)} days
        </dd>
      </dl>
    </div>
  )
}

export { Example }
