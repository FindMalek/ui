import "@ui-sdk/web/select"
import { Check, ChevronDown, X, createElement } from "lucide"

const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "blueberry", label: "Blueberry" },
  { value: "grapes", label: "Grapes" },
  { value: "pineapple", label: "Pineapple" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-56 max-w-full flex-col gap-3">
      <ui-select default-value="banana" placeholder="Select a fruit">
        <div class="flex flex-col gap-2">
          <ui-select-label class="text-sm leading-none font-medium">Fruit</ui-select-label>
          <div class="relative">
            <ui-select-trigger>
              <button class="flex h-8 w-full min-w-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm leading-5 whitespace-nowrap transition-[color,box-shadow] duration-200 select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent">
                <ui-select-value class="min-w-0 flex-1 truncate pe-6 text-start"></ui-select-value>
                ${createElement(ChevronDown, { class: "pointer-events-none block size-4 shrink-0 text-muted-foreground", "aria-hidden": "true" }).outerHTML}
              </button>
            </ui-select-trigger>
            <ui-select-clear>
              <button aria-label="Clear fruit" class="absolute end-8 top-1/2 flex size-6 -translate-y-1/2 cursor-default items-center justify-center rounded-xl border border-transparent bg-transparent p-0 text-muted-foreground transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30">
                ${createElement(X, { class: "pointer-events-none block size-3.5 shrink-0", "aria-hidden": "true" }).outerHTML}
              </button>
            </ui-select-clear>
          </div>
        </div>
        <ui-select-content class="max-h-(--available-height) scroll-py-1 overflow-x-hidden overflow-y-auto box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none">
          ${fruits
            .map(
              (fruit) => `
                <ui-select-item value="${fruit.value}" class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
                  ${fruit.label}
                  <ui-select-item-indicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">${createElement(Check, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-select-item-indicator>
                </ui-select-item>
              `,
            )
            .join("")}
        </ui-select-content>
      </ui-select>
      <output class="m-0 min-h-5 text-sm leading-5 text-muted-foreground">Value: "banana"</output>
    </div>
  `
  root.querySelector("ui-select")!.addEventListener("valuechange", (event) => {
    const { value } = (event as CustomEvent<{ value: string | null }>).detail
    root.querySelector("output")!.textContent = `Value: ${JSON.stringify(value)}`
  })
}

export { mount }
