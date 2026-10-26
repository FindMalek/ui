import "@ui-sdk/web/toolbar"
import { registerShortcut } from "@ui-sdk/web"

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-full max-w-sm flex-col items-start gap-3">
      <textarea aria-label="Notes" placeholder="Type, then press Alt+F10" class="min-h-16 w-full min-w-0 resize-none rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm motion-reduce:transition-none"></textarea>
      <ui-toolbar aria-label="Notes" class="flex w-fit items-center gap-1 rounded-3xl border border-border p-1">
        ${["Bold", "Italic", "Link"]
          .map(
            (label) => `
              <ui-toolbar-button>
                <button value="${label.toLowerCase()}" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none">${label}</button>
              </ui-toolbar-button>
            `,
          )
          .join("")}
      </ui-toolbar>
      <div class="flex items-center gap-2">
        <button type="button" data-action="focus" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none">
          Focus toolbar
        </button>
        <output class="text-sm text-muted-foreground">Last: nothing yet</output>
      </div>
    </div>
  `
  const toolbar = root.querySelector("ui-toolbar")!
  const output = root.querySelector("output")!
  const off = registerShortcut("alt+f10", () => toolbar.api.focus(), { allowInInput: true })
  root.querySelector("[data-action=focus]")!.addEventListener("click", () => toolbar.api.focus())
  toolbar.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => (output.textContent = `Last: ${button.value}`))
  })
  return off
}

export { mount }
