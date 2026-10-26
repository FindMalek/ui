import "@ui-sdk/web/calendar"
import { ChevronLeft, ChevronRight, createElement } from "lucide"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-calendar default-month="1990-06" min="1920-01-01" max="2026-10-16" class="min-h-72 w-fit max-w-full rounded-3xl border border-border bg-background p-3 text-sm leading-5 text-foreground">
      <div class="flex h-10 items-center justify-between gap-1 pb-2">
        <ui-calendar-previous>
          <button class="inline-flex size-8 cursor-default shrink-0 items-center justify-center rounded-2xl border border-transparent bg-transparent p-0 outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">
            ${createElement(ChevronLeft, { class: "pointer-events-none block size-4 shrink-0 rtl:rotate-180", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-calendar-previous>
        <ui-calendar-heading class="sr-only"></ui-calendar-heading>
        <div class="flex min-w-0 gap-1">
          <ui-calendar-month-select>
            <select class="h-8 min-w-0 cursor-default rounded-2xl border border-transparent bg-input/50 px-2 text-sm leading-5 font-medium outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"></select>
          </ui-calendar-month-select>
          <ui-calendar-year-select>
            <select class="h-8 min-w-0 cursor-default rounded-2xl border border-transparent bg-input/50 px-2 text-sm leading-5 font-medium outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 tabular-nums"></select>
          </ui-calendar-year-select>
        </div>
        <ui-calendar-next>
          <button class="inline-flex size-8 cursor-default shrink-0 items-center justify-center rounded-2xl border border-transparent bg-transparent p-0 outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">
            ${createElement(ChevronRight, { class: "pointer-events-none block size-4 shrink-0 rtl:rotate-180", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-calendar-next>
      </div>
      <ui-calendar-grid class="border-collapse">
        <ui-calendar-weekdays>
          <template><ui-calendar-weekday class="size-8 p-0 text-center align-middle text-[0.8rem] leading-5 font-normal text-muted-foreground"></ui-calendar-weekday></template>
        </ui-calendar-weekdays>
        <ui-calendar-weeks>
          <template><ui-calendar-day class="size-8 cursor-default rounded-2xl p-0 text-center align-middle text-sm leading-5 outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:relative focus-visible:z-10 focus-visible:ring-3 focus-visible:ring-ring/30 data-today:bg-muted data-today:font-medium data-outside:text-muted-foreground data-disabled:text-muted-foreground data-disabled:opacity-50 data-selected:bg-primary data-selected:text-primary-foreground data-selected:hover:bg-primary/90"></ui-calendar-day></template>
        </ui-calendar-weeks>
      </ui-calendar-grid>
    </ui-calendar>
  `
}

export { mount }
