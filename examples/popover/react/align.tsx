import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@ui-sdk/react/popover"

const aligns = ["start", "center", "end"] as const

export function Example() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {aligns.map((align) => (
        <Popover key={align}>
          <PopoverTrigger className="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">
            Align {align}
          </PopoverTrigger>
          <PopoverContent
            align={align}
            className="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10"
          >
            <div className="flex flex-col gap-1">
              <PopoverTitle className="text-base font-medium">Aligned to the {align}</PopoverTitle>
              <PopoverDescription className="text-sm text-muted-foreground">
                The popover lines up with the trigger's {align}.
              </PopoverDescription>
            </div>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  )
}
