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
  DatePickerPreset,
  DatePickerTrigger,
} from "@ui-sdk/solid/date-picker"

function Example() {
  return (
    <DatePicker
      mode="range"
      today="2026-10-16"
      class="flex max-w-full flex-col gap-2 text-sm leading-5 text-foreground data-disabled:opacity-50"
    >
      <div class="flex h-8 w-64 max-w-full items-center gap-0.5 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 has-[input[aria-invalid]]:border-foreground/50 has-[input[aria-invalid]]:ring-3 has-[input[aria-invalid]]:ring-foreground/10">
        <DatePickerInput
          aria-label="Check in"
          class="m-0 h-full w-full min-w-0 border-0 bg-transparent p-0 text-base leading-6 text-inherit tabular-nums outline-none placeholder:text-muted-foreground md:text-sm md:leading-5"
        />
        <span class="text-muted-foreground">–</span>
        <DatePickerInput
          end
          aria-label="Check out"
          class="m-0 h-full w-full min-w-0 border-0 bg-transparent p-0 text-base leading-6 text-inherit tabular-nums outline-none placeholder:text-muted-foreground md:text-sm md:leading-5"
        />
        <DatePickerTrigger class="inline-flex size-6 cursor-default shrink-0 items-center justify-center rounded-xl border border-transparent bg-transparent p-0 text-muted-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            class="pointer-events-none block size-4 shrink-0"
          >
            <path d="M8 2v3" />
            <path d="M16 2v3" />
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18" />
          </svg>
        </DatePickerTrigger>
      </div>
      <DatePickerContent class="flex min-h-[min(18rem,var(--available-height))] max-h-(--available-height) max-w-(--available-width) origin-(--transform-origin) flex-col overflow-y-auto rounded-3xl border-0 bg-popover p-3 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0">
        <div class="flex h-10 shrink-0 items-center justify-between gap-2 pb-2">
          <CalendarPrevious class="inline-flex size-8 cursor-default shrink-0 items-center justify-center rounded-2xl border border-transparent bg-transparent p-0 outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              class="pointer-events-none block size-4 shrink-0 rtl:rotate-180"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </CalendarPrevious>
          <CalendarHeading class="m-0 text-sm leading-5 font-medium" />
          <CalendarNext class="inline-flex size-8 cursor-default shrink-0 items-center justify-center rounded-2xl border border-transparent bg-transparent p-0 outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              class="pointer-events-none block size-4 shrink-0 rtl:rotate-180"
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
                class="size-8 p-0 text-center align-middle text-[0.8rem] leading-5 font-normal text-muted-foreground"
              />
            )}
          </CalendarWeekdays>
          <CalendarWeeks>
            {(cell) => (
              <CalendarDay
                value={cell.date}
                class="size-8 cursor-default rounded-2xl p-0 text-center align-middle text-sm leading-5 outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:relative focus-visible:z-10 focus-visible:ring-3 focus-visible:ring-ring/30 data-today:bg-muted data-today:font-medium data-outside:text-muted-foreground data-disabled:text-muted-foreground data-disabled:opacity-50 data-unavailable:line-through data-selected:bg-primary data-selected:text-primary-foreground data-range-start:not-data-range-end:rounded-e-none data-range-end:not-data-range-start:rounded-s-none data-range-middle:rounded-none data-range-middle:bg-muted data-range-middle:text-foreground"
              />
            )}
          </CalendarWeeks>
        </CalendarGrid>
        <div class="mt-2 flex flex-wrap gap-1 border-t border-border pt-2">
          <DatePickerPreset
            value={["2026-10-10", "2026-10-16"]}
            class="inline-flex h-8 cursor-default items-center justify-center rounded-2xl border border-transparent bg-transparent px-2.5 py-1 text-sm leading-5 outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-muted data-selected:font-medium disabled:pointer-events-none disabled:opacity-50"
          >
            Last 7 days
          </DatePickerPreset>
          <DatePickerPreset
            value={["2026-09-17", "2026-10-16"]}
            class="inline-flex h-8 cursor-default items-center justify-center rounded-2xl border border-transparent bg-transparent px-2.5 py-1 text-sm leading-5 outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-muted data-selected:font-medium disabled:pointer-events-none disabled:opacity-50"
          >
            Last 30 days
          </DatePickerPreset>
          <DatePickerPreset
            value={["2026-10-01", "2026-10-31"]}
            class="inline-flex h-8 cursor-default items-center justify-center rounded-2xl border border-transparent bg-transparent px-2.5 py-1 text-sm leading-5 outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-muted data-selected:font-medium disabled:pointer-events-none disabled:opacity-50"
          >
            This month
          </DatePickerPreset>
        </div>
      </DatePickerContent>
    </DatePicker>
  )
}

export { Example }
