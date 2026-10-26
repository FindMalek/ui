import "@ui-sdk/web/password-input"
import "@ui-sdk/web/field"
import { Check, createElement, Eye, EyeOff, X } from "lucide"

const rules = [
  { label: "At least 8 characters", test: (password: string) => password.length >= 8 },
  { label: "A number", test: (password: string) => /\d/.test(password) },
  {
    label: "An uppercase and a lowercase letter",
    test: (password: string) => /[a-z]/.test(password) && /[A-Z]/.test(password),
  },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-field class="flex w-full max-w-sm flex-col gap-2 text-foreground">
      <ui-field-label class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">Create a password</ui-field-label>
      <ui-password-input name="new-password" class="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-1 text-sm text-muted-foreground transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50 motion-reduce:transition-none">
        <input autocomplete="new-password" class="h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-base text-foreground outline-none placeholder:text-muted-foreground md:text-sm" />
        <ui-password-input-toggle>
          <button aria-label="Show password" class="group inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none aria-pressed:text-foreground data-disabled:pointer-events-none">
            ${createElement(Eye, { class: "size-4 group-aria-pressed:hidden", "aria-hidden": "true" }).outerHTML}
            ${createElement(EyeOff, { class: "hidden size-4 group-aria-pressed:block", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-password-input-toggle>
      </ui-password-input>
      <ul aria-label="Password requirements" class="flex flex-col gap-1 text-sm">
        ${rules
          .map(
            (rule) => `
              <li class="group flex items-center gap-2 text-muted-foreground data-met:text-foreground">
                ${createElement(X, { class: "size-4 group-data-met:hidden", "aria-hidden": "true" }).outerHTML}
                ${createElement(Check, { class: "hidden size-4 group-data-met:block", "aria-hidden": "true" }).outerHTML}
                <span data-rule-status class="sr-only">To do:</span>
                ${rule.label}
              </li>
            `,
          )
          .join("")}
      </ul>
    </ui-field>
  `
  const items = root.querySelectorAll("li")
  root.querySelector("ui-password-input")!.addEventListener("valuechange", (event) => {
    rules.forEach((rule, index) => {
      const met = rule.test(event.detail.value)
      items[index].toggleAttribute("data-met", met)
      items[index].querySelector("[data-rule-status]")!.textContent = met ? "Done:" : "To do:"
    })
  })
}
