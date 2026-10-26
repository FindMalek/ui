import * as React from "react"
import { StarIcon } from "lucide-react"
import { createChange, definePrimitive } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"
import { createAgent } from "@ui-sdk/react/agent"

const rating = definePrimitive({
  name: "rating",
  options: { defaultValue: "number" },
  state: (options: { defaultValue?: number }) => ({ value: options.defaultValue ?? 0 }),
  api: (context) => {
    const change = createChange(context)
    return {
      rate: (value: number, event?: Event) => change("value", value, { reason: "item-press", event }),
    }
  },
  slots: (slot) => ({
    root: slot({ attrs: () => ({ role: "group" }) }),
    star: slot<{ value: string }>({
      props: { value: "string" },
      attrs: (state, part) => ({
        type: "button",
        "aria-pressed": String(Number(part.key) <= state.value),
        "data-filled": Number(part.key) <= state.value ? "" : undefined,
      }),
      press: ({ api, key }, event) => api.rate(Number(key), event),
    }),
  }),
  agent: { actions: ["rate"] },
})

const parts = createParts(rating, { root: "div", star: "button" })
const Rating = parts.Root
const RatingStar = parts.Star

const agent = createAgent()

function Example() {
  const [output, setOutput] = React.useState("")
  const show = (value: unknown) => setOutput(JSON.stringify(value, null, 2))

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-4 text-sm">
      <Rating aria-label="Your rating" className="flex text-muted-foreground">
        {Array.from({ length: 5 }, (_, index) => (
          <RatingStar
            key={index}
            value={String(index + 1)}
            aria-label={`${index + 1} ${index === 0 ? "star" : "stars"}`}
            className="group inline-flex size-10 items-center justify-center rounded-lg outline-none focus-visible:ring-3 focus-visible:ring-ring/50 data-filled:text-amber-600 dark:data-filled:text-amber-400"
          >
            <StarIcon
              aria-hidden="true"
              className="size-8 fill-muted group-data-filled:fill-current"
              strokeWidth={1.5}
            />
          </RatingStar>
        ))}
      </Rating>
      <div className="flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={() => show(agent.snapshot().filter((entry) => entry.component === "rating"))}
          className="h-8 rounded-lg border border-border px-3 font-medium outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          Read the page
        </button>
        <button
          type="button"
          onClick={async () =>
            show(await agent.act({ steps: [{ ref: "Your rating", action: "rate", args: [4] }] }))
          }
          className="h-8 rounded-lg bg-foreground px-3 font-medium text-background outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          Ask for 4 stars
        </button>
      </div>
      {output && (
        <pre role="status" className="w-full overflow-x-auto rounded-lg bg-muted p-3 text-xs">
          {output}
        </pre>
      )}
    </div>
  )
}

export { Example }
