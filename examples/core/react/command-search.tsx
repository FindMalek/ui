import * as React from "react"
import { definePrimitive } from "@ui-sdk/core"
import { fuzzyScore } from "@ui-sdk/core/text-match"
import { createParts } from "@ui-sdk/react/primitive"

type CommandSearchState = { query: string }

const commandSearch = definePrimitive({
  name: "command-search",
  state: (): CommandSearchState => ({ query: "" }),
  api: (context) => ({
    search: (query: string) => context.store.set({ query }),
  }),
  slots: (slot) => ({
    root: slot<{}, CommandSearchState>({ state: (state) => ({ query: state.query }) }),
    input: slot({
      attrs: (state) => ({ type: "search", value: state.query }),
      on: { input: (event, { api }) => api.search((event.target as HTMLInputElement).value) },
    }),
    list: slot({ attrs: () => ({ role: "list" }) }),
    command: slot({ attrs: () => ({ role: "listitem" }) }),
  }),
})

const parts = createParts(commandSearch, { root: "div", input: "input", list: "ul", command: "li" })

const CommandSearch = parts.Root

const CommandSearchInput = parts.Input

const CommandSearchList = parts.List

const CommandSearchCommand = parts.Command

const commands = [
  "Git push",
  "Git pull",
  "Go to file",
  "Open settings",
  "Settings",
  "Résumé template",
  "Toggle sidebar",
]

function rank(query: string) {
  return commands
    .map((command) => ({ command, score: fuzzyScore(command, query) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
}

function Example() {
  return (
    <CommandSearch className="flex w-64 flex-col gap-2 text-sm">
      {({ query }) => (
        <>
          <CommandSearchInput
            aria-label="Search commands"
            placeholder="Search commands"
            className="h-8 rounded-lg border border-border bg-transparent px-3 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
          />
          <CommandSearchList className="flex flex-col gap-1">
            {rank(query).map(({ command, score }) => (
              <CommandSearchCommand key={command} className="flex justify-between px-1">
                {command}
                <span className="text-muted-foreground tabular-nums">{score.toFixed(2)}</span>
              </CommandSearchCommand>
            ))}
          </CommandSearchList>
        </>
      )}
    </CommandSearch>
  )
}

export {
  CommandSearch,
  commandSearch,
  CommandSearchCommand,
  CommandSearchInput,
  CommandSearchList,
  type CommandSearchState,
  Example,
}
