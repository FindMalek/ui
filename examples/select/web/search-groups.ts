import "@ui-sdk/web/select"
import { Check, ChevronDown, createElement } from "lucide"

const produce = [
  {
    label: "Fruits",
    items: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "orange", label: "Orange" },
    ],
  },
  {
    label: "Vegetables",
    items: [
      { value: "carrot", label: "Carrot" },
      { value: "broccoli", label: "Broccoli" },
      { value: "spinach", label: "Spinach" },
    ],
  },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-select placeholder="Select produce">
      <div class="flex w-64 max-w-full flex-col gap-2">
        <ui-select-label class="text-sm leading-none font-medium">Produce</ui-select-label>
        <ui-select-trigger>
          <button class="flex h-8 w-full min-w-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm leading-5 whitespace-nowrap transition-[color,box-shadow] duration-200 select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent">
            <ui-select-value class="min-w-0 flex-1 truncate text-start"></ui-select-value>
            ${createElement(ChevronDown, { class: "pointer-events-none block size-4 shrink-0 text-muted-foreground", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-select-trigger>
      </div>
      <ui-select-content class="flex max-h-[min(20rem,var(--available-height))] w-(--anchor-width) flex-col overflow-hidden box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none">
        <ui-select-input>
          <input aria-label="Search produce" placeholder="Search…" class="m-1 box-border h-8 min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5" />
        </ui-select-input>
        <ui-select-empty class="m-0 py-2 text-center text-sm leading-5 text-muted-foreground empty:hidden">Nothing found.</ui-select-empty>
        <ui-select-list class="min-h-0 overflow-y-auto p-1">
          ${produce
            .map(
              (group) => `
                <ui-select-group>
                  <ui-select-group-label class="px-2 py-1 text-xs leading-4 text-muted-foreground">${group.label}</ui-select-group-label>
                  ${group.items
                    .map(
                      (item) => `
                        <ui-select-item value="${item.value}" label="${item.label}" class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
                          <ui-select-item-text class="data-matched:text-muted-foreground [&_mark]:bg-transparent [&_mark]:font-semibold [&_mark]:text-foreground">${item.label}</ui-select-item-text>
                          <ui-select-item-indicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">${createElement(Check, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-select-item-indicator>
                        </ui-select-item>
                      `,
                    )
                    .join("")}
                </ui-select-group>
              `,
            )
            .join("")}
        </ui-select-list>
      </ui-select-content>
    </ui-select>
  `
}

export { mount }
