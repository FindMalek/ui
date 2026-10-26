import * as React from "react"
import { createChange, definePrimitive, isDismissal, type ChangeDetails } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type NoticeOptions = {
  defaultOpen?: boolean
  onOpenChange?: (open: boolean, details: ChangeDetails<"close-press" | "escape-key">) => void
}

type NoticeState = { open: boolean }

const notice = definePrimitive({
  name: "notice",
  options: { defaultOpen: "boolean", onOpenChange: "callback" },
  state: (options: NoticeOptions): NoticeState => ({ open: options.defaultOpen ?? true }),
  api: (context) => {
    const change = createChange(context)
    return {
      close: (
        details: { reason: "close-press"; event?: Event } | { reason: "escape-key"; event: KeyboardEvent },
      ) => change("open", false, details),
    }
  },
  slots: (slot) => ({
    root: slot<{}>({
      present: (state) => state.open,
      attrs: () => ({ role: "region" }),
      on: {
        keydown: (event, { api }) => {
          if (event.key === "Escape") api.close({ reason: "escape-key", event })
        },
      },
    }),
    close: slot({
      attrs: () => ({ type: "button" }),
      press: ({ api }, event) => api.close({ reason: "close-press", event }),
    }),
  }),
})

const parts = createParts(notice, { root: "div", close: "button" })

const Notice = parts.Root

const NoticeClose = parts.Close

function Example() {
  const [round, setRound] = React.useState(0)
  const [strict, setStrict] = React.useState(false)
  const [last, setLast] = React.useState("")
  return (
    <div className="flex w-80 flex-col gap-3 text-sm">
      <label className="flex items-center gap-2 text-muted-foreground">
        <input type="checkbox" checked={strict} onChange={(event) => setStrict(event.target.checked)} />
        Close only with the button
      </label>
      <Notice
        key={round}
        aria-label="Tip"
        onOpenChange={(_open, details) => {
          if (strict && isDismissal(details.reason)) details.cancel()
          setLast(`${details.reason}${details.canceled ? ", canceled" : ""}`)
        }}
        className="flex items-start gap-3 rounded-xl border border-border p-3"
      >
        <p className="flex-1 text-muted-foreground">
          Press Escape here, or use the button, to close this tip.
        </p>
        <NoticeClose className="rounded-md px-2 font-medium outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50">
          Got it
        </NoticeClose>
      </Notice>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setRound((count) => count + 1)}
          className="h-8 rounded-lg border border-border px-3 font-medium outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          Show the tip again
        </button>
        <span data-last className="text-muted-foreground">
          {last && `Last: ${last}`}
        </span>
      </div>
    </div>
  )
}

export { Example, notice, Notice, NoticeClose, type NoticeOptions, type NoticeState }
