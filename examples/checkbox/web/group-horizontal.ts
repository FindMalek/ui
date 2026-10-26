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

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-md flex-col gap-3">
      <h3 id="horizontal-days" class="text-sm font-medium">Repeat on</h3>
      <ui-checkbox-group class="flex flex-wrap gap-x-5 gap-y-3" aria-labelledby="horizontal-days" default-value="mon,wed,fri">
        ${days
          .map(
            (day) => `
              <label class="flex w-fit items-center gap-3 text-sm">
                <ui-checkbox class="flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-disabled:opacity-50" value="${day.value}">
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
    </div>
  `
}
