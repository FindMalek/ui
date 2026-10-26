import "@ui-sdk/web/toggle"
import { Bold, Bookmark, createElement, Heart, Italic, Star, Underline } from "lucide"

const formatting = [
  { value: "bold", label: "Bold", icon: Bold },
  { value: "italic", label: "Italic", icon: Italic },
  { value: "underline", label: "Underline", icon: Underline },
]

const favorites = [
  { value: "star", label: "Star", icon: Star },
  { value: "heart", label: "Heart", icon: Heart },
  { value: "bookmark", label: "Bookmark", icon: Bookmark },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-start gap-4">
      <ui-toggle-group multiple aria-label="Text formatting" class="flex w-fit items-center rounded-2xl">
        ${formatting
          .map(
            (item) => `
              <ui-toggle value="${item.value}">
                <button aria-label="${item.label}" class="inline-flex h-8 min-w-8 shrink-0 items-center justify-center border border-s-0 border-input bg-transparent px-2 text-sm font-medium whitespace-nowrap outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:z-10 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50 [ui-toggle:first-child>&]:rounded-s-2xl [ui-toggle:first-child>&]:border-s [ui-toggle:last-child>&]:rounded-e-2xl">
                  <ui-toggle-icon class="flex">${createElement(item.icon, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-toggle-icon>
                </button>
              </ui-toggle>
            `,
          )
          .join("")}
      </ui-toggle-group>
      <ui-toggle-group multiple aria-label="Favorites" class="flex w-fit items-center gap-2">
        ${favorites
          .map(
            (item) => `
              <ui-toggle value="${item.value}">
                <button class="group inline-flex h-8 min-w-8 shrink-0 items-center justify-center gap-1 rounded-2xl border border-input bg-transparent ps-2 pe-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50">
                  <ui-toggle-icon class="flex">${createElement(item.icon, { class: "size-4 group-data-pressed:fill-current", "aria-hidden": "true" }).outerHTML}</ui-toggle-icon>
                  ${item.label}
                </button>
              </ui-toggle>
            `,
          )
          .join("")}
      </ui-toggle-group>
    </div>
  `
}
