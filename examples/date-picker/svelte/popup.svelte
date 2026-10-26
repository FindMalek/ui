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
    type DatePickerMonthChangeReason,
    type DatePickerOpenChangeReason,
  } from "@ui-sdk/svelte/date-picker"
  import { CalendarIcon, ChevronLeft, ChevronRight } from "@lucide/svelte"

  let log = $state("")
  let anchor: HTMLElement | undefined = $state()
  let container: HTMLElement | undefined = $state()

  function onOpenChange(open: boolean, details: { reason: DatePickerOpenChangeReason }) {
    log = `${open ? "Opened" : "Closed"} (${details.reason})`
  }

  function onOpenChangeComplete(open: boolean) {
    if (!open) log = `${log}, done`
  }

  function onMonthChange(month: string, details: { reason: DatePickerMonthChangeReason }) {
    log = `Showing ${month} (${details.reason})`
  }
</script>

<div class="flex max-w-full flex-col items-start gap-2">
  <DatePicker
    defaultOpen={false}
    presentation="auto"
    {container}
    {onOpenChange}
    {onOpenChangeComplete}
    {onMonthChange}
    class="flex max-w-full flex-col gap-2 text-sm leading-5 text-foreground data-disabled:opacity-50"
  >
    <div
      bind:this={anchor}
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
      side="top"
      align="end"
      sideOffset={8}
      alignOffset={-4}
      collisionPadding={16}
      {anchor}
      finalFocus="none"
      keepMounted
      class="data-[presentation=popover]:flex data-[presentation=popover]:min-h-[min(18rem,var(--available-height))] data-[presentation=popover]:max-h-(--available-height) data-[presentation=popover]:max-w-(--available-width) data-[presentation=popover]:origin-(--transform-origin) data-[presentation=popover]:flex-col data-[presentation=popover]:overflow-y-auto data-[presentation=popover]:rounded-3xl data-[presentation=popover]:border-0 data-[presentation=popover]:bg-popover data-[presentation=popover]:p-3 data-[presentation=popover]:text-sm data-[presentation=popover]:leading-5 data-[presentation=popover]:text-popover-foreground data-[presentation=popover]:shadow-lg data-[presentation=popover]:ring-1 data-[presentation=popover]:ring-foreground/5 data-[presentation=popover]:outline-none data-[presentation=popover]:transition-[opacity,scale] data-[presentation=popover]:duration-100 data-[presentation=popover]:data-starting-style:scale-95 data-[presentation=popover]:data-starting-style:opacity-0 data-[presentation=popover]:data-ending-style:scale-95 data-[presentation=popover]:data-ending-style:opacity-0 data-[presentation=sheet]:box-border data-[presentation=sheet]:h-[min(26rem,85dvh)] data-[presentation=sheet]:overflow-y-auto data-[presentation=sheet]:rounded-t-3xl data-[presentation=sheet]:border-0 data-[presentation=sheet]:bg-popover data-[presentation=sheet]:p-3 data-[presentation=sheet]:pb-[max(env(safe-area-inset-bottom),0.75rem)] data-[presentation=sheet]:text-sm data-[presentation=sheet]:leading-5 data-[presentation=sheet]:text-popover-foreground data-[presentation=sheet]:ring-1 data-[presentation=sheet]:ring-foreground/5 data-[presentation=sheet]:outline-none data-[presentation=sheet]:[--sheet-backdrop:rgb(0_0_0/0.3)] data-closed:hidden"
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
  <div bind:this={container}></div>
  <p class="m-0 min-h-5 text-sm leading-5 text-muted-foreground">{log || "Opens above, lined up with the end of the field."}</p>
</div>
