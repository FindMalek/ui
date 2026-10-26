import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIcon,
  ComboboxItemIndicator,
  ComboboxItemText,
  ComboboxLabel,
  ComboboxList,
  ComboboxTrigger,
  ComboboxValueIcon,
} from "@ui-sdk/solid/combobox"
import { createSignal } from "solid-js"

function Example() {
  const [field, setField] = createSignal<HTMLDivElement | null>(null)

  return (
    <Combobox>
      <div class="flex w-64 max-w-full flex-col gap-2">
        <ComboboxLabel class="text-sm leading-none font-medium">Status</ComboboxLabel>
        <div
          ref={setField}
          class="box-border flex h-8 w-full items-center gap-2 rounded-2xl border border-transparent bg-input/50 bg-clip-padding ps-2.5 pe-1 py-0 text-sm leading-5 transition-[color,box-shadow] duration-200 focus-within:border-ring focus-within:ring-3 focus-within:ring-ring/30"
        >
          <ComboboxValueIcon class="flex shrink-0 text-muted-foreground" />
          <ComboboxInput
            placeholder="Select a status"
            class="h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-base leading-6 text-inherit outline-none placeholder:text-muted-foreground md:text-sm md:leading-5"
          />
          <ComboboxTrigger
            aria-label="Show statuses"
            class="group inline-flex size-6 cursor-default items-center justify-center rounded-xl border border-transparent bg-transparent p-0 text-muted-foreground outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50 shrink-0"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
              class="pointer-events-none block size-4 shrink-0 transition-transform group-data-open:rotate-180"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </ComboboxTrigger>
        </div>
      </div>
      <ComboboxContent
        anchor={field()}
        class="max-h-[min(18rem,var(--available-height))] scroll-py-1 overflow-x-hidden overflow-y-auto box-border w-(--anchor-width) min-w-36 rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none origin-(--transform-origin) transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0"
      >
        <ComboboxEmpty class="m-0 py-2 text-center text-sm leading-5 text-muted-foreground empty:hidden">
          No statuses found.
        </ComboboxEmpty>
        <ComboboxList>
          <ComboboxItem
            value="backlog"
            label="Backlog"
            class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2 group"
          >
            <ComboboxItemIcon class="flex shrink-0 text-muted-foreground group-data-highlighted:text-accent-foreground">
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
                <circle cx="12" cy="12" r="10" />
              </svg>
            </ComboboxItemIcon>
            <ComboboxItemText class="[&_mark]:bg-transparent [&_mark]:font-semibold [&_mark]:text-current" />
            <ComboboxItemIndicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">
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
            </ComboboxItemIndicator>
          </ComboboxItem>
          <ComboboxItem
            value="in-progress"
            label="In progress"
            class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2 group"
          >
            <ComboboxItemIcon
              mirror
              class="flex shrink-0 text-muted-foreground group-data-highlighted:text-accent-foreground"
            >
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
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </ComboboxItemIcon>
            <ComboboxItemText class="[&_mark]:bg-transparent [&_mark]:font-semibold [&_mark]:text-current" />
            <ComboboxItemIndicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">
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
            </ComboboxItemIndicator>
          </ComboboxItem>
          <ComboboxItem
            value="done"
            label="Done"
            class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2 group"
          >
            <ComboboxItemIcon class="flex shrink-0 text-muted-foreground group-data-highlighted:text-accent-foreground">
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
                <circle cx="12" cy="12" r="10" />
                <path d="m16 9-5.5 5.5L8 12" />
              </svg>
            </ComboboxItemIcon>
            <ComboboxItemText class="[&_mark]:bg-transparent [&_mark]:font-semibold [&_mark]:text-current" />
            <ComboboxItemIndicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">
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
            </ComboboxItemIndicator>
          </ComboboxItem>
          <ComboboxItem
            value="canceled"
            label="Canceled"
            class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2 group"
          >
            <ComboboxItemIcon class="flex shrink-0 text-muted-foreground group-data-highlighted:text-accent-foreground">
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
                <circle cx="12" cy="12" r="10" />
                <path d="m15 9-6 6" />
                <path d="m9 9 6 6" />
              </svg>
            </ComboboxItemIcon>
            <ComboboxItemText class="[&_mark]:bg-transparent [&_mark]:font-semibold [&_mark]:text-current" />
            <ComboboxItemIndicator class="pointer-events-none absolute end-2 flex size-4 items-center justify-center">
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
            </ComboboxItemIndicator>
          </ComboboxItem>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}

export { Example }
