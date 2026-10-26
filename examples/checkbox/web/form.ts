import "@ui-sdk/web/checkbox"
import { Check, createElement } from "lucide"

const formId = "checkbox-signup"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-sm flex-col gap-4">
      <form id="${formId}" class="flex flex-col gap-4 rounded-2xl border border-border p-4">
        <label class="flex items-center gap-3 text-sm font-medium">
          <ui-checkbox class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none" name="terms" value="yes" required>
            <ui-checkbox-indicator class="grid place-content-center">
              ${createElement(Check, { class: "size-3.5", "aria-hidden": "true" }).outerHTML}
            </ui-checkbox-indicator>
          </ui-checkbox>
          I agree to the terms
        </label>
        <div class="flex gap-2">
          <button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-colors hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30" type="submit">
            Submit
          </button>
          <button class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30" type="reset">
            Reset
          </button>
        </div>
      </form>
      <label class="flex items-center gap-3 text-sm font-medium">
        <ui-checkbox class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none" form="${formId}" name="newsletter" value="weekly" default-checked>
          <ui-checkbox-indicator class="grid place-content-center">
            ${createElement(Check, { class: "size-3.5", "aria-hidden": "true" }).outerHTML}
          </ui-checkbox-indicator>
        </ui-checkbox>
        Send me the weekly newsletter
      </label>
      <output class="block min-h-5 text-sm text-muted-foreground"></output>
    </div>
  `
  const form = root.querySelector("form")!
  const result = root.querySelector("output")!
  form.addEventListener("submit", (event) => {
    event.preventDefault()
    const entries = [...new FormData(form)].map(([name, value]) => `${name}=${value}`)
    result.textContent = `Submitted: ${entries.join(", ") || "nothing"}`
  })
  form.addEventListener("reset", () => (result.textContent = ""))
}

export { mount }
