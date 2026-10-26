<script lang="ts">
  import {
    Calendar,
    CalendarDay,
    CalendarGrid,
    CalendarHeading,
    CalendarNext,
    CalendarPrevious,
    CalendarWeekday,
  } from "@ui-sdk/svelte/calendar"
  import { ChevronLeft, ChevronRight } from "@lucide/svelte"
</script>

<Calendar
  defaultValue="2026-10-16"
  class="w-fit rounded-3xl bg-background p-3 text-sm ring-1 ring-foreground/5 dark:ring-foreground/10"
>
  {#snippet children(state)}
    <div class="flex h-8 items-center justify-between gap-2 pb-2">
      <CalendarPrevious
        class="inline-flex size-7 shrink-0 items-center justify-center rounded-2xl border border-transparent outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-muted/50"
      >
        {#snippet render({ props, state: step })}
          <button {...props} title={`Show ${step.month}`}>
            <ChevronLeft class="size-4 rtl:rotate-180" />
          </button>
        {/snippet}
      </CalendarPrevious>
      <CalendarHeading class="text-sm font-medium">
        {#snippet children(heading)}{heading.label}{/snippet}
      </CalendarHeading>
      <CalendarNext>
        {#snippet render({ props, state: step })}
          <button
            {...props}
            class={step.disabled
              ? "invisible"
              : "inline-flex size-7 shrink-0 items-center justify-center rounded-2xl border border-transparent outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-muted/50"}
          >
            <ChevronRight class="size-4 rtl:rotate-180" />
          </button>
        {/snippet}
      </CalendarNext>
    </div>
    <CalendarGrid class="border-collapse">
      {#snippet children(grid)}
        <caption class="sr-only">{grid.label}</caption>
        <thead>
          <tr>
            {#each grid.weekdays as weekday, index (weekday)}
              <CalendarWeekday {index} class="size-8 p-0 text-[0.8rem] font-normal text-muted-foreground" />
            {/each}
          </tr>
        </thead>
        <tbody>
          {#each grid.weeks as week (week[0]!.date)}
            <tr>
              {#each week as cell (cell.date)}
                {#if cell.hidden}
                  <td></td>
                {:else}
                  <CalendarDay
                    value={cell.date}
                    class="size-8 rounded-xl p-0 text-center text-sm outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-today:bg-muted data-today:font-medium data-outside:text-muted-foreground data-disabled:text-muted-foreground data-disabled:opacity-50 data-selected:bg-primary data-selected:text-primary-foreground data-selected:hover:bg-primary/90 dark:hover:bg-muted/50"
                  />
                {/if}
              {/each}
            </tr>
          {/each}
        </tbody>
      {/snippet}
    </CalendarGrid>
    <p class="mt-3 text-sm text-muted-foreground">
      {state.mode}, {state.value ?? "nothing"} selected in {state.month}
      {state.disabled || state.readOnly ? "(locked)" : ""}
    </p>
  {/snippet}
</Calendar>
