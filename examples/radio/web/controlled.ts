import "@ui-sdk/web/radio"

const plans = [
  { value: "starter", label: "Starter" },
  { value: "pro", label: "Pro" },
  { value: "team", label: "Team" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-sm flex-col items-start gap-4">
      <ui-radio-group class="flex flex-col gap-3" default-value="pro" aria-label="Plan">
        ${plans
          .map(
            (plan) => `
              <label class="flex w-fit items-center gap-3 text-sm font-medium">
                <ui-radio class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none" value="${plan.value}">
                  <ui-radio-indicator class="size-2 rounded-full bg-primary-foreground"></ui-radio-indicator>
                </ui-radio>
                ${plan.label}
              </label>`,
          )
          .join("")}
      </ui-radio-group>
      <button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px motion-reduce:transform-none motion-reduce:transition-none" type="button">Choose Team</button>
      <div class="flex flex-col gap-2">
        <output class="text-sm text-muted-foreground">Value: pro</output>
      </div>
    </div>
  `
  const radioGroup = root.querySelector("ui-radio-group")!
  root.querySelector("button")!.addEventListener("click", () => {
    radioGroup.value = "team"
  })
  radioGroup.addEventListener("valuechange", (event) => {
    const { value, reason } = (event as CustomEvent<{ value: string | null; reason: string }>).detail
    root.querySelector("output")!.textContent = `Value: ${value ?? "none"}, last change: ${reason}`
  })
}

export { mount }
