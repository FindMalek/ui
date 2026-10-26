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
  type CalendarValue,
} from "@ui-sdk/solid/calendar"
import { createSignal } from "solid-js"

export function Example() {
  const [value, setValue] = createSignal<CalendarValue>("2026-10-16")
  const [month, setMonth] = createSignal("2026-10")
  const [reason, setReason] = createSignal("")
  return (
    <div>
      <Calendar
        value={value()}
        onValueChange={(next, details) => {
          setValue(next)
          setReason(details.reason)
        }}
        month={month()}
        onMonthChange={(next, details) => {
          setMonth(next)
          setReason(details.reason)
        }}
        class="w-fit rounded-3xl bg-background p-3 text-sm ring-1 ring-foreground/5 dark:ring-foreground/10"
      >
        <div class="flex h-8 items-center justify-between gap-2 pb-2">
          <CalendarPrevious class="inline-flex size-7 shrink-0 items-center justify-center rounded-2xl border border-transparent outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-muted/50">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              class="size-4 rtl:rotate-180"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </CalendarPrevious>
          <CalendarHeading class="text-sm font-medium" />
          <CalendarNext class="inline-flex size-7 shrink-0 items-center justify-center rounded-2xl border border-transparent outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-muted/50">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              class="size-4 rtl:rotate-180"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </CalendarNext>
        </div>
        <CalendarGrid class="border-collapse">
          <CalendarWeekdays>
            {(index) => (
              <CalendarWeekday
                index={index}
                class="size-8 p-0 text-[0.8rem] font-normal text-muted-foreground"
              />
            )}
          </CalendarWeekdays>
          <CalendarWeeks>
            {(cell) => (
              <CalendarDay
                value={cell.date}
                class="size-8 rounded-xl p-0 text-center text-sm outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-today:bg-muted data-today:font-medium data-outside:text-muted-foreground data-disabled:text-muted-foreground data-disabled:opacity-50 data-selected:bg-primary data-selected:text-primary-foreground data-selected:hover:bg-primary/90 dark:hover:bg-muted/50"
              />
            )}
          </CalendarWeeks>
        </CalendarGrid>
      </Calendar>
      <output class="mt-3 text-sm text-muted-foreground">
        {String(value())}, showing {month()} {reason() && `(${reason()})`}
      </output>
    </div>
  )
}
