import type { UiDatePickerElement } from "@ui-sdk/web"
import { datePickerAction, datePickerFixture as f, datePickerOptions } from "tests/fixtures/date-picker.ts"

async function mount(root: HTMLElement) {
  await import("@ui-sdk/web/date-picker")
  // Web components have no controlled mode: `default-value` sets where the value starts.
  const { lang, container, ...options } = datePickerOptions()
  const range = options.mode === "range"
  const preset = range ? f.rangePreset : f.preset
  const list = (value: string | string[] | null | undefined) =>
    Array.isArray(value) ? value.join(",") : value
  const attribute = (name: string, setting: string | number | boolean | null | undefined) =>
    setting === undefined || setting === null || setting === false
      ? ""
      : setting === true
        ? ` ${name}`
        : ` ${name}="${setting}"`
  const attributes = [
    attribute("today", f.today),
    attribute("mode", options.mode),
    attribute("name", range ? undefined : f.name),
    attribute("start-name", range ? "start" : undefined),
    attribute("end-name", range ? "end" : undefined),
    attribute("default-value", list(options.defaultValue)),
    attribute("min", options.min),
    attribute("max", options.max),
    attribute("unavailable", list(options.unavailable)),
    attribute("required", options.required),
    attribute("disabled", options.disabled),
    attribute("read-only", options.readOnly),
    attribute("close-on-select", options.closeOnSelect === false ? "false" : undefined),
    attribute("min-days", options.minDays),
    attribute("max-days", options.maxDays),
    attribute("container", container ? `#${container.id}` : undefined),
  ].join("")
  root.innerHTML = `
    <div class="fixture"${attribute("lang", lang)}>
      <button>Before</button>
      <form>
        <label for="date-start">${range ? "Stay" : "Due date"}</label>
        <ui-date-picker class="date-picker"${attributes}>
          <ui-date-picker-input><input id="date-start"${attribute("aria-label", range ? "Start date" : undefined)} /></ui-date-picker-input>
          ${range ? '<ui-date-picker-input end><input aria-label="End date" /></ui-date-picker-input>' : ""}
          <ui-date-picker-trigger></ui-date-picker-trigger>
          <ui-date-picker-clear><button>Clear</button></ui-date-picker-clear>
          <ui-date-picker-hint class="date-picker-hint"></ui-date-picker-hint>
          <ui-date-picker-content class="date-picker-content">
            <div class="calendar-header">
              <ui-calendar-previous><button class="calendar-step">‹</button></ui-calendar-previous>
              <ui-calendar-heading class="calendar-heading"></ui-calendar-heading>
              <ui-calendar-next><button class="calendar-step">›</button></ui-calendar-next>
            </div>
            <ui-calendar-grid class="calendar-grid"></ui-calendar-grid>
            <ui-date-picker-preset value="${list(preset.value)}"><button>${preset.label}</button></ui-date-picker-preset>
          </ui-date-picker-content>
        </ui-date-picker>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </form>
      <button>After</button>
      <output role="status" aria-label="Last action"></output>
      <output role="status" aria-label="Submitted"></output>
    </div>`
  const picker = root.querySelector<UiDatePickerElement>("ui-date-picker")!
  const form = root.querySelector("form")!
  const [action, submitted] = root.querySelectorAll("output")
  picker.addEventListener("valuechange", (event) => {
    action!.textContent = datePickerAction("value", event.detail.value, event.detail.reason)
  })
  picker.addEventListener("openchange", (event) => {
    action!.textContent = datePickerAction("open", event.detail.value, event.detail.reason)
  })
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    submitted!.textContent = JSON.stringify([...new FormData(form)])
  })
}

export { mount }
