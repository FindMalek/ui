import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@ui-sdk/solid/popover"
import { For } from "solid-js"

const dimensions = [
  { label: "Width", value: "100%" },
  { label: "Max. width", value: "300px" },
  { label: "Height", value: "25px" },
  { label: "Max. height", value: "none" },
]

function Example() {
  return (
    <Popover>
      <PopoverTrigger class="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
        Open popover
      </PopoverTrigger>
      <PopoverContent class="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
        <div class="flex flex-col gap-1">
          <PopoverTitle class="text-base font-medium">Dimensions</PopoverTitle>
          <PopoverDescription class="text-sm text-muted-foreground">
            Set the dimensions for the layer.
          </PopoverDescription>
        </div>
        <div class="grid gap-2">
          <For each={dimensions}>
            {(dimension) => (
              <label class="grid grid-cols-3 items-center gap-4 text-sm leading-none font-medium">
                {dimension.label}
                <input
                  value={dimension.value}
                  class="col-span-2 h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base font-normal outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm motion-reduce:transition-none"
                />
              </label>
            )}
          </For>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export { Example }
