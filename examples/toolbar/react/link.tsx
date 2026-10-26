"use client"

import { Toolbar, ToolbarButton, ToolbarLink, ToolbarSeparator } from "@ui-sdk/react/toolbar"
import { Check, ExternalLink, File, MessageCircle } from "lucide-react"
import * as React from "react"

function Example() {
  const [page, setPage] = React.useState("conversation")
  const follow = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return
    }
    event.preventDefault()
    setPage(event.currentTarget.hash.slice(1))
  }
  return (
    <div className="flex flex-col items-start gap-3">
      <Toolbar
        aria-label="Pull request"
        className="flex w-fit items-center gap-1 rounded-3xl border border-border p-1"
      >
        <ToolbarButton
          aria-label="Approve"
          className="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
        >
          <Check className="size-4" />
        </ToolbarButton>
        <ToolbarButton
          aria-label="Comment"
          className="inline-flex size-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-data-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none enabled:active:not-aria-disabled:translate-y-px motion-reduce:transform-none"
        >
          <MessageCircle className="size-4" />
        </ToolbarButton>
        <ToolbarSeparator className="mx-1 h-5 w-px shrink-0 bg-border" />
        <ToolbarLink
          href="#files"
          onClick={follow}
          className="inline-flex h-8 items-center gap-1.5 rounded-2xl px-3 text-sm font-medium whitespace-nowrap text-foreground underline-offset-4 cursor-default outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
        >
          <File className="size-4" />
          Files changed
        </ToolbarLink>
        <ToolbarLink
          aria-label="Checks"
          href="#checks"
          onClick={follow}
          className="inline-flex size-8 items-center justify-center gap-1.5 rounded-2xl text-sm font-medium whitespace-nowrap text-foreground underline-offset-4 cursor-default outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
        >
          <ExternalLink className="size-4" />
        </ToolbarLink>
      </Toolbar>
      <p className="text-sm text-muted-foreground">Showing: {page}</p>
    </div>
  )
}

export { Example }
