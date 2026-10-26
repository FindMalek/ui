"use client"

import {
  CalendarDay,
  CalendarGrid,
  CalendarHeading,
  CalendarNext,
  CalendarPrevious,
  CalendarWeekday,
  CalendarWeekdays,
  CalendarWeeks,
  DatePicker,
  DatePickerContent,
  DatePickerInput,
  DatePickerTrigger,
} from "@ui-sdk/react/date-picker"
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"
import * as React from "react"

function Example() {
  const [submitted, setSubmitted] = React.useState("")
  return (
    <div className="flex max-w-full flex-col items-start gap-2">
      <DatePicker
        mode="range"
        months={2}
        pageBy="page"
        minDays={2}
        maxDays={14}
        unavailable={["2026-10-24"]}
        allowUnavailable
        startName="checkin"
        endName="checkout"
        form="booking"
        defaultMonth="2026-10"
        className="flex max-w-full flex-col gap-2 text-sm leading-5 text-foreground data-disabled:opacity-50"
      >
        <div className="flex h-8 w-64 max-w-full items-center gap-0.5 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 has-[input[aria-invalid]]:border-foreground/50 has-[input[aria-invalid]]:ring-3 has-[input[aria-invalid]]:ring-foreground/10">
          <DatePickerInput
            aria-label="Check in"
            className="m-0 h-full w-full min-w-0 border-0 bg-transparent p-0 text-base leading-6 text-inherit tabular-nums outline-none placeholder:text-muted-foreground md:text-sm md:leading-5"
          />
          <span className="text-muted-foreground">–</span>
          <DatePickerInput
            end
            aria-label="Check out"
            className="m-0 h-full w-full min-w-0 border-0 bg-transparent p-0 text-base leading-6 text-inherit tabular-nums outline-none placeholder:text-muted-foreground md:text-sm md:leading-5"
          />
          <DatePickerTrigger className="inline-flex size-6 cursor-default shrink-0 items-center justify-center rounded-xl border border-transparent bg-transparent p-0 text-muted-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">
            <CalendarIcon aria-hidden="true" className="pointer-events-none block size-4 shrink-0" />
          </DatePickerTrigger>
        </div>
        <DatePickerContent className="flex min-h-[min(18rem,var(--available-height))] max-h-(--available-height) max-w-(--available-width) origin-(--transform-origin) flex-col overflow-y-auto rounded-3xl border-0 bg-popover p-3 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0">
          <div className="flex h-10 shrink-0 items-center justify-between gap-2 pb-2">
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
          <div className="flex flex-col gap-4 sm:flex-row">
            <CalendarGrid className="border-collapse">
              <CalendarWeekdays>
                {(index) => (
                  <CalendarWeekday
                    index={index}
                    className="size-8 p-0 text-center align-middle text-[0.8rem] leading-5 font-normal text-muted-foreground"
                  />
                )}
              </CalendarWeekdays>
              <CalendarWeeks>
                {(cell) => (
                  <CalendarDay
                    value={cell.date}
                    className="size-8 cursor-default rounded-2xl p-0 text-center align-middle text-sm leading-5 outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:relative focus-visible:z-10 focus-visible:ring-3 focus-visible:ring-ring/30 data-today:bg-muted data-today:font-medium data-outside:text-muted-foreground data-disabled:text-muted-foreground data-disabled:opacity-50 data-unavailable:line-through data-selected:bg-primary data-selected:text-primary-foreground data-range-start:not-data-range-end:rounded-e-none data-range-end:not-data-range-start:rounded-s-none data-range-middle:rounded-none data-range-middle:bg-muted data-range-middle:text-foreground"
                  />
                )}
              </CalendarWeeks>
            </CalendarGrid>
            <CalendarGrid offset={1} className="border-collapse">
              <CalendarWeekdays>
                {(index) => (
                  <CalendarWeekday
                    index={index}
                    className="size-8 p-0 text-center align-middle text-[0.8rem] leading-5 font-normal text-muted-foreground"
                  />
                )}
              </CalendarWeekdays>
              <CalendarWeeks>
                {(cell) => (
                  <CalendarDay
                    value={cell.date}
                    className="size-8 cursor-default rounded-2xl p-0 text-center align-middle text-sm leading-5 outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:relative focus-visible:z-10 focus-visible:ring-3 focus-visible:ring-ring/30 data-today:bg-muted data-today:font-medium data-outside:text-muted-foreground data-disabled:text-muted-foreground data-disabled:opacity-50 data-unavailable:line-through data-selected:bg-primary data-selected:text-primary-foreground data-range-start:not-data-range-end:rounded-e-none data-range-end:not-data-range-start:rounded-s-none data-range-middle:rounded-none data-range-middle:bg-muted data-range-middle:text-foreground"
                  />
                )}
              </CalendarWeeks>
            </CalendarGrid>
          </div>
        </DatePickerContent>
      </DatePicker>
      <form
        id="booking"
        onSubmit={(event) => {
          event.preventDefault()
          const data = [...new FormData(event.currentTarget)].map(([name, value]) => `${name}=${value}`)
          setSubmitted(data.join("&"))
        }}
      >
        <button
          type="submit"
          className="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50"
        >
          Book
        </button>
      </form>
      <p className="m-0 min-h-5 text-sm leading-5 text-muted-foreground">
        {submitted || "Ranges include 2 to 14 days, and may cross the booked 24th."}
      </p>
    </div>
  )
}

export { Example }
