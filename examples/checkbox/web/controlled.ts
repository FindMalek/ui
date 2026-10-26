import "@ui-sdk/web/checkbox"
import { Check, createElement } from "lucide"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-sm flex-col items-start gap-4">
      <label class="flex items-center gap-3 text-sm font-medium">
        <ui-checkbox class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none">
          <ui-checkbox-indicator class="grid place-content-center">
            ${createElement(Check, { class: "size-3.5", "aria-hidden": "true" }).outerHTML}
          </ui-checkbox-indicator>
        </ui-checkbox>
        Email me about product updates
      </label>
      <button type="button" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30">
        Toggle from outside
      </button>
      <output class="block min-h-5 text-sm text-muted-foreground">Checked: false</output>
    </div>
  `
  const control = root.querySelector("ui-checkbox")!
  root.querySelector("button")!.addEventListener("click", () => control.api.toggle())

  control.addEventListener("checkedchange", (event) => {
    const { value, reason } = (event as CustomEvent<{ value: boolean | "indeterminate"; reason: string }>)
      .detail
    root.querySelector("output")!.textContent = `Checked: ${value}, last change: ${reason}`
  })
}

export { mount }
