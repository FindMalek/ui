import "@ui-sdk/web/select"
import { Check, ChevronDown, createElement } from "lucide"

const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "blueberry", label: "Blueberry" },
  { value: "grapes", label: "Grapes" },
  { value: "pineapple", label: "Pineapple" },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-64 max-w-full flex-col gap-3">
      <ui-select multiple default-value="apple, grapes" placeholder="Select fruits">
        <div class="flex flex-col gap-2">
          <ui-select-label class="text-sm leading-none font-medium">Fruits</ui-select-label>
          <ui-select-trigger>
            <button class="flex h-8 w-full min-w-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm leading-5 whitespace-nowrap transition-[color,box-shadow] duration-200 select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent">
              <ui-select-value class="min-w-0 flex-1 truncate text-start"><span></span></ui-select-value>
              ${createElement(ChevronDown, { class: "pointer-events-none block size-4 shrink-0 text-muted-foreground", "aria-hidden": "true" }).outerHTML}
            </button>
          </ui-select-trigger>
        </div>
        <ui-select-content class="max-h-(--available-height) scroll-py-1 overflow-x-hidden overflow-y-auto box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none">
          ${fruits
            .map(
              (fruit) => `
                <ui-select-item value="${fruit.value}" class="group relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
                  <span class="flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 group-data-selected:border-primary group-data-selected:bg-primary group-data-selected:text-primary-foreground">
                    <ui-select-item-indicator>${createElement(Check, { class: "pointer-events-none block size-3.5 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-select-item-indicator>
                  </span>
                  ${fruit.label}
                </ui-select-item>
              `,
            )
            .join("")}
        </ui-select-content>
      </ui-select>
      <output class="block min-h-10 text-sm leading-5 break-all text-muted-foreground"></output>
    </div>
  `
  const text = root.querySelector("ui-select-value > span")!
  const output = root.querySelector("output")!
  const show = (value: string[]) => {
    const labels = value.map((key) => fruits.find((fruit) => fruit.value === key)?.label ?? key)
    text.textContent =
      labels.length === 0
        ? "Select fruits"
        : labels.length > 2
          ? `${labels[0]} and ${labels.length - 1} more`
          : labels.join(", ")
    output.textContent = `Value: ${JSON.stringify(value)}`
  }
  show(["apple", "grapes"])
  root.querySelector("ui-select")!.addEventListener("valuechange", (event) => {
    show((event as CustomEvent<{ value: string[] }>).detail.value)
  })
}

export { mount }
