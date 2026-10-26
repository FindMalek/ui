import "@ui-sdk/web/combobox"
import { Check, ChevronDown, createElement } from "lucide"

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt", label: "Nuxt" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
  { value: "solidstart", label: "SolidStart" },
  { value: "qwik", label: "Qwik City" },
]

export function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-combobox>
      <div class="flex w-64 flex-col gap-2">
        <ui-combobox-label class="text-sm leading-none font-medium">Framework</ui-combobox-label>
        <div class="relative">
          <ui-combobox-input>
            <input placeholder="Select a framework" class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 py-1 ps-2.5 pe-8 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm" />
          </ui-combobox-input>
          <ui-combobox-trigger>
            <button aria-label="Show frameworks" class="group absolute end-1 top-1/2 inline-flex size-6 -translate-y-1/2 items-center justify-center rounded-xl text-muted-foreground outline-none transition-[color,background-color] hover:bg-muted hover:text-foreground data-open:bg-muted data-disabled:pointer-events-none dark:hover:bg-muted/50">${createElement(ChevronDown, { class: "size-4 transition-transform duration-300 group-data-open:rotate-180", "aria-hidden": "true" }).outerHTML}</button>
          </ui-combobox-trigger>
        </div>
        <output class="text-sm text-muted-foreground">Closed</output>
      </div>
      <ui-combobox-content class="max-h-[min(18rem,var(--available-height))] w-(--anchor-width) min-w-36 origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,translate,scale] duration-300 ease-out data-ending-style:opacity-0 data-ending-style:duration-150 data-starting-style:-translate-y-2 data-starting-style:scale-y-90 data-starting-style:opacity-0 dark:ring-foreground/10">
        <ui-combobox-empty class="py-2 text-center text-sm text-muted-foreground empty:hidden">No frameworks found.</ui-combobox-empty>
        <ui-combobox-list>
          ${frameworks
            .map(
              (framework) => `
                <ui-combobox-item value="${framework.value}" label="${framework.label}" class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm ring-ring/30 outline-none select-none ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 in-data-[modality=keyboard]:data-highlighted:ring-2">
                  ${framework.label}
                  <ui-combobox-item-indicator keep-mounted class="pointer-events-none absolute end-2 flex size-4 scale-50 items-center justify-center opacity-0 transition-[opacity,scale] duration-200 data-selected:scale-100 data-selected:opacity-100">${createElement(Check, { class: "size-4", "aria-hidden": "true" }).outerHTML}</ui-combobox-item-indicator>
                </ui-combobox-item>
              `,
            )
            .join("")}
        </ui-combobox-list>
      </ui-combobox-content>
    </ui-combobox>
  `
  const combobox = root.querySelector("ui-combobox")!
  const status = root.querySelector("output")!
  combobox.addEventListener("openchange", (event) => {
    status.textContent = (event as CustomEvent<{ value: boolean }>).detail.value ? "Opening…" : "Closing…"
  })
  combobox.addEventListener("openchangecomplete", (event) => {
    status.textContent = (event as CustomEvent<{ value: boolean }>).detail.value ? "Open" : "Closed"
  })
}
