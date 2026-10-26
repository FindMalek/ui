import "@ui-sdk/web/toggle"
import { Bold, createElement, Italic, Underline } from "lucide"

const formatting = [
  { value: "bold", label: "Bold", icon: Bold },
  { value: "italic", label: "Italic", icon: Italic },
  { value: "underline", label: "Underline", icon: Underline },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-start gap-3">
      <ui-toggle-group multiple default-value="bold" aria-label="Text formatting" class="flex w-fit items-center gap-1">
        ${formatting
          .map(
            (item) => `
              <ui-toggle value="${item.value}">
                <button aria-label="${item.label}" class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted disabled:pointer-events-none data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none">
                  <ui-toggle-icon class="flex">${createElement(item.icon, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-toggle-icon>
                </button>
              </ui-toggle>
            `,
          )
          .join("")}
      </ui-toggle-group>
      <button type="button" data-action="clear" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px motion-reduce:transform-none motion-reduce:transition-none">Clear</button>
      <output class="text-sm text-muted-foreground">Pressed: bold</output>
    </div>
  `
  const group = root.querySelector("ui-toggle-group")!
  root.querySelector('[data-action="clear"]')!.addEventListener("click", () => group.api.setValue([]))
  group.addEventListener("valuechange", (event) => {
    const { value, reason } = event.detail
    root.querySelector("output")!.textContent =
      `Pressed: ${value.length ? value.join(", ") : "none"}, last change: ${reason}`
  })
}

export { mount }
