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
    createDatePickerController,
    DatePicker,
    DatePickerContent,
    DatePickerHint,
    DatePickerInput,
    DatePickerTrigger,
  } from "@ui-sdk/svelte/date-picker"
  import { CalendarIcon, ChevronLeft, ChevronRight } from "@lucide/svelte"

  const controller = createDatePickerController()
</script>

<DatePicker {controller} defaultValue="2026-10-16" class="flex flex-col gap-2 data-disabled:opacity-50">
  <div
    class="flex h-8 w-44 items-center gap-0.5 rounded-2xl border border-transparent bg-input/50 pr-1 pl-2.5 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 has-[input[aria-invalid]]:border-destructive"
  >
    <DatePickerInput
      aria-label="Due date"
      class="h-full w-full min-w-0 bg-transparent text-base tabular-nums outline-none placeholder:text-muted-foreground md:text-sm"
    />
    <DatePickerTrigger
      class="flex size-6 shrink-0 items-center justify-center rounded-xl text-muted-foreground outline-none select-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none dark:hover:bg-muted/50"
    >
      <CalendarIcon class="size-4" />
    </DatePickerTrigger>
  </div>
  <DatePickerHint class="text-sm text-muted-foreground" />
  <DatePickerContent
    class="flex origin-(--transform-origin) flex-col rounded-3xl bg-popover p-3 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10"
  >
    <div class="flex h-8 items-center justify-between gap-2 pb-2">
      <CalendarPrevious
        class="inline-flex size-7 shrink-0 items-center justify-center rounded-2xl border border-transparent outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-muted/50"
      >
        <ChevronLeft class="size-4 rtl:rotate-180" />
      </CalendarPrevious>
      <CalendarHeading class="text-sm font-medium" />
      <CalendarNext
        class="inline-flex size-7 shrink-0 items-center justify-center rounded-2xl border border-transparent outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-muted/50"
      >
        <ChevronRight class="size-4 rtl:rotate-180" />
      </CalendarNext>
    </div>
    <CalendarGrid class="border-collapse">
      <CalendarWeekdays>
        {#snippet children(index)}
          <CalendarWeekday {index} class="size-8 p-0 text-[0.8rem] font-normal text-muted-foreground" />
        {/snippet}
      </CalendarWeekdays>
      <CalendarWeeks>
        {#snippet children(cell)}
          <CalendarDay
            value={cell.date}
            class="size-8 rounded-xl p-0 text-center text-sm outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-today:bg-muted data-today:font-medium data-outside:text-muted-foreground data-disabled:text-muted-foreground data-disabled:opacity-50 data-unavailable:line-through data-selected:bg-primary data-selected:text-primary-foreground data-selected:hover:bg-primary/90 dark:hover:bg-muted/50"
          />
        {/snippet}
      </CalendarWeeks>
    </CalendarGrid>
  </DatePickerContent>
  <div class="flex gap-1">
    <button
      type="button"
      onclick={() => controller.setValue("2026-12-25")}
      class="inline-flex h-7 items-center justify-center rounded-xl px-2.5 text-sm outline-none select-none transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-muted data-selected:font-medium dark:hover:bg-muted/50"
    >
      Christmas
    </button>
    <button
      type="button"
      onclick={() => controller.open()}
      class="inline-flex h-7 items-center justify-center rounded-xl px-2.5 text-sm outline-none select-none transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-muted data-selected:font-medium dark:hover:bg-muted/50"
    >
      Open
    </button>
  </div>
</DatePicker>
