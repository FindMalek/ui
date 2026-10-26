import * as React from "react"
import { definePrimitive, isRTL } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type PagerState = { page: number }

const pager = definePrimitive({
  name: "pager",
  state: () => ({ page: 1 }),
  api: (context) => {
    const go = (by: number) =>
      context.store.set({ page: Math.min(5, Math.max(1, context.store.get().page + by)) })
    return {
      keydown(event: KeyboardEvent, el: HTMLElement) {
        const forward = isRTL(el) ? "ArrowLeft" : "ArrowRight"
        const back = isRTL(el) ? "ArrowRight" : "ArrowLeft"
        if (event.key === forward) {
          go(1)
        } else if (event.key === back) {
          go(-1)
        } else {
          return
        }
        event.preventDefault()
      },
    }
  },
  slots: (slot) => ({
    root: slot<{}, PagerState>({
      state: (state) => ({ page: state.page }),
      attrs: (state) => ({
        role: "spinbutton",
        tabindex: "0",
        "aria-valuemin": "1",
        "aria-valuemax": "5",
        "aria-valuenow": String(state.page),
      }),
      on: { keydown: (event, { el, api }) => el && api.keydown(event, el) },
    }),
  }),
})

const parts = createParts(pager, { root: "div" })

const Pager = parts.Root

function Example() {
  const [rtl, setRtl] = React.useState(false)
  return (
    <div className="flex w-72 flex-col gap-3 text-sm">
      <label className="flex items-center gap-2 text-muted-foreground">
        <input type="checkbox" checked={rtl} onChange={(event) => setRtl(event.target.checked)} />
        Right to left
      </label>
      <Pager
        dir={rtl ? "rtl" : "ltr"}
        aria-label="Page"
        className="flex flex-col gap-3 rounded-lg border border-border p-3 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        {({ page }) => (
          <>
            <span className="text-center text-muted-foreground">Page {page} of 5</span>
            <span aria-hidden className="flex items-center justify-between">
              {Array.from({ length: 5 }, (_, index) => index + 1).map((number) => (
                <span
                  key={number}
                  data-active={number === page ? "" : undefined}
                  className="inline-flex size-8 items-center justify-center rounded-md font-medium tabular-nums data-active:bg-foreground data-active:text-background"
                >
                  {number}
                </span>
              ))}
            </span>
          </>
        )}
      </Pager>
      <p className="text-xs text-muted-foreground">Next page: {rtl ? "← Left arrow" : "→ Right arrow"}</p>
    </div>
  )
}

export { Example, pager, Pager, type PagerState }
