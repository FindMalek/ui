"use client"

import { Tooltip, TooltipContent, TooltipTrigger } from "@ui-sdk/react/tooltip"
import { Bold, Code, Italic, Link, Underline } from "lucide-react"
import * as React from "react"

const tools = [
  { icon: Bold, label: "Bold" },
  { icon: Italic, label: "Italic" },
  { icon: Underline, label: "Underline" },
  { icon: Link, label: "Link" },
  { icon: Code, label: "Code" },
]

const delays = [0, 600, 1200]
const closeDelays = [0, 300]

function Example() {
  const [delay, setDelay] = React.useState(600)
  const [closeDelay, setCloseDelay] = React.useState(0)
  const [enabled, setEnabled] = React.useState(true)

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="grid grid-cols-[auto_auto] items-center gap-x-3 gap-y-2">
        <span className="text-end text-sm text-muted-foreground">delay</span>
        <div
          role="group"
          aria-label="delay"
          className="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
        >
          {delays.map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={delay === value}
              onClick={() => setDelay(value)}
              className="inline-flex h-full flex-1 cursor-default items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:border-border aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none"
            >
              {value}
            </button>
          ))}
        </div>
        <span className="text-end text-sm text-muted-foreground">closeDelay</span>
        <div
          role="group"
          aria-label="closeDelay"
          className="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
        >
          {closeDelays.map((value) => (
            <button
              key={value}
              type="button"
              aria-pressed={closeDelay === value}
              onClick={() => setCloseDelay(value)}
              className="inline-flex h-full flex-1 cursor-default items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:border-border aria-pressed:bg-background aria-pressed:text-foreground motion-reduce:transition-none"
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      <label className="flex items-center gap-2 text-sm text-muted-foreground">
        <input
          type="checkbox"
          checked={enabled}
          onChange={(event) => setEnabled(event.target.checked)}
          className="size-4 accent-primary"
        />
        Show tooltips
      </label>
      <div
        role="group"
        aria-label="Formatting"
        className="flex items-center gap-1 rounded-3xl border border-border p-1"
      >
        {tools.map((tool) => (
          <Tooltip key={tool.label} delay={delay} closeDelay={closeDelay} disabled={!enabled}>
            <TooltipTrigger className="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-aria-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-disabled:opacity-50 motion-reduce:transition-none">
              <tool.icon className="size-4" />
            </TooltipTrigger>
            <TooltipContent className="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none">
              {tool.label}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  )
}

export { Example }
