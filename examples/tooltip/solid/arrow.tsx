import { Tooltip, TooltipArrow, TooltipContent, TooltipTrigger } from "@ui-sdk/solid/tooltip"
import { createSignal, For } from "solid-js"

const sides = ["top", "right", "bottom", "left"] as const
const aligns = ["start", "center", "end"] as const

function Example() {
  const [open, setOpen] = createSignal(false)
  const [pinned, setPinned] = createSignal(false)
  const [side, setSide] = createSignal<(typeof sides)[number]>("top")
  const [align, setAlign] = createSignal<(typeof aligns)[number]>("center")

  return (
    <div class="flex flex-col items-center gap-8">
      <div class="flex flex-col items-center gap-3">
        <div class="grid grid-cols-[auto_auto] items-center gap-x-3 gap-y-2">
          <span class="text-end text-sm text-muted-foreground">side</span>
          <div
            role="group"
            aria-label="side"
            class="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
          >
            <For each={sides}>
              {(value) => (
                <button
                  type="button"
                  aria-pressed={side() === value ? "true" : "false"}
                  onClick={() => setSide(value)}
                  class="inline-flex h-full flex-1 cursor-default items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:border-border aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none"
                >
                  {value}
                </button>
              )}
            </For>
          </div>
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
        </div>
        <label class="flex items-center gap-2 text-sm text-muted-foreground">
          <input
            type="checkbox"
            checked={pinned()}
            onChange={(event) => setPinned(event.currentTarget.checked)}
            class="size-4 accent-primary"
          />
          Keep open
        </label>
      </div>
      <Tooltip
        open={pinned() || open()}
        onOpenChange={(next, details) => {
          setOpen(next)
          if (!next && pinned()) details.cancel()
        }}
      >
        <TooltipTrigger class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none">
          <svg
            class="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
            <path d="M12 17h.01" />
          </svg>
        </TooltipTrigger>
        <TooltipContent
          side={side()}
          align={align()}
          sideOffset={8}
          arrowPadding={8}
          class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none"
        >
          <TooltipArrow class="size-2.5 rotate-45 rounded-[2px] bg-foreground data-[side=bottom]:-top-1 data-[side=left]:-right-1 data-[side=right]:-left-1 data-[side=top]:-bottom-1" />
          Keyboard shortcuts
        </TooltipContent>
      </Tooltip>
    </div>
  )
}

export { Example }
