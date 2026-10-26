import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverShortcut,
  PopoverTitle,
  PopoverTrigger,
} from "@ui-sdk/react/popover"

const dimensions = [
  { label: "Width", value: "100%" },
  { label: "Max. width", value: "300px" },
  { label: "Height", value: "25px" },
  { label: "Max. height", value: "none" },
]

function Example() {
  return (
    <Popover>
      <PopoverTrigger
        shortcut="mod+i"
        className="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding ps-3 pe-1.5 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
      >
        Dimensions
        <PopoverShortcut className="inline-flex cursor-default h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-muted px-1 font-sans text-xs font-medium text-muted-foreground" />
      </PopoverTrigger>
      <PopoverContent className="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
        <div className="flex flex-col gap-1.5">
          <PopoverTitle className="text-base leading-none font-medium">Dimensions</PopoverTitle>
          <PopoverDescription className="text-sm text-muted-foreground">
            Set the dimensions for the layer.
          </PopoverDescription>
        </div>
        <div className="flex flex-col gap-2">
          {dimensions.map((dimension) => (
            <label key={dimension.label} className="grid grid-cols-3 items-center gap-4 text-sm">
              {dimension.label}
              <input
                defaultValue={dimension.value}
                className="col-span-2 h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm motion-reduce:transition-none"
              />
            </label>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export { Example }
