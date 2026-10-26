import * as React from "react"
import { definePrimitive, toLocale } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type LanguageTagState = { tag: string }

const languageTag = definePrimitive({
  name: "language-tag",
  state: (): LanguageTagState => ({ tag: "en_US" }),
  api: (context) => ({
    change: (tag: string) => context.store.set({ tag }),
  }),
  slots: (slot) => ({
    root: slot<{}, { locale: string | undefined }>({ state: (state) => ({ locale: toLocale(state.tag) }) }),
    input: slot({
      attrs: (state) => ({ value: state.tag, spellcheck: "false" }),
      on: { input: (event, { api }) => api.change((event.target as HTMLInputElement).value) },
    }),
  }),
})

const parts = createParts(languageTag, { root: "div", input: "input" })

const LanguageTag = parts.Root

const LanguageTagInput = parts.Input

const date = new Date(Date.UTC(2026, 9, 21))

function Example() {
  return (
    <LanguageTag className="flex w-64 flex-col gap-2 text-sm">
      {({ locale }) => (
        <>
          <LanguageTagInput
            aria-label="Language tag"
            className="h-8 rounded-lg border border-border bg-transparent px-3 font-mono outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          />
          <p data-locale>{locale ? `Intl reads ${locale}` : "Not a language tag"}</p>
          <p data-date className="text-muted-foreground">
            {new Intl.DateTimeFormat(locale, { dateStyle: "long", timeZone: "UTC" }).format(date)}
          </p>
        </>
      )}
    </LanguageTag>
  )
}

export { Example, languageTag, LanguageTag, LanguageTagInput, type LanguageTagState }
