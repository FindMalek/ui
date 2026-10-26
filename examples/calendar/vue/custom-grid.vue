<script setup lang="ts">
import {
  Calendar,
  CalendarDay,
  CalendarGrid,
  CalendarHeading,
  CalendarNext,
  CalendarPrevious,
  CalendarWeekday,
} from "@ui-sdk/vue/calendar"
import { ChevronLeft, ChevronRight } from "@lucide/vue"
</script>

<template>
  <Calendar
    v-slot="{ state }"
    default-value="2026-10-16"
    class="w-fit rounded-3xl bg-background p-3 text-sm ring-1 ring-foreground/5 dark:ring-foreground/10"
  >
    <div class="flex h-8 items-center justify-between gap-2 pb-2">
      <CalendarPrevious
        class="inline-flex size-7 shrink-0 items-center justify-center rounded-2xl border border-transparent outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-muted/50"
      >
        <template #render="{ props, state: step }">
          <button v-bind="props" :title="`Show ${step.month}`">
            <ChevronLeft class="size-4 rtl:rotate-180" />
          </button>
        </template>
      </CalendarPrevious>
      <CalendarHeading v-slot="{ state: heading }" class="text-sm font-medium">
        {{ heading.label }}
      </CalendarHeading>
      <CalendarNext>
        <template #render="{ props, state: step }">
          <button
            v-bind="props"
            :class="
              step.disabled
                ? 'invisible'
                : 'inline-flex size-7 shrink-0 items-center justify-center rounded-2xl border border-transparent outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-muted/50'
            "
          >
            <ChevronRight class="size-4 rtl:rotate-180" />
          </button>
        </template>
      </CalendarNext>
    </div>
    <CalendarGrid v-slot="{ state: grid }" class="border-collapse">
      <caption class="sr-only">
        {{
          grid.label
        }}
      </caption>
      <thead>
        <tr>
          <CalendarWeekday
            v-for="(weekday, index) in grid.weekdays as number[]"
            :key="weekday"
            :index="index"
            class="size-8 p-0 text-[0.8rem] font-normal text-muted-foreground"
          />
        </tr>
      </thead>
      <tbody>
        <tr v-for="week in grid.weeks" :key="week[0].date">
          <template v-for="cell in week" :key="cell.date">
            <td v-if="cell.hidden"></td>
            <CalendarDay
              v-else
              :value="cell.date"
              class="size-8 rounded-xl p-0 text-center text-sm outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-today:bg-muted data-today:font-medium data-outside:text-muted-foreground data-disabled:text-muted-foreground data-disabled:opacity-50 data-selected:bg-primary data-selected:text-primary-foreground data-selected:hover:bg-primary/90 dark:hover:bg-muted/50"
            />
          </template>
        </tr>
      </tbody>
    </CalendarGrid>
    <p class="mt-3 text-sm text-muted-foreground">
      {{ state.mode }}, {{ state.value ?? "nothing" }} selected in {{ state.month
      }}{{ state.disabled || state.readOnly ? " (locked)" : "" }}
    </p>
  </Calendar>
</template>
