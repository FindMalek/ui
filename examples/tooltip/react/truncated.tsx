"use client"

import { Tooltip, TooltipContent, TooltipTrigger } from "@ui-sdk/react/tooltip"
import { File } from "lucide-react"
import * as React from "react"

const files = [
  "Quarterly report, final revised version for the board.pdf",
  "Notes.txt",
  "Design review recording, October 2nd.mp4",
  "Budget.xlsx",
]

function FileRow({ name }: { name: string }) {
  const text = React.useRef<HTMLSpanElement>(null)

  return (
    <li>
      <Tooltip
        type="label"
        onOpenChange={(open, details) => {
          const span = text.current
          if (open && span && span.scrollWidth <= span.clientWidth) {
            details.cancel()
          }
        }}
      >
        <TooltipTrigger className="flex w-full items-center gap-2 px-3 py-2 text-start text-sm outline-none transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset motion-reduce:transition-none">
          <File className="size-4 shrink-0 text-muted-foreground" />
          <span ref={text} className="truncate">
            {name}
          </span>
        </TooltipTrigger>
        <TooltipContent className="inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-1.5 rounded-xl bg-foreground px-3 py-1.5 text-xs text-background transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 data-instant:transition-none motion-reduce:transition-none">
          {name}
        </TooltipContent>
      </Tooltip>
    </li>
  )
}

function Example() {
  return (
    <ul className="w-64 divide-y divide-border overflow-hidden rounded-2xl border border-border">
      {files.map((file) => (
        <FileRow key={file} name={file} />
      ))}
    </ul>
  )
}

export { Example }
