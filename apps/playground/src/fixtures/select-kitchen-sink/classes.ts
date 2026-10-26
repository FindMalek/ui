const label = "sr-only"

const trigger =
  "inline-flex h-8 min-w-40 items-center justify-between gap-2 rounded-md border border-neutral-200 bg-white px-3 text-[13px] text-neutral-950 shadow-xs outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 data-disabled:opacity-50 data-open:bg-neutral-100 data-placeholder:text-neutral-500 data-readonly:bg-neutral-50"

const value = "truncate"

const chevron = "text-neutral-400"

const animations = {
  none: "",
  default:
    "transition-[opacity,scale] duration-150 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0",
  slow: "transition-[opacity,scale,translate] duration-700 data-starting-style:-translate-y-2 data-starting-style:opacity-0 data-ending-style:translate-y-2 data-ending-style:opacity-0",
}

type Animation = keyof typeof animations

// With an arrow, the popup doesn't scroll, so the arrow outside it isn't clipped.
function content(animation: Animation = "default", arrow = false) {
  return `min-w-(--anchor-width) max-h-(--available-height) origin-(--transform-origin) rounded-lg border border-neutral-200 bg-white p-1 text-[13px] text-neutral-950 shadow-lg outline-none ${arrow ? "overflow-visible" : "overflow-y-auto"} ${animations[animation]}`
}

const item =
  "relative flex cursor-default items-center rounded-md py-1.5 ps-7 pe-2 outline-none select-none data-disabled:opacity-40 data-highlighted:bg-neutral-100 data-selected:font-medium"
const indicator =
  "absolute start-2 text-xs transition-opacity duration-150 data-starting-style:opacity-0 not-data-selected:opacity-0"
const groupLabel = "px-2 pt-1.5 pb-0.5 text-[11px] font-medium text-neutral-500"
const separator = "-mx-1 my-1 h-px bg-neutral-200"
const search =
  "mb-1 h-8 w-full rounded-md border border-neutral-200 px-2 text-[13px] outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
const empty = "px-2 py-1.5 text-neutral-500 empty:hidden"
const selectAll =
  "relative flex cursor-default items-center rounded-md py-1.5 ps-7 pe-2 font-medium outline-none select-none data-disabled:opacity-40 data-highlighted:bg-neutral-100 before:absolute before:start-2 data-checked:before:content-['✓'] data-indeterminate:before:content-['–']"
const clear =
  "h-8 rounded-md border border-neutral-200 px-2 text-xs text-neutral-600 outline-none hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-neutral-400 disabled:opacity-50"
const arrow =
  "size-2.5 rotate-45 border-neutral-200 bg-white data-[side=bottom]:-top-[5px] data-[side=bottom]:border-t data-[side=bottom]:border-l data-[side=top]:-bottom-[5px] data-[side=top]:border-r data-[side=top]:border-b data-[side=left]:-right-[5px] data-[side=left]:border-t data-[side=left]:border-r data-[side=right]:-left-[5px] data-[side=right]:border-b data-[side=right]:border-l"
const button =
  "h-7 rounded-md border border-neutral-200 px-2 text-xs outline-none hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-neutral-400"
const anchor =
  "flex h-10 w-40 items-center justify-center rounded-md border border-dashed border-neutral-300 text-xs text-neutral-400"

export {
  anchor,
  type Animation,
  arrow,
  button,
  chevron,
  clear,
  content,
  empty,
  groupLabel,
  indicator,
  item,
  label,
  search,
  selectAll,
  separator,
  trigger,
  value,
}
