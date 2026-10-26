import "@ui-sdk/web/combobox"
import { Check, ChevronDown, createElement } from "lucide"

const countries = [
  { value: "ar", label: "Argentina" },
  { value: "au", label: "Australia" },
  { value: "at", label: "Austria" },
  { value: "be", label: "Belgium" },
  { value: "br", label: "Brazil" },
  { value: "ca", label: "Canada" },
  { value: "cl", label: "Chile" },
  { value: "dk", label: "Denmark" },
  { value: "fi", label: "Finland" },
  { value: "fr", label: "France" },
  { value: "de", label: "Germany" },
  { value: "gr", label: "Greece" },
  { value: "jp", label: "Japan" },
  { value: "nl", label: "Netherlands" },
  { value: "es", label: "Spain" },
  { value: "se", label: "Sweden" },
  { value: "ch", label: "Switzerland" },
]

function fuzzy(item: { label: string }, query: string) {
  let at = 0
  for (const char of item.label.toLowerCase()) if (char === query[at]?.toLowerCase()) at++
  return at === query.length
}

const filters = [
  { name: "Contains", filter: "contains" },
  { name: "Starts with", filter: "startsWith" },
  { name: "Fuzzy", filter: fuzzy },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-64 max-w-full flex-col gap-4">
      <div role="group" aria-label="Filter" class="relative inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground">
        ${filters
          .map(
            (option, index) => `
              <button type="button" data-filter="${index}" aria-pressed="${index === 0}" class="relative inline-flex h-full cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-transparent px-1.5 py-0.5 text-sm leading-5 font-medium whitespace-nowrap text-foreground/60 no-underline outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background data-selected:text-foreground ">${option.name}</button>
            `,
          )
          .join("")}
      </div>
      <ui-combobox filter="contains">
        <div class="flex flex-col gap-2">
          <ui-combobox-label class="text-sm leading-none font-medium">Country</ui-combobox-label>
          <div class="relative">
            <ui-combobox-input>
              <input placeholder="Try “an” or “swd”" class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-8 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5" />
            </ui-combobox-input>
            <ui-combobox-trigger>
              <button aria-label="Show countries" class="group inline-flex size-6 cursor-default items-center justify-center rounded-xl border border-transparent bg-transparent p-0 text-muted-foreground outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50 absolute end-1 top-1/2 -translate-y-1/2">${createElement(ChevronDown, { class: "pointer-events-none block size-4 shrink-0 transition-transform group-data-open:rotate-180", "aria-hidden": "true" }).outerHTML}</button>
            </ui-combobox-trigger>
          </div>
        </div>
        <ui-combobox-content class="max-h-[min(18rem,var(--available-height))] scroll-py-1 overflow-x-hidden overflow-y-auto box-border w-(--anchor-width) min-w-36 rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none origin-(--transform-origin) transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0">
          <ui-combobox-empty class="m-0 py-2 text-center text-sm leading-5 text-muted-foreground empty:hidden">No countries found.</ui-combobox-empty>
          <ui-combobox-list>
            ${countries
              .map(
                (country) => `
                  <ui-combobox-item value="${country.value}" label="${country.label}" class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2">
                    ${country.label}
                    <ui-combobox-item-indicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">${createElement(Check, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-combobox-item-indicator>
                  </ui-combobox-item>
                `,
              )
              .join("")}
          </ui-combobox-list>
        </ui-combobox-content>
      </ui-combobox>
    </div>
  `
  const combobox = root.querySelector("ui-combobox") as HTMLElement & { filter?: typeof fuzzy }
  const buttons = root.querySelectorAll<HTMLButtonElement>("[data-filter]")
  for (const button of buttons)
    button.addEventListener("click", () => {
      const { filter } = filters[Number(button.dataset.filter)]
      if (typeof filter === "function") combobox.filter = filter
      else {
        combobox.filter = undefined
        combobox.setAttribute("filter", filter)
      }
      for (const other of buttons) other.setAttribute("aria-pressed", String(other === button))
    })
}

export { mount }
