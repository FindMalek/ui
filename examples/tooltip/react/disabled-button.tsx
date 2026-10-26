"use client"

import { Tooltip, TooltipContent, TooltipTrigger } from "@ui-sdk/react/tooltip"
import * as React from "react"

function Example() {
  const [title, setTitle] = React.useState("")
  const [status, setStatus] = React.useState("Draft")
  const blocked = !title.trim()

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <input
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        placeholder="Post title"
        aria-label="Post title"
        className="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm motion-reduce:transition-none"
      />
      <div className="flex items-center gap-3">
        <Tooltip disabled={!blocked}>
          <TooltipTrigger
            aria-disabled={blocked || undefined}
            onClick={() => {
              if (!blocked) {
                setStatus(`Published “${title.trim()}”`)
              }
            }}
            className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none"
          >
            Publish
          </TooltipTrigger>
          <TooltipContent className="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none">
            Add a title to publish
          </TooltipContent>
        </Tooltip>
        <output className="text-sm text-muted-foreground">{status}</output>
      </div>
    </div>
  )
}

export { Example }
