import "@ui-sdk/web/combobox"
import { Check, ChevronDown, createElement, X } from "lucide"

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt", label: "Nuxt" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "solidstart", label: "SolidStart" },
  { value: "qwik", label: "Qwik City" },
]

const frameworkLabel = (value: string) =>
  frameworks.find((framework) => framework.value === value)?.label ?? value

function mount(root: HTMLElement) {
  root.innerHTML = `
    <div class="flex w-64 max-w-full flex-col gap-3">
      <ui-combobox default-value="sveltekit">
        <div class="flex flex-col gap-2">
          <ui-combobox-label class="text-sm leading-none font-medium">Framework</ui-combobox-label>
          <div class="relative">
            <ui-combobox-input>
              <input placeholder="Select a framework" class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-14 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5" />
            </ui-combobox-input>
            <div class="absolute end-1 top-1/2 flex -translate-y-1/2 items-center">
              <ui-combobox-clear>
                <button aria-label="Clear framework" class="group inline-flex size-6 cursor-default items-center justify-center rounded-xl border border-transparent bg-transparent p-0 text-muted-foreground outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50">${createElement(X, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</button>
              </ui-combobox-clear>
              <ui-combobox-trigger>
                <button aria-label="Show frameworks" class="group inline-flex size-6 cursor-default items-center justify-center rounded-xl border border-transparent bg-transparent p-0 text-muted-foreground outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50">${createElement(ChevronDown, { class: "pointer-events-none block size-4 shrink-0 transition-transform group-data-open:rotate-180", "aria-hidden": "true" }).outerHTML}</button>
              </ui-combobox-trigger>
            </div>
          </div>
        </div>
        <ui-combobox-content class="max-h-[min(18rem,var(--available-height))] scroll-py-1 overflow-x-hidden overflow-y-auto box-border w-(--anchor-width) min-w-36 rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none origin-(--transform-origin) transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0">
          <ui-combobox-empty class="m-0 py-2 text-center text-sm leading-5 text-muted-foreground empty:hidden">No frameworks found.</ui-combobox-empty>
          <ui-combobox-list>
            ${frameworks
              .map(
                (framework) => `
                  <ui-combobox-item value="${framework.value}" label="${framework.label}" class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2">
                    ${framework.label}
                    <ui-combobox-item-indicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">${createElement(Check, { class: "pointer-events-none block size-4 shrink-0", "aria-hidden": "true" }).outerHTML}</ui-combobox-item-indicator>
                  </ui-combobox-item>
                `,
              )
              .join("")}
          </ui-combobox-list>
        </ui-combobox-content>
      </ui-combobox>
      <output class="m-0 min-h-5 text-sm leading-5 text-muted-foreground">Value: "sveltekit"</output>
    </div>
  `
  const combobox = root.querySelector("ui-combobox") as HTMLElement & {
    itemToLabel: (value: string) => string
  }
  combobox.itemToLabel = frameworkLabel
  combobox.addEventListener("valuechange", (event) => {
    const { value } = (event as CustomEvent<{ value: string | null }>).detail
    root.querySelector("output")!.textContent = `Value: ${JSON.stringify(value)}`
  })
}

export { mount }
