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

  const priceOf = (date: string) => 80 + ((Number(date.slice(8)) * 7) % 5) * 10
</script>

<Calendar
  today="2026-10-16"
  defaultValue="2026-10-16"
  class="min-h-[23.125rem] w-fit max-w-full rounded-3xl border border-border bg-background p-3 text-sm leading-5 text-foreground"
>
  <div class="flex h-10 items-center justify-between gap-2 pb-2">
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
        <CalendarWeekday {index} class="size-10 p-0 text-center align-middle text-[0.8rem] leading-5 font-normal text-muted-foreground">
          {#snippet children(state)}
            <abbr
              title={state.name}
              class={state.weekday === 0 || state.weekday === 6 ? "font-medium no-underline" : "no-underline"}
            >
              {state.label}
            </abbr>
          {/snippet}
        </CalendarWeekday>
      {/snippet}
    </CalendarWeekdays>
    <CalendarWeeks>
      {#snippet children(cell)}
        <CalendarDay
          value={cell.date}
          class="group h-11 w-10 cursor-default rounded-2xl p-0 text-center align-middle text-sm leading-5 outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:relative focus-visible:z-10 focus-visible:ring-3 focus-visible:ring-ring/30 data-today:bg-muted data-today:font-medium data-outside:text-muted-foreground data-disabled:text-muted-foreground data-disabled:opacity-50 data-selected:bg-primary data-selected:text-primary-foreground data-selected:hover:bg-primary/90"
        >
          {#snippet children(state)}
            <span class="flex flex-col items-center leading-tight">
              <span class={state.today ? "font-semibold underline underline-offset-2" : undefined}>
                {state.label}
              </span>
              {#if !state.outside && !state.disabled}
                <span class={state.selected ? "text-[0.65rem]" : "text-[0.65rem] text-muted-foreground"}>
                  ${priceOf(state.date)}
                </span>
              {/if}
            </span>
          {/snippet}
        </CalendarDay>
      {/snippet}
    </CalendarWeeks>
  </CalendarGrid>
</Calendar>
