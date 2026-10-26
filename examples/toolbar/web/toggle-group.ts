import "@ui-sdk/web/toolbar"
import "@ui-sdk/web/toggle"
import { Bold, Code, createElement, Italic, Strikethrough } from "lucide"

const formats = [
  { value: "bold", label: "Bold", icon: Bold },
  { value: "italic", label: "Italic", icon: Italic },
  { value: "strikethrough", label: "Strikethrough", icon: Strikethrough },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-start gap-3">
      <ui-toolbar aria-label="Text" class="flex w-fit items-center gap-1 rounded-3xl border border-border p-1">
        <ui-toggle-group multiple value="bold" aria-label="Text style" class="flex items-center gap-1">
          ${formats
            .map(
              (format) => `
                <ui-toggle value="${format.value}">
                  <button aria-label="${format.label}" class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2 text-sm font-medium outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none">
                    ${createElement(format.icon, { class: "size-4", "aria-hidden": "true" }).outerHTML}
                  </button>
                </ui-toggle>
              `,
            )
            .join("")}
        </ui-toggle-group>
        <ui-toolbar-separator class="mx-1 h-5 w-px shrink-0 bg-border"></ui-toolbar-separator>
        <ui-toggle>
          <button aria-label="Code" class="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2 text-sm font-medium outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none">
            ${createElement(Code, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-toggle>
        <ui-toolbar-button>
          <button data-action="clear" class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none">Clear</button>
        </ui-toolbar-button>
      </ui-toolbar>
      <output class="text-sm text-muted-foreground">Style: bold</output>
    </div>
  `
  const group = root.querySelector("ui-toggle-group")!
  const setStyle = (style: string[]) => {
    group.setAttribute("value", style.join(","))
    root.querySelector("output")!.textContent = `Style: ${style.join(", ") || "none"}`
  }
  group.addEventListener("valuechange", (event) => setStyle(event.detail.value))
  root.querySelector("[data-action=clear]")!.addEventListener("click", () => setStyle([]))
}

export { mount }
