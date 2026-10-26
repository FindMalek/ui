import { HoverCard, HoverCardContent, HoverCardTrigger } from "@ui-sdk/solid/hover-card"
import { createSignal, For } from "solid-js"

const timings = [
  { label: "Instant", delay: 0, closeDelay: 0 },
  { label: "Default", delay: 600, closeDelay: 300 },
  { label: "Patient", delay: 1200, closeDelay: 600 },
]

function Example() {
  const [enabled, setEnabled] = createSignal(true)

  return (
    <div class="flex flex-col items-center gap-6">
      <div class="flex gap-6">
        <For each={timings}>
          {(timing) => (
            <HoverCard delay={timing.delay} closeDelay={timing.closeDelay} disabled={!enabled()}>
              <HoverCardTrigger
                href={`https://example.com/${timing.label.toLowerCase()}`}
                class="rounded-sm text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 data-open:underline"
              >
                {timing.label}
              </HoverCardTrigger>
              <HoverCardContent class="flex w-56 origin-(--transform-origin) flex-col gap-1 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none">
                <p class="font-medium">{timing.label}</p>
                <p class="text-muted-foreground">
                  Opens after {timing.delay}ms and closes {timing.closeDelay}ms after the pointer leaves.
                </p>
              </HoverCardContent>
            </HoverCard>
          )}
        </For>
      </div>
      <label class="flex items-center gap-2 text-sm text-muted-foreground">
        <input
          type="checkbox"
          checked={enabled()}
          onChange={(event) => setEnabled(event.currentTarget.checked)}
          class="size-4 accent-primary"
        />
        Show cards
      </label>
    </div>
  )
}

export { Example }
