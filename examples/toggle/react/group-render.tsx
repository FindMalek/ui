"use client"

import { Toggle, ToggleGroup, ToggleIcon } from "@ui-sdk/react/toggle"
import { Bookmark, Heart, Star } from "lucide-react"

const reactions = [
  { value: "star", label: "Favorite", icon: Star },
  { value: "heart", label: "Like", icon: Heart },
  { value: "bookmark", label: "Save", icon: Bookmark },
]

function Example() {
  return (
    <ToggleGroup
      multiple
      aria-label="Reactions"
      className={(state) =>
        state.value.length > 0
          ? "flex w-fit items-center gap-1 rounded-3xl border border-border p-1 transition-colors"
          : "flex w-fit items-center gap-1 rounded-3xl border border-transparent p-1 transition-colors"
      }
    >
      {reactions.map((item) => (
        <Toggle
          key={item.value}
          value={item.value}
          aria-label={item.label}
          className="inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted disabled:pointer-events-none data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
          render={(props, state) => (
            <button {...props}>
              <ToggleIcon className="flex">
                <item.icon className={state.pressed ? "size-4 fill-current" : "size-4"} />
              </ToggleIcon>
            </button>
          )}
        />
      ))}
    </ToggleGroup>
  )
}

export { Example }
