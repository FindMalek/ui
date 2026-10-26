import "@ui-sdk/web/field"
import "@ui-sdk/web/input"
import { Eye, EyeOff, createElement } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-field name="password" class="flex w-full max-w-sm flex-col gap-2">
      <ui-field-label class="text-sm leading-none font-medium data-disabled:opacity-50 data-invalid:text-destructive">Password</ui-field-label>
      <ui-input-group class="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 px-2.5 text-sm text-muted-foreground transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50">
        <ui-input>
          <input type="password" autocomplete="current-password" class="h-full min-w-0 flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground md:text-sm" />
        </ui-input>
        <button type="button" aria-label="Show password" aria-pressed="false" class="-me-1.5 inline-flex size-6 shrink-0 items-center justify-center rounded-xl outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 dark:hover:bg-muted/50">
          ${createElement(Eye, { class: "size-4", "aria-hidden": "true" }).outerHTML}
        </button>
      </ui-input-group>
    </ui-field>
  `
  const input = root.querySelector("input")!
  const button = root.querySelector("button")!
  button.addEventListener("click", () => {
    const visible = input.type === "password"
    input.type = visible ? "text" : "password"
    button.setAttribute("aria-pressed", String(visible))
    button.replaceChildren(createElement(visible ? EyeOff : Eye, { class: "size-4", "aria-hidden": "true" }))
  })
}
