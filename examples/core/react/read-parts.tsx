import * as React from "react"
import { partAttrs, partPresent, partState } from "@ui-sdk/core/testing"
import { readMore } from "./read-more"

function read(open: boolean) {
  const instance = readMore({ id: "more" })
  try {
    if (open) instance.api.toggle()
    const trigger = instance.part("trigger", {})
    const panel = instance.part("panel", {})
    return {
      trigger: JSON.stringify(partAttrs(trigger)),
      state: JSON.stringify(partState(trigger)),
      panel: String(partPresent(panel)),
    }
  } finally {
    instance.destroy()
  }
}

function Example() {
  const [open, setOpen] = React.useState(false)
  const parts = read(open)
  return (
    <div className="flex w-full max-w-md flex-col gap-3 text-sm">
      <label className="flex items-center gap-2 text-muted-foreground">
        <input type="checkbox" checked={open} onChange={(event) => setOpen(event.target.checked)} />
        Open it
      </label>
      <dl className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 font-mono text-xs">
        <dt className="text-muted-foreground">partAttrs(trigger)</dt>
        <dd data-attrs className="break-all">
          {parts.trigger}
        </dd>
        <dt className="text-muted-foreground">partState(trigger)</dt>
        <dd data-state>{parts.state}</dd>
        <dt className="text-muted-foreground">partPresent(panel)</dt>
        <dd data-present>{parts.panel}</dd>
      </dl>
    </div>
  )
}

export { Example }
