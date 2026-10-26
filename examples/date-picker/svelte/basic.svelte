<script lang="ts">
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
    DatePickerHint,
    DatePickerInput,
    DatePickerTrigger,
  } from "@ui-sdk/svelte/date-picker"
  import { CalendarIcon, ChevronLeft, ChevronRight } from "@lucide/svelte"
</script>

<DatePicker defaultValue="2026-10-16" class="flex max-w-full flex-col gap-2 text-sm leading-5 text-foreground data-disabled:opacity-50">
  <div
    class="flex h-8 w-44 max-w-full items-center gap-0.5 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 has-[input[aria-invalid]]:border-foreground/50 has-[input[aria-invalid]]:ring-3 has-[input[aria-invalid]]:ring-foreground/10"
  >
    <DatePickerInput
      aria-label="Due date"
      class="m-0 h-full w-full min-w-0 border-0 bg-transparent p-0 text-base leading-6 text-inherit tabular-nums outline-none placeholder:text-muted-foreground md:text-sm md:leading-5"
    />
    <DatePickerTrigger
      class="inline-flex size-6 cursor-default shrink-0 items-center justify-center rounded-xl border border-transparent bg-transparent p-0 text-muted-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50"
    >
      <CalendarIcon aria-hidden="true" class="pointer-events-none block size-4 shrink-0" />
    </DatePickerTrigger>
  </div>
  <DatePickerHint class="m-0 min-h-5 text-sm leading-5 text-muted-foreground" />
  <DatePickerContent
    class="flex min-h-[min(18rem,var(--available-height))] max-h-(--available-height) max-w-(--available-width) origin-(--transform-origin) flex-col overflow-y-auto rounded-3xl border-0 bg-popover p-3 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0"
  >
    <div class="flex h-10 shrink-0 items-center justify-between gap-2 pb-2">
      <CalendarPrevious
        class="inline-flex size-8 cursor-default shrink-0 items-center justify-center rounded-2xl border border-transparent bg-transparent p-0 outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        <ChevronLeft aria-hidden="true" class="pointer-events-none block size-4 shrink-0 rtl:rotate-180" />
      </CalendarPrevious>
      <CalendarHeading class="m-0 text-sm leading-5 font-medium" />
      <CalendarNext
        class="inline-flex size-8 cursor-default shrink-0 items-center justify-center rounded-2xl border border-transparent bg-transparent p-0 outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50"
      >
        <ChevronRight aria-hidden="true" class="pointer-events-none block size-4 shrink-0 rtl:rotate-180" />
      </CalendarNext>
    </div>
    <CalendarGrid class="border-collapse">
      <CalendarWeekdays>
        {#snippet children(index)}
          <CalendarWeekday {index} class="size-8 p-0 text-center align-middle text-[0.8rem] leading-5 font-normal text-muted-foreground" />
        {/snippet}
      </CalendarWeekdays>
      <CalendarWeeks>
        {#snippet children(cell)}
          <CalendarDay
            value={cell.date}
            class="size-8 cursor-default rounded-2xl p-0 text-center align-middle text-sm leading-5 outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:relative focus-visible:z-10 focus-visible:ring-3 focus-visible:ring-ring/30 data-today:bg-muted data-today:font-medium data-outside:text-muted-foreground data-disabled:text-muted-foreground data-disabled:opacity-50 data-unavailable:line-through data-selected:bg-primary data-selected:text-primary-foreground data-selected:hover:bg-primary/90"
          />
        {/snippet}
      </CalendarWeeks>
    </CalendarGrid>
  </DatePickerContent>
</DatePicker>
