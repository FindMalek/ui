import {
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@ui-sdk/solid/popover"
import { createSignal, For } from "solid-js"

const sides = ["top", "right", "bottom", "left"] as const
const aligns = ["start", "center", "end"] as const

function Example() {
  const [open, setOpen] = createSignal(false)
  const [side, setSide] = createSignal<(typeof sides)[number]>("bottom")
  const [align, setAlign] = createSignal<(typeof aligns)[number]>("start")
  let controls: HTMLDivElement | undefined

  return (
    <div class="flex flex-col items-center gap-8">
      <div ref={controls} class="flex flex-col items-center gap-2">
        <div
          role="group"
          aria-label="Side"
          class="inline-flex cursor-default h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
        >
          <For each={sides}>
            {(value) => (
              <button
                type="button"
                aria-pressed={side() === value ? "true" : "false"}
                onClick={() => setSide(value)}
                class="inline-flex cursor-default h-full flex-1 items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none"
              >
                {value}
              </button>
            )}
          </For>
        </div>
        <div
          role="group"
          aria-label="Align"
          class="inline-flex cursor-default h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
        >
          <For each={aligns}>
            {(value) => (
              <button
                type="button"
                aria-pressed={align() === value ? "true" : "false"}
                onClick={() => setAlign(value)}
                class="inline-flex cursor-default h-full flex-1 items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none"
              >
                {value}
              </button>
            )}
          </For>
        </div>
      </div>
      <Popover
        open={open()}
        onOpenChange={(next, details) => {
          const target = details.event?.target
          if (!next && target instanceof Node && controls?.contains(target)) return details.cancel()
          setOpen(next)
        }}
      >
        <PopoverTrigger
          aria-label="Help"
          class="inline-flex cursor-default size-8 shrink-0 items-center justify-center rounded-2xl border border-border bg-background bg-clip-padding whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
        >
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
        </PopoverTrigger>
        <PopoverContent
          side={side()}
          align={align()}
          sideOffset={10}
          arrowPadding={12}
          class="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 motion-reduce:transition-none"
        >
          <PopoverArrow class="size-2.5 rotate-45 border-foreground/5 bg-popover data-[side=bottom]:-top-[5px] data-[side=bottom]:border-t data-[side=bottom]:border-l data-[side=top]:-bottom-[5px] data-[side=top]:border-r data-[side=top]:border-b data-[side=left]:-right-[5px] data-[side=left]:border-t data-[side=left]:border-r data-[side=right]:-left-[5px] data-[side=right]:border-b data-[side=right]:border-l" />
          <div class="flex flex-col gap-1">
            <PopoverTitle class="text-base font-medium">Keyboard shortcuts</PopoverTitle>
            <PopoverDescription class="text-sm text-muted-foreground">
              Press ? anywhere to see every shortcut.
            </PopoverDescription>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export { Example }
