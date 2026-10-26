import { createCalendarController } from "@ui-sdk/core/calendar"
import type { UiCalendarElement } from "@ui-sdk/web"
import { calendarAction, calendarFixture as f, calendarOptions } from "tests/fixtures/calendar.ts"

async function mount(root: HTMLElement) {
  await import("@ui-sdk/web/calendar")
  // Web components have no controlled mode: the element owns its state, and
  // `value` and `month` set where it starts.
  const { controlled, selects, lang, defaultValue, defaultMonth, unavailable, ...options } = calendarOptions()
  const value = Array.isArray(defaultValue) ? defaultValue.join(",") : defaultValue
  const attribute = (name: string, setting: string | number | boolean | null | undefined) =>
    setting === undefined || setting === null || setting === false
      ? ""
      : setting === true
        ? ` ${name}`
        : ` ${name}="${setting}"`
  const attributes = [
    attribute("today", f.today),
    attribute("mode", options.mode),
    attribute(controlled ? "value" : "default-value", value),
    attribute(controlled ? "month" : "default-month", defaultMonth),
    attribute("min", options.min),
    attribute("max", options.max),
    attribute("months", options.months),
    attribute("page-by", options.pageBy),
    attribute("week-starts-on", options.weekStartsOn),
    attribute("fixed-weeks", options.fixedWeeks),
    attribute("show-outside-days", options.showOutsideDays === false ? "false" : undefined),
    attribute("min-days", options.minDays),
    attribute("max-days", options.maxDays),
    attribute("allow-unavailable", options.allowUnavailable),
    attribute("disabled", options.disabled),
    attribute("read-only", options.readOnly),
  ].join("")
  const grids = Array.from(
    { length: options.months ?? 1 },
    (_, offset) => `<ui-calendar-grid class="calendar-grid" offset="${offset}"></ui-calendar-grid>`,
  ).join("")
  const selectParts = selects
    ? "<ui-calendar-month-select></ui-calendar-month-select><ui-calendar-year-select></ui-calendar-year-select>"
    : ""
  root.innerHTML = `
    <div class="fixture"${attribute("lang", lang)}>
      <button>Before</button>
      <ui-calendar class="calendar"${attributes}>
        <div class="calendar-header">
          <ui-calendar-previous><button class="calendar-step">‹</button></ui-calendar-previous>
          <ui-calendar-heading class="calendar-heading"></ui-calendar-heading>${selectParts}
          <ui-calendar-next><button class="calendar-step">›</button></ui-calendar-next>
        </div>
        <div class="calendar-months">${grids}</div>
      </ui-calendar>
      <button id="go">${f.controller.label}</button>
      <button>After</button>
      <output role="status" aria-label="Last action"></output>
    </div>`
  const calendar = root.querySelector<UiCalendarElement>("ui-calendar")!
  const status = root.querySelector("output")!
  const controller = createCalendarController()
  calendar.controller = controller
  if (unavailable) calendar.unavailable = unavailable
  calendar.addEventListener("valuechange", (event) => {
    status.textContent = calendarAction("value", event.detail.value, event.detail.reason)
  })
  calendar.addEventListener("monthchange", (event) => {
    status.textContent = calendarAction("month", event.detail.value, event.detail.reason)
  })
  root.querySelector("#go")!.addEventListener("click", () => controller.focus(f.controller.date))
}

export { mount }
