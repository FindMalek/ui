import "@ui-sdk/web/radio"

const plans = [
  { value: "monthly", label: "Monthly", price: "$9.99/month" },
  { value: "yearly", label: "Yearly", price: "$99.99/year" },
  { value: "lifetime", label: "Lifetime", price: "$299.99" },
]

function mount(root: HTMLElement) {
  const id = crypto.randomUUID()
  root.innerHTML = `
    <fieldset class="flex w-full max-w-sm flex-col gap-3">
      <legend class="mb-1.5 text-sm font-medium" id="${id}-subscription-legend">Subscription plan</legend>
      <p class="text-sm text-muted-foreground" id="${id}-subscription-hint">Yearly and lifetime plans offer significant savings.</p>
      <ui-radio-group
        class="flex flex-col gap-3"
        default-value="monthly"
        aria-labelledby="${id}-subscription-legend"
        aria-describedby="${id}-subscription-hint"
      >
        ${plans
          .map(
            (plan) => `
              <label class="flex w-fit items-center gap-3 text-sm">
                <ui-radio class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none" value="${plan.value}">
                  <ui-radio-indicator class="size-2 rounded-full bg-primary-foreground"></ui-radio-indicator>
                </ui-radio>
                ${plan.label} <span class="text-muted-foreground">${plan.price}</span>
              </label>`,
          )
          .join("")}
      </ui-radio-group>
    </fieldset>
  `
}

export { mount }
