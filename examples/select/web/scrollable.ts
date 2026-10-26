import "@ui-sdk/web/select"
import { Check, ChevronDown, createElement } from "lucide"

const timezones = [
  {
    label: "North America",
    items: [
      { value: "est", label: "Eastern Standard Time" },
      { value: "cst", label: "Central Standard Time" },
      { value: "mst", label: "Mountain Standard Time" },
      { value: "pst", label: "Pacific Standard Time" },
      { value: "akst", label: "Alaska Standard Time" },
      { value: "hst", label: "Hawaii Standard Time" },
    ],
  },
  {
    label: "Europe & Africa",
    items: [
      { value: "gmt", label: "Greenwich Mean Time" },
      { value: "cet", label: "Central European Time" },
      { value: "eet", label: "Eastern European Time" },
      { value: "west", label: "Western European Summer Time" },
      { value: "cat", label: "Central Africa Time" },
      { value: "eat", label: "East Africa Time" },
    ],
  },
  {
    label: "Asia",
    items: [
      { value: "msk", label: "Moscow Time" },
      { value: "ist", label: "India Standard Time" },
      { value: "cst-china", label: "China Standard Time" },
      { value: "jst", label: "Japan Standard Time" },
      { value: "kst", label: "Korea Standard Time" },
      { value: "ist-indonesia", label: "Indonesia Central Standard Time" },
    ],
  },
  {
    label: "Australia & Pacific",
    items: [
      { value: "awst", label: "Australian Western Standard Time" },
      { value: "acst", label: "Australian Central Standard Time" },
      { value: "aest", label: "Australian Eastern Standard Time" },
      { value: "nzst", label: "New Zealand Standard Time" },
      { value: "fjt", label: "Fiji Time" },
    ],
  },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-select placeholder="Select a timezone">
      <ui-select-trigger>
        <button aria-label="Timezone" class="flex h-8 w-72 max-w-full min-w-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm leading-5 whitespace-nowrap transition-[color,box-shadow] duration-200 select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent">
          <ui-select-value class="min-w-0 flex-1 truncate text-start"></ui-select-value>
          ${createElement(ChevronDown, { class: "pointer-events-none block size-4 shrink-0 text-muted-foreground", "aria-hidden": "true" }).outerHTML}
        </button>
      </ui-select-trigger>
      <ui-select-content class="max-h-[min(20rem,var(--available-height))] scroll-py-1 overflow-x-hidden overflow-y-auto box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none overscroll-contain">
        ${timezones
          .map(
            (group) => `
              <ui-select-group>
                <ui-select-group-label class="sticky top-0 z-10 bg-popover px-2 py-1 text-xs leading-4 text-muted-foreground">${group.label}</ui-select-group-label>
                ${group.items
                  .map(
                    (item) => `
                      <ui-select-item value="${item.value}" class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
                        ${item.label}
                        <ui-select-item-indicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">${createElement(Check, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-select-item-indicator>
                      </ui-select-item>
                    `,
                  )
                  .join("")}
              </ui-select-group>
            `,
          )
          .join("")}
      </ui-select-content>
    </ui-select>
  `
}

export { mount }
