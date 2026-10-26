import { Listbox, ListboxItem } from "@ui-sdk/solid/listbox"
import { For } from "solid-js"

const views = [
  { value: "day", label: "יום" },
  { value: "week", label: "שבוע" },
  { value: "month", label: "חודש" },
]

export function Example() {
  return (
    <div dir="rtl">
      <Listbox
        orientation="horizontal"
        defaultValue="day"
        aria-label="תצוגה"
        class="inline-flex h-8 w-fit items-center rounded-2xl bg-muted p-[3px] text-muted-foreground outline-none"
      >
        <For each={views}>
          {(view) => (
            <ListboxItem
              value={view.value}
              class="inline-flex h-full min-w-10 cursor-default items-center justify-center rounded-2xl border border-transparent px-2 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none select-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-selected:bg-background data-selected:text-foreground data-selected:shadow-sm data-disabled:opacity-50 dark:text-muted-foreground dark:data-selected:border-input dark:data-selected:bg-input/30 dark:data-selected:text-foreground"
            >
              {view.label}
            </ListboxItem>
          )}
        </For>
      </Listbox>
    </div>
  )
}
