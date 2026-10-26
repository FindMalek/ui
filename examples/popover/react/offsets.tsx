import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverTitle,
  PopoverTrigger,
} from "@ui-sdk/react/popover"
import * as React from "react"

const choices = {
  sideOffset: [0, 8, 24],
  alignOffset: [-16, 0, 16],
  collisionPadding: [8, 48],
}

export function Example() {
  const [offsets, setOffsets] = React.useState({ sideOffset: 8, alignOffset: 0, collisionPadding: 8 })

  return (
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        {(Object.keys(choices) as (keyof typeof choices)[]).map((name) => (
          <div
            key={name}
            role="group"
            aria-label={name}
            className="inline-flex h-8 w-fit items-center justify-center rounded-2xl bg-muted p-[3px] text-muted-foreground"
          >
            {choices[name].map((value) => (
              <button
                key={value}
                type="button"
                aria-pressed={offsets[name] === value}
                onClick={() => setOffsets({ ...offsets, [name]: value })}
                className="inline-flex h-full flex-1 items-center justify-center rounded-2xl border border-transparent px-2.5 py-0.5 text-sm font-medium whitespace-nowrap text-foreground/60 outline-none transition-[color,box-shadow] hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:bg-background aria-pressed:text-foreground aria-pressed:shadow-sm dark:text-muted-foreground dark:aria-pressed:border-input dark:aria-pressed:bg-input/30 dark:aria-pressed:text-foreground"
              >
                {name} {value}
              </button>
            ))}
          </div>
        ))}
      </div>
      <Popover>
        <PopoverTrigger className="inline-flex h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 dark:bg-transparent dark:hover:bg-input/30">
          Offsets
        </PopoverTrigger>
        <PopoverContent
          align="start"
          sideOffset={offsets.sideOffset}
          alignOffset={offsets.alignOffset}
          collisionPadding={offsets.collisionPadding}
          className="flex w-72 origin-(--transform-origin) flex-col gap-4 rounded-3xl bg-popover p-4 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10"
        >
          <div className="flex flex-col gap-1">
            <PopoverTitle className="text-base font-medium">Offsets</PopoverTitle>
            <PopoverDescription className="text-sm text-muted-foreground">
              {offsets.sideOffset}px from the trigger, shifted {offsets.alignOffset}px,{" "}
              {offsets.collisionPadding}px from the edges.
            </PopoverDescription>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
