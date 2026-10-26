import type { CalendarValue } from "@ui-sdk/core/calendar"
import { addMonths } from "@ui-sdk/core/date"
import "@ui-sdk/web/calendar"
import { ChevronLeft, ChevronRight, createElement } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-calendar default-value="2026-10-16" class="w-fit rounded-3xl bg-background p-3 text-sm ring-1 ring-foreground/5 dark:ring-foreground/10">
      <div class="flex h-8 items-center justify-between gap-2 pb-2">
        <ui-calendar-previous>
          <button class="inline-flex size-7 shrink-0 items-center justify-center rounded-2xl border border-transparent outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-muted/50">
            ${createElement(ChevronLeft, { class: "size-4 rtl:rotate-180", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-calendar-previous>
        <ui-calendar-heading class="text-sm font-medium"></ui-calendar-heading>
        <ui-calendar-next>
          <button class="inline-flex size-7 shrink-0 items-center justify-center rounded-2xl border border-transparent outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-muted/50 data-disabled:invisible">
            ${createElement(ChevronRight, { class: "size-4 rtl:rotate-180", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-calendar-next>
      </div>
      <ui-calendar-grid class="border-collapse">
        <ui-calendar-weekdays>
          <div>
            <ui-calendar-weekday index="0" class="size-8 p-0 text-center align-middle text-[0.8rem] font-normal text-muted-foreground"></ui-calendar-weekday>
            <ui-calendar-weekday index="1" class="size-8 p-0 text-center align-middle text-[0.8rem] font-normal text-muted-foreground"></ui-calendar-weekday>
            <ui-calendar-weekday index="2" class="size-8 p-0 text-center align-middle text-[0.8rem] font-normal text-muted-foreground"></ui-calendar-weekday>
            <ui-calendar-weekday index="3" class="size-8 p-0 text-center align-middle text-[0.8rem] font-normal text-muted-foreground"></ui-calendar-weekday>
            <ui-calendar-weekday index="4" class="size-8 p-0 text-center align-middle text-[0.8rem] font-normal text-muted-foreground"></ui-calendar-weekday>
            <ui-calendar-weekday index="5" class="size-8 p-0 text-center align-middle text-[0.8rem] font-normal text-muted-foreground"></ui-calendar-weekday>
            <ui-calendar-weekday index="6" class="size-8 p-0 text-center align-middle text-[0.8rem] font-normal text-muted-foreground"></ui-calendar-weekday>
          </div>
        </ui-calendar-weekdays>
        <ui-calendar-weeks>
          <template><ui-calendar-day class="size-8 rounded-xl p-0 text-center align-middle text-sm outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 data-today:bg-muted data-today:font-medium data-outside:text-muted-foreground data-disabled:text-muted-foreground data-disabled:opacity-50 data-selected:bg-primary data-selected:text-primary-foreground data-selected:hover:bg-primary/90 dark:hover:bg-muted/50"></ui-calendar-day></template>
        </ui-calendar-weeks>
      </ui-calendar-grid>
      <p class="mt-3 text-sm text-muted-foreground"></p>
    </ui-calendar>
  `
  const calendar = root.querySelector("ui-calendar")!
  const previous = root.querySelector("ui-calendar-previous button")!
  const summary = root.querySelector("p")!
  const show = (value: CalendarValue, month: string) => {
    const mode = calendar.getAttribute("mode") ?? "single"
    const locked = calendar.hasAttribute("disabled") || calendar.hasAttribute("read-only")
    summary.textContent = `${mode}, ${value ?? "nothing"} selected in ${month}${locked ? " (locked)" : ""}`
    previous.setAttribute("title", `Show ${addMonths(`${month}-01`, -1).slice(0, 7)}`)
  }
  show(calendar.value, calendar.month)
  calendar.addEventListener("valuechange", (event) => show(event.detail.value, calendar.month))
  calendar.addEventListener("monthchange", (event) => show(calendar.value, event.detail.value))
}
