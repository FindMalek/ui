import "@ui-sdk/web/radio"
import "@ui-sdk/web/field"

const options = [
  { value: "email", label: "Email only" },
  { value: "sms", label: "SMS only" },
  { value: "both", label: "Both email and SMS" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <form class="flex w-full max-w-sm flex-col gap-4">
      <ui-field class="flex flex-col gap-3">
        <ui-field-label class="text-sm font-medium data-invalid:text-foreground">Notification preferences</ui-field-label>
        <ui-field-description class="-mt-1 text-sm text-muted-foreground">Choose how you want to receive notifications.</ui-field-description>
        <ui-radio-group class="flex flex-col gap-3" name="notifications" required>
          ${options
            .map(
              (option) => `
                <label class="flex w-fit items-center gap-3 text-sm">
                  <ui-radio class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none in-data-invalid:border-foreground in-data-invalid:ring-3 in-data-invalid:ring-foreground/20" value="${option.value}">
                    <ui-radio-indicator class="size-2 rounded-full bg-primary-foreground"></ui-radio-indicator>
                  </ui-radio>
                  ${option.label}
                </label>`,
            )
            .join("")}
        </ui-radio-group>
        <ui-field-error class="text-sm text-foreground">Choose how to receive notifications.</ui-field-error>
      </ui-field>
      <button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px motion-reduce:transform-none motion-reduce:transition-none self-start" type="submit">Save</button>
      <output class="text-sm text-muted-foreground" hidden></output>
    </form>
  `
  const form = root.querySelector("form")!
  const saved = root.querySelector("output")!
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    saved.hidden = false
    saved.textContent = `Saved: ${new FormData(form).get("notifications")}`
  })
}

export { mount }
