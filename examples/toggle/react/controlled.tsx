"use client"

import { createToggleController, Toggle, ToggleIcon } from "@ui-sdk/react/toggle"
import { Bell } from "lucide-react"
import * as React from "react"

function Example() {
  const [notifications] = React.useState(createToggleController)
  const [pressed, setPressed] = React.useState(true)
  const [reason, setReason] = React.useState("")

  return (
    <div className="flex flex-col items-start gap-3">
      <Toggle
        pressed={pressed}
        onPressedChange={(next, details) => {
          setPressed(next)
          setReason(details.reason)
        }}
        controller={notifications}
        className="group inline-flex h-8 min-w-8 shrink-0 cursor-default items-center justify-center gap-1 rounded-2xl border border-transparent bg-transparent px-2.5 text-sm font-medium whitespace-nowrap outline-none transition-colors not-data-disabled:hover:bg-muted not-data-disabled:hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-pressed:bg-muted disabled:pointer-events-none data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
      >
        <ToggleIcon className="flex">
          <Bell className="size-4 group-data-pressed:fill-current" />
        </ToggleIcon>
        Notifications
      </Toggle>
      <button
        type="button"
        className="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px motion-reduce:transform-none motion-reduce:transition-none"
        onClick={() => notifications.toggle()}
      >
        Toggle from outside
      </button>
      <output className="text-sm text-muted-foreground">
        Notifications: {pressed ? "on" : "off"}
        {reason && `, last change: ${reason}`}
      </output>
    </div>
  )
}

export { Example }
