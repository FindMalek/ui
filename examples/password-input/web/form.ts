import "@ui-sdk/web/password-input"
import "@ui-sdk/web/field"
import { createElement, Eye, EyeOff } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-sm flex-col gap-4 text-foreground">
      <form id="sign-in" class="flex flex-col gap-4">
        <ui-field class="flex w-full flex-col gap-2">
          <ui-field-label class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">Email</ui-field-label>
          <input type="email" name="email" required autocomplete="username" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm" />
        </ui-field>
      </form>
      <ui-field class="flex w-full flex-col gap-2">
        <ui-field-label class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">Password</ui-field-label>
        <ui-password-input name="password" form="sign-in" required class="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-1 text-sm text-muted-foreground transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50 motion-reduce:transition-none">
          <input class="h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-base text-foreground outline-none placeholder:text-muted-foreground md:text-sm" />
          <ui-password-input-toggle>
            <button aria-label="Show password" class="group inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none aria-pressed:text-foreground data-disabled:pointer-events-none">
              ${createElement(Eye, { class: "size-4 group-aria-pressed:hidden", "aria-hidden": "true" }).outerHTML}
              ${createElement(EyeOff, { class: "hidden size-4 group-aria-pressed:block", "aria-hidden": "true" }).outerHTML}
            </button>
          </ui-password-input-toggle>
        </ui-password-input>
      </ui-field>
      <div class="flex flex-wrap gap-2">
        <button type="submit" form="sign-in" class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none">Sign in</button>
        <button type="reset" form="sign-in" class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none">Reset</button>
      </div>
      <output class="h-10 overflow-auto text-sm wrap-anywhere text-muted-foreground"></output>
    </div>
  `
  const form = root.querySelector("form")!
  const submitted = root.querySelector("output")!
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    const data = new FormData(form)
    const length = String(data.get("password")).length
    submitted.textContent = `Signed in as ${data.get("email")}, with a password of ${length} characters.`
  })
  form.addEventListener("reset", () => (submitted.textContent = ""))
}
