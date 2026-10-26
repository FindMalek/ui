<script lang="ts">
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
  } from "@ui-sdk/svelte/calendar"
  import { ChevronLeft, ChevronRight } from "@lucide/svelte"
</script>

<div dir="rtl" lang="ar">
  <Calendar
    defaultValue="2026-10-16"
    class="w-fit rounded-3xl bg-background p-3 text-sm ring-1 ring-foreground/5 dark:ring-foreground/10"
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
            class="size-8 rounded-xl p-0 text-center text-sm outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-today:bg-muted data-today:font-medium data-outside:text-muted-foreground data-disabled:text-muted-foreground data-disabled:opacity-50 data-selected:bg-primary data-selected:text-primary-foreground data-selected:hover:bg-primary/90 dark:hover:bg-muted/50"
          />
        {/snippet}
      </CalendarWeeks>
    </CalendarGrid>
  </Calendar>
</div>
