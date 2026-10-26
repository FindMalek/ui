import { Tooltip, TooltipContent, TooltipTrigger } from "@ui-sdk/solid/tooltip"
import { createSignal, For } from "solid-js"

const aligns = ["start", "center", "end"] as const
const sideOffsets = [4, 12, 24]
const alignOffsets = [-16, 0, 16]
const paddings = [8, 48]

function Example() {
  const [align, setAlign] = createSignal<(typeof aligns)[number]>("start")
  const [sideOffset, setSideOffset] = createSignal(4)
  const [alignOffset, setAlignOffset] = createSignal(0)
  const [collisionPadding, setCollisionPadding] = createSignal(8)

  return (
    <div class="flex flex-col items-center gap-6">
      <div class="grid grid-cols-[auto_auto] items-center gap-x-3 gap-y-2">
        <span class="text-end text-sm text-muted-foreground">align</span>
        <div
          role="group"
          aria-label="align"
          class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
        >
          <For each={aligns}>
            {(value) => (
              <button
                type="button"
                aria-pressed={align() === value ? "true" : "false"}
                onClick={() => setAlign(value)}
                class="inline-flex h-full flex-1 cursor-default items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:border-border aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none"
              >
                {value}
              </button>
            )}
          </For>
        </div>
        <span class="text-end text-sm text-muted-foreground">sideOffset</span>
        <div
          role="group"
          aria-label="sideOffset"
          class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
        >
          <For each={sideOffsets}>
            {(value) => (
              <button
                type="button"
                aria-pressed={sideOffset() === value ? "true" : "false"}
                onClick={() => setSideOffset(value)}
                class="inline-flex h-full flex-1 cursor-default items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:border-border aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none"
              >
                {value}
              </button>
            )}
          </For>
        </div>
        <span class="text-end text-sm text-muted-foreground">alignOffset</span>
        <div
          role="group"
          aria-label="alignOffset"
          class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
        >
          <For each={alignOffsets}>
            {(value) => (
              <button
                type="button"
                aria-pressed={alignOffset() === value ? "true" : "false"}
                onClick={() => setAlignOffset(value)}
                class="inline-flex h-full flex-1 cursor-default items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:border-border aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none"
              >
                {value}
              </button>
            )}
          </For>
        </div>
        <span class="text-end text-sm text-muted-foreground">collisionPadding</span>
        <div
          role="group"
          aria-label="collisionPadding"
          class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
        >
          <For each={paddings}>
            {(value) => (
              <button
                type="button"
                aria-pressed={collisionPadding() === value ? "true" : "false"}
                onClick={() => setCollisionPadding(value)}
                class="inline-flex h-full flex-1 cursor-default items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:border-border aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none"
              >
                {value}
              </button>
            )}
          </For>
        </div>
      </div>
      <Tooltip>
        <TooltipTrigger class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none w-40">
          Offsets
        </TooltipTrigger>
        <TooltipContent
          align={align()}
          sideOffset={sideOffset()}
          alignOffset={alignOffset()}
          collisionPadding={collisionPadding()}
          class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none"
        >
          {align()}, {sideOffset()}px away, shifted {alignOffset()}px
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

export { Example }
