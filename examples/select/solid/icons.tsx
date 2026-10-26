import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemIcon,
  SelectItemIndicator,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectValueIcon,
} from "@ui-sdk/solid/select"

function Example() {
  return (
    <Select defaultValue="start">
      <div class="flex w-56 max-w-full flex-col gap-2">
        <SelectLabel class="text-sm leading-none font-medium">Text alignment</SelectLabel>
        <SelectTrigger class="flex h-8 w-full min-w-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm leading-5 whitespace-nowrap transition-[color,box-shadow] duration-200 select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent">
          <SelectValueIcon class="flex shrink-0 text-muted-foreground" />
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
      <SelectContent class="max-h-(--available-height) scroll-py-1 overflow-x-hidden overflow-y-auto box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none">
        <SelectItem
          value="start"
          class="group relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
        >
          <SelectItemIcon
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
              <path d="M21 5H3" />
              <path d="M15 12H3" />
              <path d="M17 19H3" />
            </svg>
          </SelectItemIcon>
          Start
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
        <SelectItem
          value="center"
          class="group relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
        >
          <SelectItemIcon class="flex shrink-0 text-muted-foreground group-data-highlighted:text-accent-foreground">
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
              <path d="M21 5H3" />
              <path d="M17 12H7" />
              <path d="M19 19H5" />
            </svg>
          </SelectItemIcon>
          Center
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
        <SelectItem
          value="end"
          class="group relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
        >
          <SelectItemIcon
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
              <path d="M21 5H3" />
              <path d="M21 12H9" />
              <path d="M21 19H7" />
            </svg>
          </SelectItemIcon>
          End
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
      </SelectContent>
    </Select>
  )
}

export { Example }
