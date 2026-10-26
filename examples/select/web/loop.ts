import "@ui-sdk/web/select"
import { Check, ChevronDown, createElement } from "lucide"

const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "blueberry", label: "Blueberry" },
  { value: "grapes", label: "Grapes" },
  { value: "pineapple", label: "Pineapple" },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-select loop="false" default-value="pineapple">
      <div class="flex w-56 flex-col gap-2">
        <ui-select-label class="text-sm leading-none font-medium">Fruit</ui-select-label>
        <ui-select-trigger>
          <button class="flex h-8 w-full min-w-0 items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm outline-none transition-[color,box-shadow] duration-200 select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:opacity-50">
            <ui-select-value class="flex-1 truncate text-start"></ui-select-value>
            ${createElement(ChevronDown, { class: "size-4 shrink-0 text-muted-foreground", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-select-trigger>
        <p class="text-sm text-muted-foreground">Open it and press ArrowDown.</p>
      </div>
      <ui-select-content class="max-h-(--available-height) min-w-(--anchor-width) origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
        ${fruits
          .map(
            (fruit) => `
              <ui-select-item value="${fruit.value}" class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
                ${fruit.label}
                <ui-select-item-indicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">${createElement(Check, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-select-item-indicator>
              </ui-select-item>
            `,
          )
          .join("")}
      </ui-select-content>
    </ui-select>
  `
}
