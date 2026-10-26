import "@ui-sdk/web/switch"
import { createElement, Moon, Sun } from "lucide"

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <label class="flex items-center gap-2 text-sm font-medium">
      <ui-switch class="group inline-flex h-5 w-8 shrink-0 items-center rounded-full border-2 border-transparent bg-input/90 outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary">
        <ui-switch-thumb class="flex size-4 items-center justify-center rounded-full bg-background text-foreground shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] dark:bg-foreground dark:text-background dark:data-checked:bg-primary-foreground dark:data-checked:text-foreground">
          ${createElement(Sun, { class: "size-3 group-data-checked:hidden", "aria-hidden": "true" }).outerHTML}
          ${createElement(Moon, { class: "hidden size-3 group-data-checked:block", "aria-hidden": "true" }).outerHTML}
        </ui-switch-thumb>
      </ui-switch>
      Dark mode
    </label>
  `
}
