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

export function Example() {
  return (
    <div dir="rtl" lang="ar">
      <Calendar
        defaultValue="2026-10-16"
        className="w-fit rounded-3xl bg-background p-3 text-sm ring-1 ring-foreground/5 dark:ring-foreground/10"
      >
        <div className="flex h-8 items-center justify-between gap-2 pb-2">
          <CalendarPrevious className="inline-flex size-7 shrink-0 items-center justify-center rounded-2xl border border-transparent outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-muted/50">
            <ChevronLeft className="size-4 rtl:rotate-180" />
          </CalendarPrevious>
          <CalendarHeading className="text-sm font-medium" />
          <CalendarNext className="inline-flex size-7 shrink-0 items-center justify-center rounded-2xl border border-transparent outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-muted/50">
            <ChevronRight className="size-4 rtl:rotate-180" />
          </CalendarNext>
        </div>
        <CalendarGrid className="border-collapse">
          <CalendarWeekdays>
            {(index) => (
              <CalendarWeekday
                index={index}
                className="size-8 p-0 text-[0.8rem] font-normal text-muted-foreground"
              />
            )}
          </CalendarWeekdays>
          <CalendarWeeks>
            {(cell) => (
              <CalendarDay
                value={cell.date}
                className="size-8 rounded-xl p-0 text-center text-sm outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-today:bg-muted data-today:font-medium data-outside:text-muted-foreground data-disabled:text-muted-foreground data-disabled:opacity-50 data-selected:bg-primary data-selected:text-primary-foreground data-selected:hover:bg-primary/90 dark:hover:bg-muted/50"
              />
            )}
          </CalendarWeeks>
        </CalendarGrid>
      </Calendar>
    </div>
  )
}
