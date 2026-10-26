import {
  Combobox,
  ComboboxChip,
  ComboboxChipRemove,
  ComboboxChips,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxGroupLabel,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxLabel,
  ComboboxList,
  ComboboxSelectAll,
  ComboboxValue,
} from "@ui-sdk/solid/combobox"
import { For } from "solid-js"

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

function Example() {
  return (
    <Combobox multiple defaultValue={["Europe/Paris"]}>
      <div class="flex w-80 max-w-full flex-col gap-2">
        <ComboboxLabel class="text-sm leading-none font-medium">Timezones</ComboboxLabel>
        <ComboboxChips class="box-border flex min-h-8 w-full flex-wrap items-center gap-1 rounded-2xl border border-transparent bg-input/50 bg-clip-padding p-1 text-sm leading-5 transition-[color,box-shadow] duration-200 focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/30">
          <ComboboxValue>
            {(state) => (
              <For each={state.value as string[]}>
                {(value, index) => (
                  <ComboboxChip
                    value={value}
                    class="box-border flex h-5.25 w-fit items-center justify-center gap-1 rounded-2xl bg-input ps-1.5 pe-0.5 text-xs leading-4 font-medium whitespace-nowrap text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
                  >
                    {state.labels[index()]}
                    <ComboboxChipRemove
                      aria-label={`Remove ${state.labels[index()]}`}
                      class="-ms-0.5 flex size-4.5 cursor-default items-center justify-center rounded-full border-0 bg-transparent p-0 text-inherit opacity-50 outline-none hover:opacity-100 focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        aria-hidden="true"
                        class="pointer-events-none block size-3 shrink-0"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </ComboboxChipRemove>
                  </ComboboxChip>
                )}
              </For>
            )}
          </ComboboxValue>
          <ComboboxInput
            placeholder="Add timezones"
            class="h-6 min-w-16 flex-1 border-0 bg-transparent px-1.5 py-0 text-base leading-6 text-inherit outline-none placeholder:text-muted-foreground md:text-sm md:leading-5"
          />
        </ComboboxChips>
      </div>
      <ComboboxContent class="max-h-[min(18rem,var(--available-height))] scroll-py-1 overflow-x-hidden overflow-y-auto box-border w-(--anchor-width) min-w-36 rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none origin-(--transform-origin) transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0">
        <ComboboxEmpty class="m-0 py-2 text-center text-sm leading-5 text-muted-foreground empty:hidden">
          No timezones found.
        </ComboboxEmpty>
        <ComboboxList>
          <ComboboxSelectAll class="group relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 font-medium">
            <span class="flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 group-data-checked:border-primary group-data-checked:bg-primary group-data-checked:text-primary-foreground group-data-indeterminate:border-primary group-data-indeterminate:bg-primary group-data-indeterminate:text-primary-foreground">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                class="hidden size-3.5 group-data-checked:block"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                class="hidden size-3.5 group-data-indeterminate:block"
              >
                <path d="M5 12h14" />
              </svg>
            </span>
            Select all
          </ComboboxSelectAll>
          <For each={timezones}>
            {(group) => (
              <ComboboxGroup>
                <ComboboxGroupLabel class="px-2 py-1 text-xs leading-4 text-muted-foreground">
                  {group.label}
                </ComboboxGroupLabel>
                <ComboboxSelectAll class="group relative flex min-h-7 w-full cursor-default items-center justify-between gap-2 rounded-xl py-1.5 px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:hidden text-muted-foreground">
                  {(state) => (state.checked ? `Clear ${group.label}` : `Select all in ${group.label}`)}
                </ComboboxSelectAll>
                <For each={group.items}>
                  {(zone) => (
                    <ComboboxItem
                      value={zone.value}
                      label={zone.label}
                      class="group relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
                    >
                      <span class="flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 group-data-selected:border-primary group-data-selected:bg-primary group-data-selected:text-primary-foreground">
                        <ComboboxItemIndicator>
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            aria-hidden="true"
                            class="pointer-events-none block size-3.5 shrink-0"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </ComboboxItemIndicator>
                      </span>
                      {zone.label}
                    </ComboboxItem>
                  )}
                </For>
              </ComboboxGroup>
            )}
          </For>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export { Example }
