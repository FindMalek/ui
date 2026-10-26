import "@ui-sdk/web/radio"

const plans = [
  { value: "free", label: "Free" },
  { value: "pro", label: "Pro" },
  { value: "team", label: "Team" },
]

function mount(root: HTMLElement) {
  const id = crypto.randomUUID()
  root.innerHTML = `
    <div class="flex flex-col gap-3">
      <div class="flex flex-col gap-1.5">
        <span class="text-sm font-medium" id="${id}-current-plan">Your plan</span>
        <p class="text-sm text-muted-foreground" id="${id}-current-plan-hint">Ask an admin to change plans.</p>
      </div>
      <ui-radio-group
        class="flex flex-col gap-3"
        default-value="pro"
        read-only
        aria-labelledby="${id}-current-plan"
        aria-describedby="${id}-current-plan-hint"
      >
        ${plans
          .map(
            (plan) => `
              <label class="flex w-fit items-center gap-3 text-sm">
                <ui-radio class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none" value="${plan.value}">
                  <ui-radio-indicator class="size-2 rounded-full bg-primary-foreground"></ui-radio-indicator>
                </ui-radio>
                ${plan.label}
              </label>`,
          )
          .join("")}
      </ui-radio-group>
    </div>
  `
}

export { mount }
