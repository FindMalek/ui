"use client"

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@ui-sdk/react/hover-card"

const sides = ["left", "top", "bottom", "right"] as const

function Example() {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {sides.map((side) => (
        <HoverCard key={side}>
          <HoverCardTrigger
            href={`https://example.com/${side}`}
            className="rounded-sm text-sm font-medium text-primary capitalize underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 data-open:underline"
          >
            {side}
          </HoverCardTrigger>
          <HoverCardContent
            side={side}
            className="flex w-56 origin-(--transform-origin) flex-col gap-1 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
          >
            <p className="font-medium capitalize">{side}</p>
            <p className="text-muted-foreground">The card opens on this side of the link.</p>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  )
}

export { Example }
