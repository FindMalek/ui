import * as React from "react"
import { announce, definePrimitive } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"
import { CheckIcon, CopyIcon } from "lucide-react"

type CopyOptions = {
  text: string
}

type CopyState = { text: string; copied: boolean }

const copy = definePrimitive({
  name: "copy",
  options: { text: "string" },
  state: (options: CopyOptions): CopyState => ({ text: options.text, copied: false }),
  sync: (options) => ({ text: options.text }),
  api: (context) => {
    const { store } = context
    let timer: ReturnType<typeof setTimeout> | undefined
    context.onDestroy(() => clearTimeout(timer))
    return {
      async copy() {
        await navigator.clipboard?.writeText(store.get().text).catch(() => {})
        announce("Copied")
        store.set({ copied: true })
        clearTimeout(timer)
        timer = setTimeout(() => store.set({ copied: false }), 1500)
      },
    }
  },
  slots: (slot) => ({
    root: slot<{}, { copied: boolean }>({
      state: (state) => ({ copied: state.copied }),
      attrs: (state) => ({ type: "button", "data-copied": state.copied ? "" : undefined }),
      press: ({ api }) => api.copy(),
    }),
  }),
})

const parts = createParts(copy, { root: "button" })

const CopyButton = parts.Root

function Example() {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-muted/30 py-1.5 pr-1.5 pl-3 font-mono text-sm">
      <span>npm add @ui-sdk/core</span>
      <CopyButton
        text="npm add @ui-sdk/core"
        aria-label="Copy command"
        className="inline-flex h-8 w-24 shrink-0 items-center justify-center gap-2 rounded-lg border border-border bg-background px-3 font-sans text-xs font-medium shadow-xs outline-none transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/30"
      >
        {({ copied }) => (
          <>
            {copied ? (
              <CheckIcon className="size-3.5" aria-hidden="true" />
            ) : (
              <CopyIcon className="size-3.5" aria-hidden="true" />
            )}
            {copied ? "Copied" : "Copy"}
          </>
        )}
      </CopyButton>
    </div>
  )
}

export { copy, CopyButton, Example, type CopyOptions, type CopyState }
