"use client"

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "cn"
import { CheckIcon, CopyIcon } from "lucide-react"
import * as React from "react"

// Copies the code of the frame it sits in.
function CopyButton({ className }: { className?: string }) {
  const [copied, setCopied] = React.useState(false)
  const timeout = React.useRef<ReturnType<typeof setTimeout>>(undefined)

  React.useEffect(() => () => clearTimeout(timeout.current), [])

  return (
    <Tooltip>
      <TooltipTrigger
        aria-label={copied ? "Copied" : "Copy code"}
        onClick={async (event) => {
          const code = event.currentTarget.closest("[data-code-frame]")?.querySelector("pre")?.textContent
          if (!code) return
          await navigator.clipboard.writeText(code)
          setCopied(true)
          clearTimeout(timeout.current)
          timeout.current = setTimeout(() => setCopied(false), 1500)
        }}
        className={cn(
          "inline-flex size-7 items-center justify-center rounded-full text-subtle outline-none transition-colors hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30",
          className,
        )}
      >
        {copied ? <CheckIcon className="size-3.5" /> : <CopyIcon className="size-3.5" />}
      </TooltipTrigger>
      <TooltipContent>{copied ? "Copied" : "Copy"}</TooltipContent>
    </Tooltip>
  )
}

export { CopyButton }
