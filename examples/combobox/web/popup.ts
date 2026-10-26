import "@ui-sdk/web/combobox"
import { Check, ChevronDown, createElement, Search } from "lucide"

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

const countryLabel = (value: string) => countries.find((country) => country.value === value)?.label ?? value

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-combobox default-value="jp">
      <ui-combobox-trigger>
        <button id="combobox-popup-button" aria-label="Country" class="flex h-8 w-56 max-w-full min-w-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm leading-5 whitespace-nowrap transition-[color,box-shadow] duration-200 select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent">
          <span class="truncate">Japan</span>
          ${createElement(ChevronDown, { class: "pointer-events-none block size-4 shrink-0 text-muted-foreground", "aria-hidden": "true" }).outerHTML}
        </button>
      </ui-combobox-trigger>
      <ui-combobox-content anchor="#combobox-popup-button" class="flex max-h-(--available-height) w-56 flex-col overflow-hidden box-border min-w-36 rounded-2xl border-0 bg-popover text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none [--list-height:var(--available-height)] origin-(--transform-origin) transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0">
        <div class="m-1 mb-0 box-border flex h-8 shrink-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 px-2.5">
          ${createElement(Search, { class: "pointer-events-none block size-4 shrink-0 text-muted-foreground", "aria-hidden": "true" }).outerHTML}
          <ui-combobox-input>
            <input autofocus aria-label="Search countries" placeholder="Search…" class="h-full min-w-0 w-full border-0 bg-transparent p-0 text-base leading-6 text-inherit outline-none placeholder:text-muted-foreground md:text-sm md:leading-5" />
          </ui-combobox-input>
        </div>
        <ui-combobox-empty class="m-0 py-2 text-center text-sm leading-5 text-muted-foreground empty:hidden">No countries found.</ui-combobox-empty>
        <ui-combobox-list class="box-border min-h-0 max-h-[max(0px,min(16rem,calc(var(--list-height)_-_2.5rem)))] scroll-py-1 overflow-y-auto p-1">
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
  `
  const combobox = root.querySelector("ui-combobox") as HTMLElement & {
    query: string
    itemToLabel: (value: string) => string
  }
  const button = root.querySelector<HTMLButtonElement>("#combobox-popup-button")!
  combobox.itemToLabel = countryLabel
  combobox.addEventListener("valuechange", (event) => {
    const { value } = (event as CustomEvent<{ value: string | null }>).detail
    button.querySelector("span")!.textContent = value ? countryLabel(value) : "Select a country"
  })
  combobox.addEventListener("openchange", (event) => {
    if ((event as CustomEvent<{ value: boolean }>).detail.value) combobox.query = ""
  })
  combobox.addEventListener("openchangecomplete", (event) => {
    if (!(event as CustomEvent<{ value: boolean }>).detail.value) button.focus()
  })
}

export { mount }
