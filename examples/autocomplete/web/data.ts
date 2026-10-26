import type { ListData } from "@ui-sdk/core/autocomplete"
import "@ui-sdk/web/autocomplete"

const groupedFruits: ListData = [
  { type: "group", label: "Tree fruits", items: ["Apple", "Apricot", "Cherry", "Lemon", "Peach", "Pear"] },
  { type: "separator" },
  { type: "group", label: "Berries", items: ["Blackberry", "Blueberry", "Grape", "Strawberry"] },
  { type: "separator" },
  { type: "group", label: "Tropical", items: ["Avocado", "Banana", "Mango", "Pineapple"] },
]

function mount(root: HTMLElement) {
  root.innerHTML = `
    <ui-autocomplete>
      <div class="flex w-64 max-w-full flex-col gap-2">
        <ui-autocomplete-label class="text-sm leading-none font-medium">Fruit</ui-autocomplete-label>
        <ui-autocomplete-input>
          <input placeholder="e.g. Peach" class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5" />
        </ui-autocomplete-input>
      </div>
      <template>
        <ui-autocomplete-content class="max-h-[min(18rem,var(--available-height))] scroll-py-1 overflow-x-hidden overflow-y-auto box-border w-(--anchor-width) min-w-36 rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none origin-(--transform-origin) transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0">
          <ui-autocomplete-list class="flex flex-col">
            <ui-autocomplete-group>
              <ui-autocomplete-group-label class="px-2 py-1 text-xs leading-4 text-muted-foreground"></ui-autocomplete-group-label>
              <ui-autocomplete-item class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2">
              </ui-autocomplete-item>
            </ui-autocomplete-group>
            <ui-autocomplete-separator class="pointer-events-none -mx-1 my-1 h-px bg-border"></ui-autocomplete-separator>
          </ui-autocomplete-list>
        </ui-autocomplete-content>
      </template>
    </ui-autocomplete>
  `
  const autocomplete = root.querySelector("ui-autocomplete")!
  autocomplete.items = groupedFruits
}

export { mount }
