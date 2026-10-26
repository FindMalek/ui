import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxLabel,
  ComboboxList,
  ComboboxTrigger,
} from "@ui-sdk/solid/combobox"
import { For } from "solid-js"

const cities = [
  { value: "cairo", label: "القاهرة" },
  { value: "dubai", label: "دبي" },
  { value: "riyadh", label: "الرياض" },
  { value: "beirut", label: "بيروت" },
  { value: "amman", label: "عمّان" },
  { value: "rabat", label: "الرباط" },
]

export function Example() {
  return (
    <div dir="rtl">
      <Combobox>
        <div class="flex w-64 flex-col gap-2">
          <ComboboxLabel class="text-sm leading-none font-medium">المدينة</ComboboxLabel>
          <div class="relative">
            <ComboboxInput
              placeholder="ابحث عن مدينة"
              class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 py-1 ps-2.5 pe-8 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm"
            />
            <ComboboxTrigger
              aria-label="عرض المدن"
              class="group absolute end-1 top-1/2 inline-flex size-6 -translate-y-1/2 items-center justify-center rounded-xl text-muted-foreground outline-none transition-[color,background-color] hover:bg-muted hover:text-foreground data-open:bg-muted data-disabled:pointer-events-none dark:hover:bg-muted/50"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                class="size-4 transition-transform group-data-open:rotate-180"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </ComboboxTrigger>
          </div>
        </div>
        <ComboboxContent class="max-h-[min(18rem,var(--available-height))] w-(--anchor-width) min-w-36 origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
          <ComboboxEmpty class="py-2 text-center text-sm text-muted-foreground empty:hidden">
            لا توجد نتائج.
          </ComboboxEmpty>
          <ComboboxList>
            <For each={cities}>
              {(city) => (
                <ComboboxItem
                  value={city.value}
                  label={city.label}
                  class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm ring-ring/30 outline-none select-none ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 in-data-[modality=keyboard]:data-highlighted:ring-2"
                >
                  {city.label}
                  <ComboboxItemIndicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      aria-hidden="true"
                      class="size-4"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </ComboboxItemIndicator>
                </ComboboxItem>
              )}
            </For>
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </div>
  )
}
