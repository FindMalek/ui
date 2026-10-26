import "@ui-sdk/web/checkbox"
import { Check, createElement } from "lucide"

const days = [
  { value: "mon", label: "Mon" },
  { value: "tue", label: "Tue" },
  { value: "wed", label: "Wed" },
  { value: "thu", label: "Thu" },
  { value: "fri", label: "Fri" },
  { value: "sat", label: "Sat" },
  { value: "sun", label: "Sun" },
]

const weekdays = ["mon", "tue", "wed", "thu", "fri"]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-md flex-col gap-3">
      <h3 id="controlled-days" class="m-0 text-sm font-medium text-foreground">Working days</h3>
      <ui-checkbox-group class="flex flex-wrap gap-x-5 gap-y-3" aria-labelledby="controlled-days" default-value="mon,tue">
        ${days
          .map(
            (day) => `
              <label class="flex w-fit items-center gap-3 text-sm">
                <ui-checkbox class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none" value="${day.value}">
                  <ui-checkbox-indicator class="grid place-content-center">
                    ${createElement(Check, { class: "size-3.5", "aria-hidden": "true" }).outerHTML}
                  </ui-checkbox-indicator>
                </ui-checkbox>
                ${day.label}
              </label>
            `,
          )
          .join("")}
      </ui-checkbox-group>
      <div class="mt-1 flex flex-wrap gap-2">
        <button type="button" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30" data-action="weekdays">
          Select weekdays
        </button>
        <button type="button" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30" data-action="clear">
          Clear
        </button>
      </div>

      <output class="block min-h-5 text-sm text-muted-foreground">Value: ["mon","tue"]</output>
    </div>
  `
  const schedule = root.querySelector("ui-checkbox-group")!
  root.querySelector('[data-action="weekdays"]')!.addEventListener("click", () => (schedule.value = weekdays))
  root.querySelector('[data-action="clear"]')!.addEventListener("click", () => (schedule.value = []))

  schedule.addEventListener("valuechange", (event) => {
    const { value, reason } = (event as CustomEvent<{ value: string[]; reason: string }>).detail
    root.querySelector("output")!.textContent = `Value: ${JSON.stringify(value)}, last change: ${reason}`
  })
}

export { mount }
