import * as React from "react"
import { createTypeahead, definePrimitive, elements, idPart, isTypeaheadKey, labelOf } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type CommandListState = { command: string }

const commandList = definePrimitive({
  name: "command-list",
  state: (): CommandListState => ({ command: "copy" }),
  api: (context) => {
    const typeahead = createTypeahead()
    return {
      keydown(event: KeyboardEvent) {
        if (!isTypeaheadKey(event)) return
        const commands = elements(context, "command")
        const current = commands.findIndex((command) => command.key === context.store.get().command)
        const next = typeahead(
          event.key,
          commands.map((command) => labelOf(command.el)),
          current,
        )
        if (next === -1) return
        event.preventDefault()
        context.store.set({ command: commands[next].key })
      },
    }
  },
  slots: (slot) => ({
    root: slot<{}>({
      attrs: (state, part) => ({
        role: "listbox",
        tabindex: "0",
        "aria-activedescendant": `${part.id}-${idPart(state.command)}`,
      }),
      on: { keydown: (event, { api }) => api.keydown(event) },
    }),
    command: slot<{ value: string }>({
      props: { value: "string" },
      attrs: (state, part) => ({
        role: "option",
        id: `${part.id}-${idPart(part.key)}`,
        "aria-selected": String(state.command === part.key),
      }),
    }),
  }),
})

const parts = createParts(commandList, { root: "div", command: "div" })

const CommandList = parts.Root

const CommandListCommand = parts.Command

const optionClass =
  "flex items-center justify-between rounded-md px-3 py-1.5 text-sm aria-selected:bg-muted aria-selected:font-medium"

function Example() {
  return (
    <CommandList
      aria-label="Edit"
      className="flex w-48 flex-col rounded-lg border border-border p-1 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <CommandListCommand value="copy" className={optionClass}>
        Copy{" "}
        <kbd aria-hidden="true" className="text-xs text-muted-foreground">
          ⌘C
        </kbd>
      </CommandListCommand>
      <CommandListCommand value="cut" className={optionClass}>
        Cut{" "}
        <kbd aria-hidden="true" className="text-xs text-muted-foreground">
          ⌘X
        </kbd>
      </CommandListCommand>
      <CommandListCommand value="paste" className={optionClass}>
        Paste{" "}
        <kbd aria-hidden="true" className="text-xs text-muted-foreground">
          ⌘V
        </kbd>
      </CommandListCommand>
      <CommandListCommand value="delete" aria-label="Delete" className={optionClass}>
        <svg aria-hidden="true" viewBox="0 0 24 24" className="size-4 fill-none stroke-current stroke-2">
          <path d="M4 7h16M9 7V4h6v3m-8 0 1 13h8l1-13" />
        </svg>
      </CommandListCommand>
    </CommandList>
  )
}

export { CommandList, CommandListCommand, commandList, type CommandListState, Example }
