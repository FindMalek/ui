const label = "sr-only"

const input =
  "h-8 w-48 rounded-md border border-neutral-200 bg-white px-2.5 text-[13px] text-neutral-950 shadow-xs outline-none placeholder:text-neutral-400 focus:ring-2 focus:ring-neutral-300 data-disabled:opacity-50 data-readonly:bg-neutral-50"

const trigger =
  "inline-flex size-8 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-500 outline-none hover:bg-neutral-50 data-open:bg-neutral-100"

const animations = {
  none: "",
  default:
    "transition-[opacity,scale] duration-150 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0",
  slow: "transition-[opacity,scale,translate] duration-700 data-starting-style:-translate-y-2 data-starting-style:opacity-0 data-ending-style:translate-y-2 data-ending-style:opacity-0",
}

type Animation = keyof typeof animations

// With an arrow, the popup doesn't scroll, so the arrow outside it isn't clipped. Its list scrolls instead.
function content(animation: Animation = "default", arrow = false) {
  return `w-(--anchor-width) min-w-48 origin-(--transform-origin) rounded-lg border border-neutral-200 bg-white p-1 text-[13px] text-neutral-950 shadow-lg outline-none ${arrow ? "max-h-none overflow-visible" : "max-h-[min(var(--available-height),20rem)] overflow-y-auto"} ${animations[animation]}`
}

const scrollingList = "max-h-60 overflow-y-auto"

const item =
  "relative flex cursor-default items-center rounded-md px-2 py-1.5 outline-none select-none data-disabled:opacity-40 data-highlighted:bg-neutral-100"
const empty = "px-2 py-1.5 text-neutral-500 empty:hidden"
const status = "px-2 py-1 text-[11px] text-neutral-400 empty:hidden"
const groupLabel = "px-2 pt-1.5 pb-0.5 text-[11px] font-medium text-neutral-500"
const separator = "-mx-1 my-1 h-px bg-neutral-200"
const clear =
  "h-8 rounded-md border border-neutral-200 px-2 text-xs text-neutral-600 outline-none hover:bg-neutral-50 disabled:opacity-50"
const arrow =
  "size-2.5 rotate-45 border-neutral-200 bg-white data-[side=bottom]:-top-[5px] data-[side=bottom]:border-t data-[side=bottom]:border-l data-[side=top]:-bottom-[5px] data-[side=top]:border-r data-[side=top]:border-b data-[side=left]:-right-[5px] data-[side=left]:border-t data-[side=left]:border-r data-[side=right]:-left-[5px] data-[side=right]:border-b data-[side=right]:border-l"
const button =
  "h-7 rounded-md border border-neutral-200 px-2 text-xs outline-none hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-neutral-400"

// The box a content `anchor` points at, wider than the field so the difference shows.
const anchor =
  "flex w-full items-center gap-2 rounded-md border border-dashed border-neutral-300 p-2 text-[11px] text-neutral-400"

export {
  anchor,
  type Animation,
  arrow,
  button,
  clear,
  content,
  empty,
  groupLabel,
  input,
  item,
  label,
  scrollingList,
  separator,
  status,
  trigger,
}
