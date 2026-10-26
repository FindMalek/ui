import "@ui-sdk/web/toggle"
import { Bookmark, createElement, Heart, Star } from "lucide"

const reactions = [
  { value: "star", label: "Favorite", icon: Star },
  { value: "heart", label: "Like", icon: Heart },
  { value: "bookmark", label: "Save", icon: Bookmark },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-toggle-group multiple aria-label="Reactions" class="flex w-fit items-center gap-1 rounded-3xl border border-transparent p-1 transition-colors has-data-pressed:border-border">
      ${reactions
        .map(
          (item) => `
            <ui-toggle value="${item.value}">
              <button aria-label="${item.label}" class="group inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted disabled:pointer-events-none data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none">
                <ui-toggle-icon class="flex">${createElement(item.icon, { class: "size-4 group-data-pressed:fill-current", "aria-hidden": "true" }).outerHTML}</ui-toggle-icon>
              </button>
            </ui-toggle>
          `,
        )
        .join("")}
    </ui-toggle-group>
  `
}

export { mount }
