import "@ui-sdk/web/select"
import type { ListData } from "@ui-sdk/core/select"
import { Check, ChevronDown, createElement } from "lucide"

const sizeGroups: ListData = [
  { type: "group", label: "Common", items: ["Small", "Medium", "Large"] },
  { type: "group", label: "Extended", items: ["Extra small", "Extra large"] },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-select name="size" default-value="Medium">
      ${sizeGroups
        .map((group) =>
          typeof group === "object" && "items" in group
            ? `<optgroup label="${group.label}">${group.items.map((size) => `<option>${size}</option>`).join("")}</optgroup>`
            : "",
        )
        .join("")}
      <div class="flex w-56 flex-col gap-2">
        <ui-select-label class="text-sm leading-none font-medium">Size</ui-select-label>
        <ui-select-trigger>
          <button class="flex h-8 w-full min-w-0 items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm outline-none transition-[color,box-shadow] duration-200 select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:opacity-50">
            <ui-select-value class="flex-1 truncate text-start"></ui-select-value>
            ${createElement(ChevronDown, { class: "size-4 shrink-0 text-muted-foreground", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-select-trigger>
      </div>
      <template>
        <ui-select-content class="max-h-(--available-height) min-w-(--anchor-width) origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
          <ui-select-group>
            <ui-select-group-label class="px-2 py-1 text-xs text-muted-foreground"></ui-select-group-label>
            <ui-select-item class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
              <ui-select-item-indicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">${createElement(Check, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-select-item-indicator>
            </ui-select-item>
          </ui-select-group>
        </ui-select-content>
      </template>
    </ui-select>
  `
  const select = root.querySelector("ui-select")
}
