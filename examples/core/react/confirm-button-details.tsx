import * as React from "react"
import { ConfirmButton } from "./confirm-button"

function Example() {
  const [locked, setLocked] = React.useState(false)
  const [last, setLast] = React.useState("Press the button, or wait for it to disarm.")
  return (
    <div className="flex w-80 flex-col gap-3 text-sm">
      <div className="flex items-center gap-3">
        <ConfirmButton
          timeout={2000}
          onArmedChange={(armed, details) => {
            if (locked) details.cancel()
            setLast(
              `${armed ? "Arm" : "Disarm"}: ${details.reason}, from ${details.source}${details.canceled ? ", canceled" : ""}`,
            )
          }}
          className="h-8 rounded-2xl border border-destructive/20 bg-destructive/5 px-3 font-medium text-destructive outline-none transition-colors hover:bg-destructive/10 focus-visible:ring-3 focus-visible:ring-destructive/30 data-armed:border-destructive/40 data-armed:bg-destructive/10"
        >
          {({ armed }) => (armed ? "Press again to delete" : "Delete")}
        </ConfirmButton>
        <label className="flex items-center gap-2 text-muted-foreground">
          <input type="checkbox" checked={locked} onChange={(event) => setLocked(event.target.checked)} />
          Lock
        </label>
      </div>
      <p data-last className="text-muted-foreground">
        {last}
      </p>
    </div>
  )
}

export { Example }
