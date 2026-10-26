import "@ui-sdk/web/autocomplete"
import { ArrowLeft, createElement } from "lucide"

const fruits = ["Apple", "Apricot", "Avocado", "Banana", "Blackberry"]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-autocomplete required>
      <div class="flex w-64 max-w-full flex-col gap-2">
        <ui-autocomplete-label class="text-sm leading-none font-medium">Fruit</ui-autocomplete-label>
        <ui-autocomplete-input>
          <input class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5" />
        </ui-autocomplete-input>
      </div>
      <ui-autocomplete-content class="max-h-[min(18rem,var(--available-height))] scroll-py-1 overflow-x-hidden overflow-y-auto box-border w-(--anchor-width) min-w-36 rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none origin-(--transform-origin) transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0">
        <ui-autocomplete-list>
          <ui-autocomplete-item value="Fruit guide" class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2"><a href="#fruit-guide" tabindex="-1">Read the fruit guide</a></ui-autocomplete-item>
          ${fruits
            .map(
              (fruit) =>
                `<ui-autocomplete-item value="${fruit}" class="group relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2 data-highlighted:font-medium">${fruit}${createElement(ArrowLeft, { class: "pointer-events-none ms-auto hidden size-4 shrink-0 rtl:rotate-180 group-data-highlighted:block", "aria-hidden": "true" }).outerHTML}</ui-autocomplete-item>`,
            )
            .join("")}
        </ui-autocomplete-list>
      </ui-autocomplete-content>
    </ui-autocomplete>
  `
  const autocomplete = root.querySelector("ui-autocomplete")!
  const link = root.querySelector("a")!
  autocomplete.addEventListener("valuechange", (event) => {
    const { reason, value, source } = event.detail
    if (reason === "item-press" && source === "keyboard" && value === link.textContent) link.click()
  })
}

export { mount }
