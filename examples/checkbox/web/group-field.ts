import "@ui-sdk/web/checkbox"
import "@ui-sdk/web/field"
import { Check, createElement } from "lucide"

const channels = [
  { value: "email", label: "Email" },
  { value: "sms", label: "SMS" },
  { value: "push", label: "Push notifications" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <form class="flex w-full max-w-xs flex-col gap-4">
      <ui-field class="flex flex-col gap-3">
        <ui-field-label class="m-0 text-sm font-medium text-foreground">Notifications</ui-field-label>
        <ui-field-description class="m-0 -mt-2 text-sm text-muted-foreground">
          Choose how we tell you about your orders.
        </ui-field-description>
        <ui-checkbox-group class="flex flex-col gap-3" name="notifications" required>
          ${channels
            .map(
              (channel) => `
                <label class="flex w-fit items-center gap-3 text-sm">
                  <ui-checkbox class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none" value="${channel.value}">
                    <ui-checkbox-indicator class="grid place-content-center">
                      ${createElement(Check, { class: "size-3.5", "aria-hidden": "true" }).outerHTML}
                    </ui-checkbox-indicator>
                  </ui-checkbox>
                  ${channel.label}
                </label>
              `,
            )
            .join("")}
        </ui-checkbox-group>
        <div class="min-h-10"><ui-field-error class="m-0 text-sm text-muted-foreground">Choose at least one way to be notified.</ui-field-error></div>
      </ui-field>
      <button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-colors hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 self-start" type="submit">
        Save
      </button>
      <output class="block min-h-5 text-sm text-muted-foreground"></output>
    </form>
  `
  const form = root.querySelector("form")!
  const result = root.querySelector("output")!
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    result.textContent = `notifications: ${new FormData(form).getAll("notifications").join(", ")}`
  })
}

export { mount }
