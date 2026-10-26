import { weekday } from "@ui-sdk/core/date"
import "@ui-sdk/web/calendar"
import { ChevronLeft, ChevronRight, createElement } from "lucide"

const priceOf = (date: string) => 80 + ((Number(date.slice(8)) * 7) % 5) * 10

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-calendar today="2026-10-16" default-value="2026-10-16" class="min-h-[23.125rem] w-fit max-w-full rounded-3xl border border-border bg-background p-3 text-sm leading-5 text-foreground">
      <div class="flex h-10 items-center justify-between gap-2 pb-2">
        <ui-calendar-previous>
          <button class="inline-flex size-8 cursor-default shrink-0 items-center justify-center rounded-2xl border border-transparent bg-transparent p-0 outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">
            ${createElement(ChevronLeft, { class: "pointer-events-none block size-4 shrink-0 rtl:rotate-180", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-calendar-previous>
        <ui-calendar-heading class="m-0 text-sm leading-5 font-medium"></ui-calendar-heading>
        <ui-calendar-next>
          <button class="inline-flex size-8 cursor-default shrink-0 items-center justify-center rounded-2xl border border-transparent bg-transparent p-0 outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50">
            ${createElement(ChevronRight, { class: "pointer-events-none block size-4 shrink-0 rtl:rotate-180", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-calendar-next>
      </div>
      <ui-calendar-grid class="border-collapse">
        <ui-calendar-weekdays>
          <template><ui-calendar-weekday class="size-10 p-0 text-center align-middle text-[0.8rem] leading-5 font-normal text-muted-foreground"></ui-calendar-weekday></template>
        </ui-calendar-weekdays>
        <ui-calendar-weeks>
          <template>
            <ui-calendar-day class="group h-11 w-10 cursor-default rounded-2xl p-0 text-center align-middle text-sm leading-5 outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted focus-visible:relative focus-visible:z-10 focus-visible:ring-3 focus-visible:ring-ring/30 data-today:bg-muted data-today:font-medium data-outside:text-muted-foreground data-disabled:text-muted-foreground data-disabled:opacity-50 data-selected:bg-primary data-selected:text-primary-foreground data-selected:hover:bg-primary/90">
              <span class="flex flex-col items-center leading-tight">
                <span data-label class="group-data-today:font-semibold group-data-today:underline group-data-today:underline-offset-2"></span>
                <span data-price class="text-[0.65rem] text-muted-foreground group-data-selected:text-current group-data-outside:hidden group-data-disabled:hidden"></span>
              </span>
            </ui-calendar-day>
          </template>
        </ui-calendar-weeks>
      </ui-calendar-grid>
    </ui-calendar>
  `
  const calendar = root.querySelector("ui-calendar")!
  const decorate = () => {
    for (const day of calendar.querySelectorAll("ui-calendar-day")) {
      const label = day.querySelector("[data-label]")!
      if (label.textContent) continue
      const date = day.getAttribute("value")!
      label.textContent = String(Number(date.slice(8)))
      day.querySelector("[data-price]")!.textContent = `$${priceOf(date)}`
    }
    const firstWeek = calendar.querySelector("ui-calendar-week")
    calendar.querySelectorAll("ui-calendar-weekday").forEach((header, index) => {
      const name = header.getAttribute("aria-label")
      const date = firstWeek?.children[index]?.getAttribute("value")
      if (!name || !date || header.firstElementChild) return
      const abbr = document.createElement("abbr")
      abbr.title = name
      const isWeekend = weekday(date) === 0 || weekday(date) === 6
      abbr.className = isWeekend ? "font-medium no-underline" : "no-underline"
      abbr.append(...header.childNodes)
      header.append(abbr)
    })
  }
  const observer = new MutationObserver(decorate)
  observer.observe(calendar, { childList: true, subtree: true, attributeFilter: ["aria-label"] })
  decorate()
  return () => observer.disconnect()
}

export { mount }
