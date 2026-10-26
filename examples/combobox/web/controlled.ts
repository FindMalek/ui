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

const countryLabel = (value: string) => countries.find((country) => country.value === value)?.label ?? value

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-64 flex-col gap-3">
      <ui-combobox default-value="fr" debug>
        <div class="flex flex-col gap-2">
          <ui-combobox-label class="text-sm leading-none font-medium">Country</ui-combobox-label>
          <div class="relative">
            <ui-combobox-input>
              <input placeholder="Search countries" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 py-1 ps-2.5 pe-8 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm" />
            </ui-combobox-input>
            <ui-combobox-trigger>
              <button aria-label="Show countries" class="group absolute end-1 top-1/2 inline-flex size-6 -translate-y-1/2 items-center justify-center rounded-xl text-muted-foreground outline-none transition-[color,background-color] hover:bg-muted hover:text-foreground data-open:bg-muted data-disabled:pointer-events-none dark:hover:bg-muted/50">${createElement(ChevronDown, { class: "size-4 transition-transform group-data-open:rotate-180", "aria-hidden": "true" }).outerHTML}</button>
            </ui-combobox-trigger>
          </div>
        </div>
        <ui-combobox-content class="max-h-[min(18rem,var(--available-height))] w-(--anchor-width) min-w-36 origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
          <ui-combobox-empty class="py-2 text-center text-sm text-muted-foreground empty:hidden">No countries found.</ui-combobox-empty>
          <ui-combobox-list>
            ${countries
              .map(
                (country) => `
                  <ui-combobox-item value="${country.value}" label="${country.label}" class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm ring-ring/30 outline-none select-none ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 in-data-[modality=keyboard]:data-highlighted:ring-2">
                    ${country.label}
                    <ui-combobox-item-indicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">${createElement(Check, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-combobox-item-indicator>
                  </ui-combobox-item>
                `,
              )
              .join("")}
          </ui-combobox-list>
        </ui-combobox-content>
      </ui-combobox>
      <div class="flex gap-2">
        <button type="button" data-value class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">Japan</button>
        <button type="button" data-open class="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">Open</button>
      </div>
      <output class="text-sm text-muted-foreground">Change something</output>
    </div>
  `
  const combobox = root.querySelector("ui-combobox") as HTMLElement & {
    value: string | null
    open: boolean
    itemToLabel: (value: string) => string
  }
  combobox.itemToLabel = countryLabel
  const log = root.querySelector("output")!
  const listen = (type: string, describe: (value: never, reason: string) => string) =>
    combobox.addEventListener(type, (event) => {
      const { value, reason } = (event as CustomEvent<{ value: never; reason: string }>).detail
      log.textContent = describe(value, reason)
    })
  listen("valuechange", (value: string | null, reason) => `value: ${value} (${reason})`)
  listen("querychange", (value: string, reason) => `query: “${value}” (${reason})`)
  listen("openchange", (value: boolean, reason) => `open: ${value} (${reason})`)
  root.querySelector("[data-value]")!.addEventListener("click", () => (combobox.value = "jp"))
  root.querySelector("[data-open]")!.addEventListener("click", () => (combobox.open = true))
}
