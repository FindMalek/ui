import * as React from "react"
import { definePrimitive } from "@ui-sdk/core"
import { checkServer } from "@ui-sdk/core/testing"
import { readMore } from "./read-more"

const clock = definePrimitive({
  name: "clock",
  state: () => ({}),
  api: () => ({}),
  slots: (slot) => ({
    root: slot({ attrs: () => ({ "data-rendered": String(Date.now()) }) }),
  }),
})

function run(broken: boolean) {
  try {
    const html = broken
      ? checkServer(clock, {}, `<root>Now</root>`)
      : checkServer(readMore, {}, `<root><trigger>Read more</trigger><panel>More</panel></root>`)
    return { ok: true, text: html }
  } catch (error) {
    return { ok: false, text: (error as Error).message }
  }
}

function Example() {
  const [broken, setBroken] = React.useState(false)
  const [result, setResult] = React.useState<{ ok: boolean; text: string } | null>(null)
  return (
    <div className="flex w-full max-w-md flex-col gap-3 text-sm">
      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={() => setResult(run(broken))}
          className="h-8 rounded-lg bg-foreground px-3 font-medium text-background outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          Check the server HTML
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
          Read the clock in attrs
        </label>
      </div>
      {result && (
        <pre
          role="status"
          className={`overflow-x-auto rounded-lg bg-muted p-3 text-xs whitespace-pre-wrap ${result.ok ? "" : "font-medium text-foreground"}`}
        >
          {result.text}
        </pre>
      )}
    </div>
  )
}

export { Example }
