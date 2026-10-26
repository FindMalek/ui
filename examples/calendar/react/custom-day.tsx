"use client"

import {
  Calendar,
  CalendarDay,
  CalendarGrid,
  CalendarHeading,
  CalendarNext,
  CalendarPrevious,
  CalendarWeekday,
  CalendarWeekdays,
  CalendarWeeks,
} from "@ui-sdk/react/calendar"
import { ChevronLeft, ChevronRight } from "lucide-react"

const priceOf = (date: string) => 80 + ((Number(date.slice(8)) * 7) % 5) * 10

function Example() {
  return (
    <Calendar
      today="2026-10-16"
      defaultValue="2026-10-16"
      className="min-h-[23.125rem] w-fit max-w-full rounded-3xl border border-border bg-background p-3 text-sm leading-5 text-foreground"
    >
      <div className="flex h-10 items-center justify-between gap-2 pb-2">
        <CalendarPrevious className="inline-flex size-8 cursor-default shrink-0 items-center justify-center rounded-2xl border border-transparent bg-transparent p-0 outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">
          <ChevronLeft
            aria-hidden="true"
            className="pointer-events-none block size-4 shrink-0 rtl:rotate-180"
          />
        </CalendarPrevious>
        <CalendarHeading className="m-0 text-sm leading-5 font-medium" />
        <CalendarNext className="inline-flex size-8 cursor-default shrink-0 items-center justify-center rounded-2xl border border-transparent bg-transparent p-0 outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">
          <ChevronRight
            aria-hidden="true"
            className="pointer-events-none block size-4 shrink-0 rtl:rotate-180"
          />
        </CalendarNext>
      </div>
      <CalendarGrid className="border-collapse">
        <CalendarWeekdays>
          {(index) => (
            <CalendarWeekday
              index={index}
              className="size-10 p-0 text-center align-middle text-[0.8rem] leading-5 font-normal text-muted-foreground"
            >
              {(state) => (
                <abbr
                  title={state.name}
                  className={
                    state.weekday === 0 || state.weekday === 6 ? "font-medium no-underline" : "no-underline"
                  }
                >
                  {state.label}
                </abbr>
              )}
            </CalendarWeekday>
          )}
        </CalendarWeekdays>
        <CalendarWeeks>
          {(cell) => (
            <CalendarDay
              value={cell.date}
              className="group h-11 w-10 cursor-default rounded-2xl p-0 text-center align-middle text-sm leading-5 outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:relative focus-visible:z-10 focus-visible:ring-3 focus-visible:ring-ring/30 data-today:bg-muted data-today:font-medium data-outside:text-muted-foreground data-disabled:text-muted-foreground data-disabled:opacity-50 data-selected:bg-primary data-selected:text-primary-foreground data-selected:hover:bg-primary/90"
            >
              {(state) => (
                <span className="flex flex-col items-center leading-tight">
                  <span className={state.today ? "font-semibold underline underline-offset-2" : undefined}>
                    {state.label}
                  </span>
                  {!state.outside && !state.disabled && (
                    <span
                      className={state.selected ? "text-[0.65rem]" : "text-[0.65rem] text-muted-foreground"}
                    >
                      ${priceOf(state.date)}
                    </span>
                  )}
                </span>
              )}
            </CalendarDay>
          )}
        </CalendarWeeks>
      </CalendarGrid>
    </Calendar>
  )
}

export { Example }
