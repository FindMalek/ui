import "@ui-sdk/web/radio"
import "@ui-sdk/web/field"

const plans = [
  { value: "monthly", label: "Monthly ($9.99/month)" },
  { value: "yearly", label: "Yearly ($99.99/year)" },
  { value: "lifetime", label: "Lifetime ($299.99)" },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-field class="flex w-full max-w-sm flex-col gap-3">
      <ui-field-label class="text-sm leading-snug font-medium">Subscription plan</ui-field-label>
      <ui-field-description class="text-sm text-muted-foreground">Yearly and lifetime plans offer significant savings.</ui-field-description>
      <ui-radio-group class="flex flex-col gap-3" name="plan" default-value="monthly">
        ${plans
          .map(
            (plan) => `
              <label class="flex w-fit items-center gap-3 text-sm">
                <ui-radio class="flex size-4 shrink-0 items-center justify-center rounded-full border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50" value="${plan.value}">
                  <ui-radio-indicator class="size-2 rounded-full bg-primary-foreground"></ui-radio-indicator>
                </ui-radio>
                ${plan.label}
              </label>`,
          )
          .join("")}
      </ui-radio-group>
    </ui-field>
  `
}
