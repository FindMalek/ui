"use client"

import { Command, CommandInput, CommandItem, CommandItemText, CommandList } from "@ui-sdk/react/command"
import { CornerDownLeft } from "lucide-react"

const pages = ["Anatomy", "Installation", "Styling"]

function Example() {
  return (
    <Command className="flex min-h-40 w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground ring-1 ring-foreground/5">
      <div className="shrink-0 p-1 pb-0">
        <CommandInput
          aria-label="Search docs"
          placeholder="Search docs..."
          className="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
        />
      </div>
      <CommandList className="min-h-0 p-1 outline-none">
        {pages.map((page) => (
          <CommandItem
            key={page}
            value={page}
            render={<a href={`#${page.toLowerCase()}`} />}
            className="group relative flex min-h-7 cursor-default items-center justify-between gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 no-underline"
          >
            {(state) => (
              <>
                <CommandItemText>
                  {(text) =>
                    text.segments.map((segment, index) =>
                      segment.match ? (
                        <strong key={index} className="font-semibold">
                          {segment.text}
                        </strong>
                      ) : (
                        segment.text
                      ),
                    )
                  }
                </CommandItemText>
                {state.highlighted && (
                  <CornerDownLeft
                    aria-hidden="true"
                    className="pointer-events-none block size-4 shrink-0 text-muted-foreground"
                  />
                )}
              </>
            )}
          </CommandItem>
        ))}
      </CommandList>
    </Command>
  )
}

export { Example }
