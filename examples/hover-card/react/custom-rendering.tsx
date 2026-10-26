"use client"

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@ui-sdk/react/hover-card"

const ada = {
  handle: "ada",
  name: "Ada Lovelace",
  initials: "AL",
  bio: "Wrote the first published program, for the Analytical Engine.",
}

function Example() {
  return (
    <HoverCard>
      <HoverCardTrigger
        href="https://example.com/people/ada"
        render={(props, state) => (
          <a {...props}>
            <span
              aria-hidden="true"
              className={
                state.open
                  ? "flex size-8 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground"
                  : "flex size-8 items-center justify-center rounded-full bg-muted text-xs text-muted-foreground"
              }
            >
              {ada.initials}
            </span>
            {ada.name}
          </a>
        )}
        className="inline-flex items-center gap-2 rounded-full pe-3 text-sm font-medium outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
      />
      <HoverCardContent
        className={(state) =>
          `flex w-72 origin-(--transform-origin) flex-col gap-1 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 ${state.open ? "" : "pointer-events-none"}`
        }
      >
        <p className="font-medium">@{ada.handle}</p>
        <p>{ada.bio}</p>
      </HoverCardContent>
    </HoverCard>
  )
}

export { Example }
