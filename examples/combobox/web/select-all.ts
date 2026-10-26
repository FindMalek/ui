import "@ui-sdk/web/combobox"
import { Check, createElement, Minus } from "lucide"

const timezones = [
  {
    label: "Americas",
    items: [
      { value: "America/New_York", label: "New York" },
      { value: "America/Chicago", label: "Chicago" },
      { value: "America/Denver", label: "Denver" },
      { value: "America/Los_Angeles", label: "Los Angeles" },
      { value: "America/Sao_Paulo", label: "São Paulo" },
    ],
  },
  {
    label: "Europe",
    items: [
      { value: "Europe/London", label: "London" },
      { value: "Europe/Paris", label: "Paris" },
      { value: "Europe/Berlin", label: "Berlin" },
      { value: "Europe/Madrid", label: "Madrid" },
    ],
  },
  {
    label: "Asia & Pacific",
    items: [
      { value: "Asia/Tokyo", label: "Tokyo" },
      { value: "Asia/Singapore", label: "Singapore" },
      { value: "Asia/Kolkata", label: "Kolkata" },
      { value: "Australia/Sydney", label: "Sydney" },
    ],
  },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-combobox multiple default-value="Europe/Paris">
      <div class="flex w-80 max-w-full flex-col gap-2">
        <ui-combobox-label class="text-sm leading-none font-medium">Timezones</ui-combobox-label>
        <ui-combobox-chips class="box-border flex min-h-8 w-full flex-wrap items-center gap-1 rounded-2xl border border-transparent bg-input/50 bg-clip-padding p-1 text-sm leading-5 transition-[color,box-shadow] duration-200 focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/30">
          <ui-combobox-input>
            <input placeholder="Add timezones" class="h-6 min-w-16 flex-1 border-0 bg-transparent px-1.5 py-0 text-base leading-6 text-inherit outline-none placeholder:text-muted-foreground md:text-sm md:leading-5" />
          </ui-combobox-input>
        </ui-combobox-chips>
      </div>
      <ui-combobox-content class="max-h-[min(18rem,var(--available-height))] scroll-py-1 overflow-x-hidden overflow-y-auto box-border w-(--anchor-width) min-w-36 rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none origin-(--transform-origin) transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0">
        <ui-combobox-empty class="m-0 py-2 text-center text-sm leading-5 text-muted-foreground empty:hidden">No timezones found.</ui-combobox-empty>
        <ui-combobox-list>
          <ui-combobox-select-all class="group relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 font-medium">
            <span class="flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 group-data-checked:border-primary group-data-checked:bg-primary group-data-checked:text-primary-foreground group-data-indeterminate:border-primary group-data-indeterminate:bg-primary group-data-indeterminate:text-primary-foreground">
              ${createElement(Check, { class: "hidden size-3.5 group-data-checked:block", "aria-hidden": "true" }).outerHTML}
              ${createElement(Minus, { class: "hidden size-3.5 group-data-indeterminate:block", "aria-hidden": "true" }).outerHTML}
            </span>
            Select all
          </ui-combobox-select-all>
          ${timezones
            .map(
              (group) => `
                <ui-combobox-group>
                  <ui-combobox-group-label class="px-2 py-1 text-xs leading-4 text-muted-foreground">${group.label}</ui-combobox-group-label>
                  <ui-combobox-select-all class="group relative flex min-h-7 w-full cursor-default items-center justify-between gap-2 rounded-xl py-1.5 px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:hidden text-muted-foreground">
                    <span class="group-data-checked:hidden">Select all in ${group.label}</span>
                    <span class="hidden group-data-checked:inline">Clear ${group.label}</span>
                  </ui-combobox-select-all>
                  ${group.items
                    .map(
                      (zone) => `
                        <ui-combobox-item value="${zone.value}" label="${zone.label}" class="group relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50">
                          <span class="flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 group-data-selected:border-primary group-data-selected:bg-primary group-data-selected:text-primary-foreground">
                            <ui-combobox-item-indicator>${createElement(Check, { class: "pointer-events-none block size-3.5 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-combobox-item-indicator>
                          </span>
                          ${zone.label}
                        </ui-combobox-item>
                      `,
                    )
                    .join("")}
                </ui-combobox-group>
              `,
            )
            .join("")}
        </ui-combobox-list>
      </ui-combobox-content>
      <template>
        <ui-combobox-chip class="box-border flex h-5.25 w-fit items-center justify-center gap-1 rounded-2xl bg-input ps-1.5 pe-0.5 text-xs leading-4 font-medium whitespace-nowrap text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30">
          <ui-combobox-chip-remove><button type="button" class="-ms-0.5 flex size-4.5 cursor-default items-center justify-center rounded-full border-0 bg-transparent p-0 text-inherit opacity-50 outline-none hover:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none">×</button></ui-combobox-chip-remove>
        </ui-combobox-chip>
      </template>
    </ui-combobox>
  `
}

export { mount }
