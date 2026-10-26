import { registerShortcut } from "@ui-sdk/core/shortcuts"
import { Tooltip, TooltipContent, TooltipShortcut, TooltipTrigger } from "@ui-sdk/solid/tooltip"
import { createEffect, createSignal } from "solid-js"

function Example() {
  const [status, setStatus] = createSignal("Nothing yet")
  const save = () => setStatus("Saved")
  const share = () => setStatus("Shared")

  createEffect(
    () => 0,
    () => {
      const offSave = registerShortcut("mod+s", save)
      const offShare = registerShortcut("mod+shift+e", share)
      return () => {
        offSave()
        offShare()
      }
    },
  )

  return (
    <div class="flex flex-col items-center">
      <div class="flex gap-2">
        <Tooltip shortcut="mod+s">
          <TooltipTrigger
            onClick={save}
            class="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none"
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
              <path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
              <path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7" />
              <path d="M7 3v4a1 1 0 0 0 1 1h7" />
            </svg>
          </TooltipTrigger>
          <TooltipContent class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 has-data-[slot=tooltip-shortcut]:pe-1.5 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none">
            Save
            <TooltipShortcut class="inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-background/20 px-1 font-sans text-xs font-medium text-background dark:bg-background/10" />
          </TooltipContent>
        </Tooltip>
        <Tooltip shortcut="mod+shift+e">
          <TooltipTrigger
            onClick={share}
            class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none"
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
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
              <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
            </svg>
            Share
          </TooltipTrigger>
          <TooltipContent class="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 has-data-[slot=tooltip-shortcut]:pe-1.5 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none">
            Share with your team
            <TooltipShortcut
              render={(props, state) => (
                <kbd
                  {...props}
                  class="inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-background/20 px-1 font-sans text-xs font-medium text-background dark:bg-background/10"
                >
                  {state.text}
                </kbd>
              )}
            />
          </TooltipContent>
        </Tooltip>
      </div>
      <output class="mt-3 text-sm text-muted-foreground">{status()}</output>
    </div>
  )
}

export { Example }
