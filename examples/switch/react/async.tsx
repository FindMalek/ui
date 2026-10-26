"use client"

import * as React from "react"
import { createSwitchController } from "@ui-sdk/core/switch"
import { Switch, SwitchThumb } from "@ui-sdk/react/switch"
import { LoaderCircle } from "lucide-react"

const save = (_checked: boolean) => new Promise((resolve) => setTimeout(resolve, 800))

function Example() {
  const [backups] = React.useState(() => createSwitchController())
  const [saving, setSaving] = React.useState(false)
  const [saved, setSaved] = React.useState(false)
  const pending = React.useRef(false)

  return (
    <div className="flex flex-col items-start gap-2">
      <label className="flex items-center gap-2 text-sm font-medium">
        <Switch
          className="relative inline-flex h-5 w-8 shrink-0 cursor-default appearance-none items-center rounded-2xl border-2 border-transparent bg-input/90 p-0 outline-none transition-colors after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50 motion-reduce:transition-none aria-busy:cursor-wait aria-busy:opacity-50"
          controller={backups}
          aria-busy={saving}
          onCheckedChange={(next, details) => {
            if (details.reason === "imperative") return
            details.cancel()
            if (pending.current) return
            pending.current = true
            setSaving(true)
            setSaved(false)
            save(next).then(() => {
              pending.current = false
              backups.setChecked(next, { reason: "imperative" })
              setSaving(false)
              setSaved(true)
            })
          }}
        >
          <SwitchThumb className="pointer-events-none flex size-4 shrink-0 rounded-2xl bg-background shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] motion-reduce:transition-none items-center justify-center text-foreground">
            {saving && (
              <LoaderCircle aria-hidden="true" className="size-3 animate-spin motion-reduce:animate-none" />
            )}
          </SwitchThumb>
        </Switch>
        Automatic backups
      </label>
      <p className="m-0 block min-h-5 text-sm text-muted-foreground" role="status">
        {saving ? "Saving…" : saved ? "Saved" : ""}
      </p>
    </div>
  )
}

export { Example }
