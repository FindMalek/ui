import "@ui-sdk/web/field"
import "@ui-sdk/web/radio"

const plans = [
  { value: "monthly", label: "Monthly", price: "$12 a month" },
  { value: "yearly", label: "Yearly", price: "$120 a year" },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-field-set>
      <fieldset class="flex w-full max-w-sm min-w-0 flex-col gap-3 text-foreground">
        <ui-field-legend class="m-0 p-0 text-base font-medium data-disabled:opacity-50">Billing period</ui-field-legend>
        <ui-radio-group name="period" default-value="monthly" class="flex min-w-0 flex-col gap-3 text-foreground">
          ${plans
            .map(
              (plan) => `
                <label class="flex cursor-default items-center justify-between gap-3 rounded-2xl border border-border p-3 text-sm hover:bg-input/40 has-data-checked:bg-input/30">
                  <span class="flex items-center gap-3">
                    <ui-radio value="${plan.value}" class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none">
                      <ui-radio-indicator class="size-2 rounded-full bg-primary-foreground"></ui-radio-indicator>
                    </ui-radio>
                    ${plan.label}
                  </span>
                  <span class="text-muted-foreground">${plan.price}</span>
                </label>`,
            )
            .join("")}
        </ui-radio-group>
      </fieldset>
    </ui-field-set>
  `
}
