import "@ui-sdk/web/checkbox"
import "@ui-sdk/web/switch"
import "@ui-sdk/web/radio"
import "@ui-sdk/web/field"
import { Check, createElement } from "lucide"

const planOptions = [
  { value: "hobby", title: "Hobby", description: "For personal projects." },
  { value: "pro", title: "Pro", description: "For teams that ship daily." },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <form class="flex w-full max-w-md min-w-0 flex-col gap-6 text-foreground">
      <ui-field class="flex min-w-0 flex-col gap-3 text-foreground">
        <ui-field-label class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">Name</ui-field-label>
        <input class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50" name="name" required autocomplete="name" placeholder="Ada Lovelace" />
        <div class="min-h-10"><ui-field-error class="m-0 text-sm text-foreground" match="valueMissing">Enter your name.</ui-field-error>
      </div></ui-field>
      <ui-field class="flex min-w-0 flex-col gap-3 text-foreground" name="email">
        <ui-field-label class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">Email</ui-field-label>
        <input class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50" type="email" required autocomplete="email" placeholder="m@example.com" />
        <div class="min-h-10"><ui-field-error class="m-0 text-sm text-foreground"></ui-field-error>
      </div></ui-field>
      <ui-field class="flex min-w-0 flex-col gap-3 text-foreground" name="password">
        <ui-field-label class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">Password</ui-field-label>
        <input class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50" type="password" required minlength="8" pattern=".*[0-9].*" autocomplete="new-password" />
        <ui-field-description class="m-0 text-sm text-muted-foreground">At least 8 characters, with a number.</ui-field-description>
        <div class="min-h-10"><ui-field-error class="m-0 text-sm text-foreground" match="valueMissing">Enter a password.</ui-field-error>
        <ui-field-error class="m-0 text-sm text-foreground" match="tooShort">Use at least 8 characters.</ui-field-error>
        <ui-field-error class="m-0 text-sm text-foreground" match="patternMismatch">Include at least one number.</ui-field-error>
      </div></ui-field>
      <ui-field class="flex min-w-0 flex-col gap-3 text-foreground">
        <ui-field-label class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">Plan</ui-field-label>
        <ui-radio-group class="grid grid-cols-1 gap-4 sm:grid-cols-2" name="plan" required>
          ${planOptions
            .map(
              (plan) => `
                <label class="flex cursor-default items-start gap-3 rounded-2xl border border-border p-3 text-sm hover:bg-input/40 has-data-checked:bg-input/30">
                  <ui-radio class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none" value="${plan.value}">
                    <ui-radio-indicator class="size-2 rounded-full bg-primary-foreground"></ui-radio-indicator>
                  </ui-radio>
                  <span class="flex min-w-0 flex-col gap-1">
                    <span class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">${plan.title}</span>
                    <span class="m-0 text-sm text-muted-foreground">${plan.description}</span>
                  </span>
                </label>`,
            )
            .join("")}
        </ui-radio-group>
        <div class="min-h-10"><ui-field-error class="m-0 text-sm text-foreground" match="valueMissing">Choose a plan.</ui-field-error>
      </div></ui-field>
      <ui-field class="flex flex-row items-center justify-between gap-4">
        <div class="flex min-w-0 flex-col gap-1.5">
          <ui-field-label class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">Send me updates</ui-field-label>
          <ui-field-description class="m-0 text-sm text-muted-foreground">Product news, about once a month.</ui-field-description>
        </div>
        <ui-switch class="relative inline-flex h-5 w-8 shrink-0 cursor-default appearance-none items-center rounded-2xl border-2 border-transparent bg-input/90 p-0 outline-none transition-colors after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50 motion-reduce:transition-none" name="updates" default-checked>
          <ui-switch-thumb class="pointer-events-none block size-4 shrink-0 rounded-2xl bg-background shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] motion-reduce:transition-none"></ui-switch-thumb>
        </ui-switch>
      </ui-field>
      <ui-field class="flex min-w-0 flex-col gap-3 text-foreground">
        <div class="flex items-center gap-3">
          <ui-checkbox class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none" name="terms" required>
            <ui-checkbox-indicator class="grid place-content-center">
              ${createElement(Check, { class: "size-3.5 shrink-0", "aria-hidden": "true" }).outerHTML}
            </ui-checkbox-indicator>
          </ui-checkbox>
          <ui-field-label class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">I accept the terms of service</ui-field-label>
        </div>
        <div class="min-h-10"><ui-field-error class="m-0 text-sm text-foreground" match="valueMissing">Accept the terms to continue.</ui-field-error>
      </div></ui-field>
      <div class="flex flex-wrap gap-2">
        <button type="submit" class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50">Submit</button>
        <button type="reset" class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50">Reset</button>
      </div>
      <output aria-label="Submitted" class="block h-36 overflow-y-auto rounded-2xl bg-muted p-3 font-mono text-xs whitespace-pre-wrap"></output>
    </form>
  `
  const form = root.querySelector("form")!
  const output = root.querySelector("output")!

  form.addEventListener("submit", (event) => {
    event.preventDefault()
    output.textContent = Array.from(new FormData(form).entries())
      .map(([key, value]) => `${key}: ${key === "password" ? "•".repeat(String(value).length) : value}`)
      .join("\n")
  })
  form.addEventListener("reset", () => {
    output.textContent = ""
  })
}
