import "@ui-sdk/web/password-input"
import "@ui-sdk/web/field"
import { createElement, Eye, EyeOff } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-sm flex-col gap-3 text-foreground">
      <ui-field class="flex w-full flex-col gap-2">
        <ui-field-label class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">Password</ui-field-label>
        <ui-password-input name="password" class="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-1 text-sm text-muted-foreground transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50 motion-reduce:transition-none">
          <input class="h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-base text-foreground outline-none placeholder:text-muted-foreground md:text-sm" />
          <ui-password-input-toggle>
            <button aria-label="Show password" class="group inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none aria-pressed:text-foreground data-disabled:pointer-events-none">
              ${createElement(Eye, { class: "size-4 group-aria-pressed:hidden", "aria-hidden": "true" }).outerHTML}
              ${createElement(EyeOff, { class: "hidden size-4 group-aria-pressed:block", "aria-hidden": "true" }).outerHTML}
            </button>
          </ui-password-input-toggle>
        </ui-password-input>
      </ui-field>
      <output class="min-h-5 text-sm text-muted-foreground">The password is hidden.</output>
    </div>
  `
  const output = root.querySelector("output")!
  root.querySelector("ui-password-input")!.addEventListener("visiblechange", (event) => {
    const { value, reason } = event.detail
    output.textContent = `${value ? "The password is shown" : "The password is hidden"} (${reason}).`
  })
}
