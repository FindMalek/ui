import "@ui-sdk/web/password-input"
import "@ui-sdk/web/field"
import { createElement, Eye, EyeOff } from "lucide"

function strength(password: string) {
  return [
    password.length >= 8,
    password.length >= 12,
    /[a-z]/.test(password) && /[A-Z]/.test(password),
    /\d/.test(password) && /[^a-zA-Z\d]/.test(password),
  ].filter(Boolean).length
}

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-field class="flex w-full max-w-sm flex-col gap-2">
      <ui-field-label class="text-sm leading-none font-medium data-disabled:opacity-50">New password</ui-field-label>
      <ui-password-input name="new-password" class="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50">
        <input autocomplete="new-password" class="h-full min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground md:text-sm" />
        <ui-password-input-toggle>
          <button aria-label="Show password" class="group inline-flex size-6 shrink-0 items-center justify-center rounded-xl text-muted-foreground outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:text-foreground data-disabled:pointer-events-none dark:hover:bg-muted/50">
            ${createElement(Eye, { class: "size-4 group-aria-pressed:hidden", "aria-hidden": "true" }).outerHTML}
            ${createElement(EyeOff, { class: "hidden size-4 group-aria-pressed:block", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-password-input-toggle>
      </ui-password-input>
      <div aria-hidden="true" data-meter class="flex gap-1">
        <div class="h-1 flex-1 rounded-full bg-muted data-on:bg-primary"></div>
        <div class="h-1 flex-1 rounded-full bg-muted data-on:bg-primary"></div>
        <div class="h-1 flex-1 rounded-full bg-muted data-on:bg-primary"></div>
        <div class="h-1 flex-1 rounded-full bg-muted data-on:bg-primary"></div>
      </div>
      <output class="text-sm text-muted-foreground">Type a password to rate it.</output>
    </ui-field>
  `
  const bars = root.querySelectorAll("[data-meter] > div")
  const output = root.querySelector("output")!
  root.querySelector("ui-password-input")!.addEventListener("valuechange", (event) => {
    const value = event.detail.value
    const score = strength(value)
    bars.forEach((bar, index) => bar.toggleAttribute("data-on", score > index))
    output.textContent = value
      ? `Strength: ${["Weak", "Weak", "Fair", "Good", "Strong"][score]} (${value.length} characters)`
      : "Type a password to rate it."
  })
}
