import "@ui-sdk/web/select"
import { Check, ChevronDown, Search, createElement } from "lucide"

const countries = [
  { value: "ar", label: "Argentina", code: "+54" },
  { value: "au", label: "Australia", code: "+61" },
  { value: "at", label: "Austria", code: "+43" },
  { value: "be", label: "Belgium", code: "+32" },
  { value: "br", label: "Brazil", code: "+55" },
  { value: "ca", label: "Canada", code: "+1" },
  { value: "cl", label: "Chile", code: "+56" },
  { value: "cn", label: "China", code: "+86" },
  { value: "dk", label: "Denmark", code: "+45" },
  { value: "fi", label: "Finland", code: "+358" },
  { value: "fr", label: "France", code: "+33" },
  { value: "de", label: "Germany", code: "+49" },
  { value: "gr", label: "Greece", code: "+30" },
  { value: "in", label: "India", code: "+91" },
  { value: "ie", label: "Ireland", code: "+353" },
  { value: "it", label: "Italy", code: "+39" },
  { value: "jp", label: "Japan", code: "+81" },
  { value: "mx", label: "Mexico", code: "+52" },
  { value: "nl", label: "Netherlands", code: "+31" },
  { value: "no", label: "Norway", code: "+47" },
  { value: "pt", label: "Portugal", code: "+351" },
  { value: "es", label: "Spain", code: "+34" },
  { value: "se", label: "Sweden", code: "+46" },
  { value: "ch", label: "Switzerland", code: "+41" },
]

const popularCountries = [
  { type: "group" as const, label: "Popular", items: [countries[5], countries[11], countries[16]] },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-select placeholder="Select a country" filter="contains">
      <div class="flex w-64 flex-col gap-2">
        <ui-select-label class="text-sm leading-none font-medium">Country</ui-select-label>
        <ui-select-trigger>
          <button class="flex h-8 w-full min-w-0 items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm outline-none transition-[color,box-shadow] duration-200 select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:opacity-50">
            <ui-select-value class="flex-1 truncate text-start"></ui-select-value>
            ${createElement(ChevronDown, { class: "size-4 shrink-0 text-muted-foreground", "aria-hidden": "true" }).outerHTML}
          </button>
        </ui-select-trigger>
      </div>
      <ui-select-content class="flex max-h-[min(20rem,var(--available-height))] w-(--anchor-width) origin-(--transform-origin) flex-col overflow-hidden rounded-2xl bg-popover text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
        <div class="m-1 flex h-8 items-center gap-2 rounded-2xl bg-input/50 px-2.5 focus-within:ring-3 focus-within:ring-ring/30">
          ${createElement(Search, { class: "size-4 shrink-0 text-muted-foreground", "aria-hidden": "true" }).outerHTML}
          <ui-select-input>
            <input aria-label="Search countries" placeholder="Search countries…" class="h-full w-full min-w-0 bg-transparent text-base outline-none placeholder:text-muted-foreground md:text-sm" />
          </ui-select-input>
        </div>
        <ui-select-empty class="py-2 text-center text-sm text-muted-foreground empty:hidden">No countries found.</ui-select-empty>
        <ui-select-list class="overflow-y-auto p-1"></ui-select-list>
      </ui-select-content>
      <template>
        <ui-select-group>
          <ui-select-group-label class="px-2 py-1 text-xs text-muted-foreground"></ui-select-group-label>
          <ui-select-item class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm ring-ring/30 outline-none select-none ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-selected:font-medium data-disabled:pointer-events-none data-disabled:opacity-50 in-data-[modality=keyboard]:data-highlighted:ring-2">
            <ui-select-item-text class="[&_mark]:bg-transparent [&_mark]:font-semibold [&_mark]:text-foreground [&_mark]:underline [&_mark]:underline-offset-2"></ui-select-item-text>
            <ui-select-item-indicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">${createElement(Check, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-select-item-indicator>
          </ui-select-item>
        </ui-select-group>
      </template>
    </ui-select>
  `
  const select = root.querySelector("ui-select")!
  select.emptyItems = popularCountries
  select.announcement = (change) =>
    change.type === "results" ? `${change.count} ${change.count === 1 ? "country" : "countries"} found` : null
  select.items = countries
}
