import { HoverCard, HoverCardContent, HoverCardTrigger } from "@ui-sdk/solid/hover-card"
import { For } from "solid-js"

const sides = ["left", "top", "bottom", "right"] as const

function Example() {
  return (
    <div class="flex flex-wrap justify-center gap-6">
      <For each={sides}>
        {(side) => (
          <HoverCard>
            <HoverCardTrigger
              href={`https://example.com/${side}`}
              class="rounded-sm text-sm font-medium text-primary capitalize underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 data-open:underline"
            >
              {side}
            </HoverCardTrigger>
            <HoverCardContent
              side={side}
              class="flex w-56 origin-(--transform-origin) flex-col gap-1 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
            >
              <p class="font-medium capitalize">{side}</p>
              <p class="text-muted-foreground">The card opens on this side of the link.</p>
            </HoverCardContent>
          </HoverCard>
        )}
      </For>
    </div>
  )
}

export { Example }
