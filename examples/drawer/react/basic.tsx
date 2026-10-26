"use client"

import * as React from "react"
import {
  Drawer,
  DrawerBackdrop,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@ui-sdk/react/drawer"
import { Minus, Plus } from "lucide-react"
const goal = { initial: 350, min: 200, max: 400, step: 10 }

function Example() {
  const [calories, setCalories] = React.useState(goal.initial)
  return (
    <Drawer>
      <DrawerTrigger className="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-open:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
        Open Drawer
      </DrawerTrigger>
      <DrawerBackdrop className="fixed inset-0 bg-black/30 supports-backdrop-filter:backdrop-blur-sm" />
      <DrawerContent className="relative mx-auto flex max-h-[85dvh] w-full max-w-lg flex-col rounded-t-[min(var(--radius-4xl),24px)] bg-popover text-sm text-popover-foreground shadow-xl ring-1 ring-foreground/5 outline-none after:absolute after:inset-x-0 after:top-full after:h-24 after:bg-inherit">
        <div aria-hidden className="mx-auto mt-4 h-1.5 w-[100px] shrink-0 rounded-full bg-muted" />
        <div className="mx-auto w-full max-w-sm">
          <div className="flex flex-col gap-0.5 p-4 text-center md:gap-1.5">
            <DrawerTitle className="text-base font-medium text-foreground">Move Goal</DrawerTitle>
            <DrawerDescription className="text-sm text-muted-foreground">
              Set your daily activity goal.
            </DrawerDescription>
          </div>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center gap-2">
              <button
                type="button"
                aria-label="Decrease"
                disabled={calories <= goal.min}
                onClick={() => setCalories(calories - goal.step)}
                className="inline-flex cursor-default size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background bg-clip-padding outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none"
              >
                <Minus aria-hidden="true" className="size-4" />
              </button>
              <div className="flex-1 text-center">
                <div aria-live="polite" className="text-4xl font-medium tabular-nums">
                  {calories}
                </div>
                <div className="text-xs text-muted-foreground uppercase">Calories/day</div>
              </div>
              <button
                type="button"
                aria-label="Increase"
                disabled={calories >= goal.max}
                onClick={() => setCalories(calories + goal.step)}
                className="inline-flex cursor-default size-8 shrink-0 items-center justify-center rounded-full border border-border bg-background bg-clip-padding outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none"
              >
                <Plus aria-hidden="true" className="size-4" />
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">
            <DrawerClose
              value="submit"
              className="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-primary-foreground outline-none select-none transition-[color,background-color,box-shadow] hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none"
            >
              Submit
            </DrawerClose>
            <DrawerClose className="inline-flex cursor-default h-8 shrink-0 items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 motion-reduce:transition-none">
              Cancel
            </DrawerClose>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  )
}

export { Example }
