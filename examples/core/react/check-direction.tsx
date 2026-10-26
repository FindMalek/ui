import * as React from "react"
import { definePrimitive } from "@ui-sdk/core"
import { checkDirection } from "@ui-sdk/core/testing"
import { pager } from "./page-stepper"

const fixedPager = definePrimitive({
  name: "pager",
  state: () => ({ page: 1 }),
  api: (context) => ({
    keydown(event: KeyboardEvent) {
      const by = { ArrowRight: 1, ArrowLeft: -1 }[event.key]
      if (by) context.store.set({ page: Math.min(5, Math.max(1, context.store.get().page + by)) })
    },
  }),
  slots: (slot) => ({
    root: slot({
      attrs: () => ({ role: "spinbutton", tabindex: "0" }),
      on: { keydown: (event, { api }) => api.keydown(event) },
    }),
  }),
})

function Example() {
  const [broken, setBroken] = React.useState(false)
  const [result, setResult] = React.useState<{ ok: boolean; text: string } | null>(null)
  async function check() {
    try {
      await checkDirection(broken ? fixedPager : pager, {}, `<root>Page</root>`)
      setResult({ ok: true, text: "Passes: the arrows swap in right-to-left text." })
    } catch (error) {
      setResult({ ok: false, text: (error as Error).message })
    }
  }
  return (
    <div className="flex w-80 flex-col gap-3 text-sm">
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={check}
          className="h-8 rounded-lg bg-foreground px-3 font-medium text-background outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          Check both directions
        </button>
        <label className="flex items-center gap-2 text-muted-foreground">
          <input
            type="checkbox"
            checked={broken}
            onChange={(event) => {
              setBroken(event.target.checked)
              setResult(null)
            }}
          />
          Ignore the direction
        </label>
      </div>
      {result && (
        <p role="status" className={result.ok ? "" : "whitespace-pre-wrap font-medium text-foreground"}>
          {result.text}
        </p>
      )}
    </div>
  )
}

export { Example }
