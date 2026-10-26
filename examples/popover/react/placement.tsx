"use client"

import * as React from "react"
import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@ui-sdk/react/popover"

const sides = ["top", "right", "bottom", "left"] as const
const aligns = ["start", "center", "end"] as const

function Example() {
  const [sideOffset, setSideOffset] = React.useState(8)
  const [alignOffset, setAlignOffset] = React.useState(0)
  const [collisionPadding, setCollisionPadding] = React.useState(8)

  const [side, setSide] = React.useState<(typeof sides)[number]>("bottom")
  const [align, setAlign] = React.useState<(typeof aligns)[number]>("center")

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <div
          role="group"
          aria-label="Side"
          className="inline-flex cursor-default h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
        >
          {sides.map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={side === value}
              onClick={() => setSide(value)}
              className="inline-flex cursor-default h-full flex-1 items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none"
            >
              {value}
            </button>
          ))}
        </div>
        <div
          role="group"
          aria-label="Align"
          className="inline-flex cursor-default h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
        >
          {aligns.map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={align === value}
              onClick={() => setAlign(value)}
              className="inline-flex cursor-default h-full flex-1 items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none"
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      <div className="grid w-full max-w-sm gap-3">
        <label className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 text-sm">
          Side offset<span>{sideOffset}px</span>
          <input
            type="range"
            min={0}
            max={32}
            value={sideOffset}
            onChange={(event) => setSideOffset(Number(event.currentTarget.value))}
            className="col-span-2 w-full accent-primary"
          />
        </label>
        <label className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 text-sm">
          Align offset<span>{alignOffset}px</span>
          <input
            type="range"
            min={-24}
            max={24}
            value={alignOffset}
            onChange={(event) => setAlignOffset(Number(event.currentTarget.value))}
            className="col-span-2 w-full accent-primary"
          />
        </label>
        <label className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 text-sm">
          Collision padding<span>{collisionPadding}px</span>
          <input
            type="range"
            min={0}
            max={48}
            value={collisionPadding}
            onChange={(event) => setCollisionPadding(Number(event.currentTarget.value))}
            className="col-span-2 w-full accent-primary"
          />
        </label>
      </div>
      <Popover>
        <PopoverTrigger className="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
          Placement
        </PopoverTrigger>
        <PopoverContent
          side={side}
          align={align}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
          collisionPadding={collisionPadding}
          className="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
        >
          <PopoverArrow className="size-2.5 rotate-45 border-foreground/5 bg-popover data-[side=bottom]:-top-[5px] data-[side=bottom]:border-t data-[side=bottom]:border-l data-[side=top]:-bottom-[5px] data-[side=top]:border-r data-[side=top]:border-b data-[side=left]:-right-[5px] data-[side=left]:border-t data-[side=left]:border-r data-[side=right]:-left-[5px] data-[side=right]:border-b data-[side=right]:border-l" />
          <div className="flex flex-col gap-1">
            <PopoverTitle className="text-base font-medium">
              {side} {align}
            </PopoverTitle>
            <PopoverDescription className="text-sm text-muted-foreground">
              Choose a side, alignment, and offsets above.
            </PopoverDescription>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export { Example }
