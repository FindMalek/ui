import {
  Calendar,
  CalendarDay,
  CalendarGrid,
  CalendarHeading,
  CalendarNext,
  CalendarPrevious,
  CalendarWeekday,
} from "@ui-sdk/react/calendar"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function Example() {
  return (
    <Calendar
      defaultValue="2026-10-16"
      className="w-fit rounded-3xl bg-background p-3 text-sm ring-1 ring-foreground/5 dark:ring-foreground/10"
    >
      {(state) => (
        <>
          <div className="flex h-8 items-center justify-between gap-2 pb-2">
            <CalendarPrevious
              render={(props, step) => <button {...props} title={`Show ${step.month}`} />}
              className="inline-flex size-7 shrink-0 items-center justify-center rounded-2xl border border-transparent outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-muted/50"
            >
              <ChevronLeft className="size-4 rtl:rotate-180" />
            </CalendarPrevious>
            <CalendarHeading className="text-sm font-medium">{(heading) => heading.label}</CalendarHeading>
            <CalendarNext
              className={(step) =>
                step.disabled
                  ? "invisible"
                  : "inline-flex size-7 shrink-0 items-center justify-center rounded-2xl border border-transparent outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-muted/50"
              }
            >
              <ChevronRight className="size-4 rtl:rotate-180" />
            </CalendarNext>
          </div>
          <CalendarGrid className="border-collapse">
            {(grid) => (
              <>
                <caption className="sr-only">{grid.label}</caption>
                <thead>
                  <tr>
                    {grid.weekdays.map((weekday, index) => (
                      <CalendarWeekday
                        key={weekday}
                        index={index}
                        className="size-8 p-0 text-[0.8rem] font-normal text-muted-foreground"
                      />
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {grid.weeks.map((week) => (
                    <tr key={week[0]!.date}>
                      {week.map((cell) =>
                        cell.hidden ? (
                          <td key={cell.date} />
                        ) : (
                          <CalendarDay
                            key={cell.date}
                            value={cell.date}
                            className="size-8 rounded-xl p-0 text-center text-sm outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-today:bg-muted data-today:font-medium data-outside:text-muted-foreground data-disabled:text-muted-foreground data-disabled:opacity-50 data-selected:bg-primary data-selected:text-primary-foreground data-selected:hover:bg-primary/90 dark:hover:bg-muted/50"
                          />
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </>
            )}
          </CalendarGrid>
          <p className="mt-3 text-sm text-muted-foreground">
            {state.mode}, {state.value ?? "nothing"} selected in {state.month}
            {state.disabled || state.readOnly ? " (locked)" : ""}
          </p>
        </>
      )}
    </Calendar>
  )
}
