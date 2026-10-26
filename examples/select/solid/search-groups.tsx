import {
  Select,
  SelectContent,
  SelectEmpty,
  SelectGroup,
  SelectGroupLabel,
  SelectInput,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectList,
  SelectTrigger,
  SelectValue,
} from "@ui-sdk/solid/select"
import { For } from "solid-js"

const produce = [
  {
    label: "Fruits",
    items: [
      { value: "apple", label: "Apple" },
      { value: "banana", label: "Banana" },
      { value: "orange", label: "Orange" },
    ],
  },
  {
    label: "Vegetables",
    items: [
      { value: "carrot", label: "Carrot" },
      { value: "broccoli", label: "Broccoli" },
      { value: "spinach", label: "Spinach" },
    ],
  },
]

function Example() {
  return (
    <Select placeholder="Select produce">
      <div class="flex w-64 max-w-full flex-col gap-2">
        <SelectLabel class="text-sm leading-none font-medium">Produce</SelectLabel>
        <SelectTrigger class="flex h-8 w-full min-w-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm leading-5 whitespace-nowrap transition-[color,box-shadow] duration-200 select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent">
          <SelectValue class="min-w-0 flex-1 truncate text-start" />
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            class="pointer-events-none block size-4 shrink-0 text-muted-foreground"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </SelectTrigger>
      </div>
      <SelectContent class="flex max-h-[min(20rem,var(--available-height))] w-(--anchor-width) flex-col overflow-hidden box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none">
        <SelectInput
          aria-label="Search produce"
          placeholder="Search…"
          class="m-1 box-border h-8 min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
        />
        <SelectEmpty class="m-0 py-2 text-center text-sm leading-5 text-muted-foreground empty:hidden">
          Nothing found.
        </SelectEmpty>
        <SelectList class="min-h-0 overflow-y-auto p-1">
          <For each={produce}>
            {(group) => (
              <SelectGroup>
                <SelectGroupLabel class="px-2 py-1 text-xs leading-4 text-muted-foreground">
                  {group.label}
                </SelectGroupLabel>
                <For each={group.items}>
                  {(item) => (
                    <SelectItem
                      value={item.value}
                      label={item.label}
                      class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
                    >
                      <SelectItemText
                        class={(state) => (state.matched ? "text-muted-foreground" : undefined)}
                      >
                        {(state) =>
                          state.segments.map((segment, index) =>
                            segment.match ? (
                              <b class="font-semibold text-foreground">{segment.text}</b>
                            ) : (
                              segment.text
                            ),
                          )
                        }
                      </SelectItemText>
                      <SelectItemIndicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          aria-hidden="true"
                          class="pointer-events-none block size-4 shrink-0"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </SelectItemIndicator>
                    </SelectItem>
                  )}
                </For>
              </SelectGroup>
            )}
          </For>
        </SelectList>
      </SelectContent>
    </Select>
  )
}

export { Example }
