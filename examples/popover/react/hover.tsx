import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverClose,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@ui-sdk/react/popover"

function Example() {
  return (
    <Popover openOnHover delay={200} closeDelay={150}>
      <PopoverTrigger className="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
        @ada
      </PopoverTrigger>
      <PopoverContent
        sideOffset={10}
        className="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
      >
        <PopoverArrow className="size-2.5 rotate-45 border-foreground/5 bg-popover data-[side=bottom]:-top-[5px] data-[side=bottom]:border-t data-[side=bottom]:border-l data-[side=top]:-bottom-[5px] data-[side=top]:border-r data-[side=top]:border-b data-[side=left]:-right-[5px] data-[side=left]:border-t data-[side=left]:border-r data-[side=right]:-left-[5px] data-[side=right]:border-b data-[side=right]:border-l" />
        <div className="flex flex-col gap-1">
          <PopoverTitle className="text-base font-medium">Ada Lovelace</PopoverTitle>
          <PopoverDescription className="text-sm text-muted-foreground">
            A collaborator on this project.
          </PopoverDescription>
        </div>
        <PopoverClose className="inline-flex h-8 cursor-default items-center justify-center rounded-2xl border border-border bg-background px-3 text-sm font-medium text-foreground outline-none hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30">
          Close preview
        </PopoverClose>
      </PopoverContent>
    </Popover>
  )
}

export { Example }
