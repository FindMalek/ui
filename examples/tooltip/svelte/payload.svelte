<script lang="ts">
  import {
    createTooltipController,
    Tooltip,
    TooltipContent,
    type TooltipContentState,
    TooltipTrigger,
  } from "@ui-sdk/svelte/tooltip"

  const days = [
    { date: "Mon, Oct 5", count: 0 },
    { date: "Tue, Oct 6", count: 3 },
    { date: "Wed, Oct 7", count: 7 },
    { date: "Thu, Oct 8", count: 1 },
    { date: "Fri, Oct 9", count: 12 },
    { date: "Sat, Oct 10", count: 0 },
    { date: "Sun, Oct 11", count: 2 },
    { date: "Mon, Oct 12", count: 5 },
    { date: "Tue, Oct 13", count: 9 },
    { date: "Wed, Oct 14", count: 4 },
    { date: "Thu, Oct 15", count: 0 },
    { date: "Fri, Oct 16", count: 6 },
    { date: "Sat, Oct 17", count: 1 },
    { date: "Sun, Oct 18", count: 0 },
  ].map((day) => ({ ...day, level: day.count === 0 ? 0 : day.count < 3 ? 1 : day.count < 7 ? 2 : 3 }))

  type Day = (typeof days)[number]

  const contributions = (day: Day | undefined) =>
    !day ? "" : day.count === 0 ? "No contributions" : `${day.count} contribution${day.count === 1 ? "" : "s"}`

  const tooltip = createTooltipController<Day>()
</script>

<div class="flex flex-col items-center gap-2">
  <div class="grid grid-cols-7 gap-1">
    {#each days as day (day.date)}
      <TooltipTrigger
        controller={tooltip}
        payload={day}
        aria-label={day.date}
        data-level={day.level}
        class="size-6 cursor-default rounded-xl bg-muted outline-none focus-visible:ring-3 focus-visible:ring-ring/30 data-[level=1]:bg-primary/30 data-[level=2]:bg-primary/60 data-[level=3]:bg-primary"
      />
    {/each}
  </div>
  <p class="text-sm text-muted-foreground">Two weeks of contributions</p>
  <Tooltip
    controller={tooltip}
    delay={300}
  >
    <TooltipContent
      class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none"
    >
      {#snippet children(state: TooltipContentState<Day>)}{contributions(state.payload)}{/snippet}
    </TooltipContent>
  </Tooltip>
</div>
