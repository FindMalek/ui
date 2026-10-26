import * as React from "react"
import { createPopoverController, Popover, PopoverContent } from "@ui-sdk/react/popover"

type Spot = { x: number; y: number }

const note = createPopoverController<Spot>()

function Example() {
  const [timed, setTimed] = React.useState(false)
  const [status, setStatus] = React.useState("Click anywhere on the card")
  return (
    <div className="flex w-72 flex-col gap-2 text-sm">
      <div
        role="button"
        tabIndex={0}
        aria-label="Card"
        onClick={async (event) => {
          const box = event.currentTarget.getBoundingClientRect()
          const result = await note.open({
            anchor: { x: event.clientX, y: event.clientY },
            payload: { x: Math.round(event.clientX - box.left), y: Math.round(event.clientY - box.top) },
            signal: timed ? AbortSignal.timeout(2000) : undefined,
          })
          setStatus(
            `Closed by ${result.reason} (${result.source})${result.returnValue ? `, ${result.returnValue}` : ""}`,
          )
        }}
        className="grid h-36 place-items-center rounded-xl border border-dashed border-border text-muted-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        Click to leave a note
      </div>
      <Popover controller={note}>
        <PopoverContent<Spot>
          align="start"
          sideOffset={4}
          className="flex w-44 flex-col gap-2 rounded-xl bg-popover p-3 text-xs shadow-lg ring-1 ring-foreground/5 outline-none"
        >
          {(state) => {
            const spot = state.payload
            return (
              <>
                <p data-spot>{spot ? `A note at ${spot.x}, ${spot.y}` : ""}</p>
                <button
                  type="button"
                  onClick={() => note.close({ returnValue: "kept" })}
                  className="self-start rounded-md bg-foreground px-2 py-1 text-background"
                >
                  Keep
                </button>
              </>
            )
          }}
        </PopoverContent>
      </Popover>
      <label className="flex items-center gap-1.5 text-xs">
        <input type="checkbox" checked={timed} onChange={(event) => setTimed(event.target.checked)} />
        Close by itself
      </label>
      <p data-note-status className="text-xs text-muted-foreground">
        {status}
      </p>
    </div>
  )
}

export { Example, note, type Spot }
