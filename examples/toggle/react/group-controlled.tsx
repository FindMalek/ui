"use client"

import { Toggle, ToggleGroup, ToggleIcon, createToggleGroupController } from "@ui-sdk/react/toggle"
import { Bold, Italic, Underline } from "lucide-react"
import * as React from "react"

const formatting = [
  { value: "bold", label: "Bold", icon: Bold },
  { value: "italic", label: "Italic", icon: Italic },
  { value: "underline", label: "Underline", icon: Underline },
]

function Example() {
  const [editor] = React.useState(createToggleGroupController)
  const [value, setValue] = React.useState(["bold"])
  const [reason, setReason] = React.useState("")

  return (
    <div className="flex flex-col items-start gap-3">
      <ToggleGroup
        multiple
        aria-label="Text formatting"
        className="flex w-fit items-center gap-1"
        value={value}
        onValueChange={(next, details) => {
          setValue(next)
          setReason(details.reason)
        }}
        controller={editor}
      >
        {formatting.map((item) => (
          <Toggle
            key={item.value}
            value={item.value}
            aria-label={item.label}
            className="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted disabled:pointer-events-none data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
          >
            <ToggleIcon className="flex">
              <item.icon className="size-4" />
            </ToggleIcon>
          </Toggle>
        ))}
      </ToggleGroup>
      <button
        type="button"
        className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px motion-reduce:transform-none motion-reduce:transition-none"
        onClick={() => editor.setValue([])}
      >
        Clear
      </button>
      <output className="text-sm text-muted-foreground">
        Pressed: {value.length ? value.join(", ") : "none"}
        {reason && `, last change: ${reason}`}
      </output>
    </div>
  )
}

export { Example }
