"use client"

import * as React from "react"
import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/react/radio"

function Example() {
  const id = React.useId()
  return (
    <div className="flex flex-wrap gap-8">
      <div className="flex flex-col gap-3">
        <span className="text-sm font-medium text-muted-foreground" id={`${id}-theme-heading`}>
          Theme
        </span>
        <RadioGroup
          className="flex flex-col gap-3"
          defaultValue="light"
          disabled
          aria-labelledby={`${id}-theme-heading`}
        >
          <label className="flex w-fit items-center gap-3 text-sm font-medium has-data-disabled:cursor-default has-data-disabled:opacity-50">
            <Radio
              className="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default motion-reduce:transition-none"
              value="light"
            >
              <RadioIndicator className="size-2 rounded-full bg-primary-foreground" />
            </Radio>
            Light
          </label>
          <label className="flex w-fit items-center gap-3 text-sm font-medium has-data-disabled:cursor-default has-data-disabled:opacity-50">
            <Radio
              className="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default motion-reduce:transition-none"
              value="dark"
            >
              <RadioIndicator className="size-2 rounded-full bg-primary-foreground" />
            </Radio>
            Dark
          </label>
          <label className="flex w-fit items-center gap-3 text-sm font-medium has-data-disabled:cursor-default has-data-disabled:opacity-50">
            <Radio
              className="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default motion-reduce:transition-none"
              value="system"
            >
              <RadioIndicator className="size-2 rounded-full bg-primary-foreground" />
            </Radio>
            System
          </label>
        </RadioGroup>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm font-medium text-muted-foreground" id={`${id}-notify-heading`}>
          Notify me about
        </span>
        <RadioGroup
          className="flex flex-col gap-3"
          defaultValue="all"
          aria-labelledby={`${id}-notify-heading`}
        >
          <label className="flex w-fit items-center gap-3 text-sm font-medium has-data-disabled:cursor-default has-data-disabled:opacity-50">
            <Radio
              className="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default motion-reduce:transition-none"
              value="all"
            >
              <RadioIndicator className="size-2 rounded-full bg-primary-foreground" />
            </Radio>
            All
          </label>
          <label className="flex w-fit items-center gap-3 text-sm font-medium has-data-disabled:cursor-default has-data-disabled:opacity-50">
            <Radio
              className="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default motion-reduce:transition-none"
              value="mentions"
              disabled
            >
              <RadioIndicator className="size-2 rounded-full bg-primary-foreground" />
            </Radio>
            Mentions
          </label>
          <label className="flex w-fit items-center gap-3 text-sm font-medium has-data-disabled:cursor-default has-data-disabled:opacity-50">
            <Radio
              className="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default motion-reduce:transition-none"
              value="nothing"
            >
              <RadioIndicator className="size-2 rounded-full bg-primary-foreground" />
            </Radio>
            Nothing
          </label>
        </RadioGroup>
      </div>
    </div>
  )
}

export { Example }
