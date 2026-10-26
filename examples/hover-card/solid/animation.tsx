import { HoverCard, HoverCardContent, HoverCardTrigger } from "@ui-sdk/solid/hover-card"
import { createSignal } from "solid-js"

const grace = {
  handle: "grace",
  name: "Grace Hopper",
  bio: "Built the first compiler and popularized the word “debugging”.",
}

function Example() {
  const [status, setStatus] = createSignal("Closed")

  return (
    <div class="flex flex-col items-center gap-3">
      <HoverCard
        onOpenChange={(open) => setStatus(open ? "Opening" : "Closing")}
        onOpenChangeComplete={(open) => setStatus(open ? "Open" : "Closed")}
      >
        <HoverCardTrigger
          href="https://example.com/people/grace"
          class="rounded-sm text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 data-open:underline"
        >
          @{grace.handle}
        </HoverCardTrigger>
        <HoverCardContent
          keepMounted
          class="flex w-72 origin-(--transform-origin) flex-col gap-1 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale,translate] duration-300 ease-out data-starting-style:-translate-y-1 data-starting-style:scale-90 data-starting-style:opacity-0 data-ending-style:scale-90 data-ending-style:opacity-0 motion-reduce:transition-none"
        >
          <p class="font-medium">{grace.name}</p>
          <p>{grace.bio}</p>
        </HoverCardContent>
      </HoverCard>
      <output class="text-sm text-muted-foreground">{status()}</output>
    </div>
  )
}

export { Example }
