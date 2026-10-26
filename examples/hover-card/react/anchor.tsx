"use client"

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@ui-sdk/react/hover-card"
import * as React from "react"

const ada = {
  handle: "ada",
  name: "Ada Lovelace",
  initials: "AL",
  bio: "Wrote the first published program, for the Analytical Engine.",
}

function Example() {
  const [row, setRow] = React.useState<HTMLDivElement | null>(null)

  return (
    <div
      ref={setRow}
      className="flex w-full max-w-sm items-center gap-3 rounded-2xl border border-border px-3 py-2 text-sm"
    >
      <div
        aria-hidden="true"
        className="flex size-8 shrink-0 items-center justify-center rounded-full bg-muted text-xs text-muted-foreground"
      >
        {ada.initials}
      </div>
      <div className="flex min-w-0 flex-1 items-center gap-1">
        <HoverCard>
          <HoverCardTrigger
            href="https://example.com/people/ada"
            className="rounded-sm text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 data-open:underline"
          >
            {ada.name}
          </HoverCardTrigger>
          <HoverCardContent
            anchor={row}
            align="start"
            className="flex w-72 origin-(--transform-origin) flex-col gap-1 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
          >
            <p className="font-medium">@{ada.handle}</p>
            <p>{ada.bio}</p>
          </HoverCardContent>
        </HoverCard>
        <span className="truncate text-muted-foreground">committed “Fix the loop”</span>
      </div>
      <span className="text-xs text-muted-foreground">2h ago</span>
    </div>
  )
}

export { Example }
