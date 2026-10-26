import * as React from "react"
import { formatDate, isSameMonth, monthGrid } from "@ui-sdk/core/date"

const months = ["2026-02-01", "2026-03-01", "2026-08-01"]

function Example() {
  const [fixedWeeks, setFixedWeeks] = React.useState(true)
  return (
    <div className="flex flex-col items-center gap-3 text-xs">
      <div className="flex items-start gap-4">
        {months.map((month) => (
          <div key={month} data-month={month} className="flex w-32 flex-col gap-1">
            <p className="text-center font-medium">
              {formatDate(month, "en-US", { month: "long", year: "numeric" })}
            </p>
            {monthGrid(month, { fixedWeeks }).map((week) => (
              <div key={week[0]} data-week className="grid grid-cols-7 text-center tabular-nums">
                {week.map((day) => (
                  <span
                    key={day}
                    className={isSameMonth(day, month) ? undefined : "text-muted-foreground/40"}
                  >
                    {Number(day.slice(8))}
                  </span>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
      <label className="flex items-center gap-1.5">
        <input
          type="checkbox"
          checked={fixedWeeks}
          onChange={(event) => setFixedWeeks(event.target.checked)}
        />
        Six weeks each
      </label>
    </div>
  )
}

export { Example }
