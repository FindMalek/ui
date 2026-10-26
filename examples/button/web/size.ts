import "@ui-sdk/web/button"
import { Bookmark, createElement, Heart, Star } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex flex-col items-start gap-4">
      <div class="flex items-center gap-2">
        <ui-button>
          <button class="inline-flex h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">Small</button>
        </ui-button>
        <ui-button>
          <button aria-label="Bookmark" class="inline-flex size-7 shrink-0 items-center justify-center rounded-2xl border border-border bg-background bg-clip-padding outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">
            ${createElement(Bookmark, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-button>
      </div>
      <div class="flex items-center gap-2">
        <ui-button>
          <button class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">Default</button>
        </ui-button>
        <ui-button>
          <button aria-label="Favorite" class="inline-flex size-8 shrink-0 items-center justify-center rounded-2xl border border-border bg-background bg-clip-padding outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">
            ${createElement(Heart, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-button>
      </div>
      <div class="flex items-center gap-2">
        <ui-button>
          <button class="inline-flex h-9 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-4 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">Large</button>
        </ui-button>
        <ui-button>
          <button aria-label="Star" class="inline-flex size-9 shrink-0 items-center justify-center rounded-2xl border border-border bg-background bg-clip-padding outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">
            ${createElement(Star, { class: "size-4", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-button>
      </div>
    </div>
  `
}
