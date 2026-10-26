"use client"

import { registerShortcut } from "@ui-sdk/core/shortcuts"
import { Tooltip, TooltipContent, TooltipShortcut, TooltipTrigger } from "@ui-sdk/react/tooltip"
import { Save, Share2 } from "lucide-react"
import * as React from "react"

function Example() {
  const [status, setStatus] = React.useState("Nothing yet")
  const save = () => setStatus("Saved")
  const share = () => setStatus("Shared")

  React.useEffect(() => {
    const offSave = registerShortcut("mod+s", save)
    const offShare = registerShortcut("mod+shift+e", share)
    return () => {
      offSave()
      offShare()
    }
  }, [])

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2">
        <Tooltip shortcut="mod+s">
          <TooltipTrigger
            onClick={save}
            className="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none"
          >
            <Save className="size-4" />
          </TooltipTrigger>
          <TooltipContent className="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 has-data-[slot=tooltip-shortcut]:pe-1.5 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none">
            Save
            <TooltipShortcut className="inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-background/20 px-1 font-sans text-xs font-medium text-background dark:bg-background/10" />
          </TooltipContent>
        </Tooltip>
        <Tooltip shortcut="mod+shift+e">
          <TooltipTrigger
            onClick={share}
            className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none"
          >
            <Share2 className="size-4" />
            Share
          </TooltipTrigger>
          <TooltipContent className="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 has-data-[slot=tooltip-shortcut]:pe-1.5 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none">
            Share with your team
            <TooltipShortcut
              render={(props, state) => (
                <kbd
                  {...props}
                  className="inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-lg bg-background/20 px-1 font-sans text-xs font-medium text-background dark:bg-background/10"
                >
                  {state.text}
                </kbd>
              )}
            />
          </TooltipContent>
        </Tooltip>
      </div>
      <output className="mt-3 text-sm text-muted-foreground">{status}</output>
    </div>
  )
}

export { Example }
