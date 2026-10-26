import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@ui-sdk/solid/select"
import { For } from "solid-js"

type Member = { id: number; name: string; email: string }

const members: Member[] = [
  { id: 1, name: "Ada Lovelace", email: "ada@example.com" },
  { id: 2, name: "Grace Hopper", email: "grace@example.com" },
  { id: 3, name: "Alan Turing", email: "alan@example.com" },
  { id: 4, name: "Margaret Hamilton", email: "margaret@example.com" },
]

export function Example() {
  return (
    <Select defaultValue="1">
      <div class="flex w-64 flex-col gap-2">
        <SelectLabel class="text-sm leading-none font-medium">Reviewer</SelectLabel>
        <SelectTrigger
          render={(props, state) => (
            <button
              {...props}
              class="flex h-10 w-full min-w-0 items-center gap-2 rounded-full border border-transparent bg-input/50 ps-1.5 pe-3 text-sm outline-none transition-[color,box-shadow] duration-200 select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
            >
              {props.children}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
                class={`ms-auto size-4 shrink-0 text-muted-foreground transition-transform ${state.open ? "rotate-180" : ""}`}
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          )}
        >
          <SelectValue class="flex items-center gap-2 truncate">
            {(state) => {
              const member = members.find((candidate) => String(candidate.id) === state.value)
              return (
                <>
                  <span class="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground">
                    {member?.name.slice(0, 1)}
                  </span>
                  {state.label}
                </>
              )
            }}
          </SelectValue>
        </SelectTrigger>
      </div>
      <SelectContent class="max-h-(--available-height) min-w-(--anchor-width) origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10">
        <For each={members}>
          {(member) => (
            <SelectItem
              value={String(member.id)}
              label={member.name}
              disabled={member.id === 4}
              class={(state) =>
                `flex cursor-default items-center gap-2 rounded-xl p-1.5 text-sm outline-none select-none ${state.highlighted ? "bg-accent text-accent-foreground" : ""} ${state.disabled ? "opacity-50" : ""}`
              }
            >
              {(state) => (
                <>
                  <span
                    class={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-medium ${state.selected ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground ring-1 ring-foreground/10"}`}
                  >
                    {member.name.slice(0, 1)}
                  </span>
                  <span class="flex flex-col">
                    {member.name}
                    <span class="text-xs text-muted-foreground">
                      {state.disabled ? "Out of office" : member.email}
                    </span>
                  </span>
                  <SelectItemIndicator
                    render={(props, indicator) => (
                      <span {...props} class="ms-auto">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          aria-hidden="true"
                          class={indicator.selected ? "size-4" : "hidden"}
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </span>
                    )}
                  />
                </>
              )}
            </SelectItem>
          )}
        </For>
      </SelectContent>
    </Select>
  )
}
