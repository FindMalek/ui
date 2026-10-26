"use client"

import { useAsyncOptions } from "@ui-sdk/react/async-options"
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandStatus,
} from "@ui-sdk/react/command"

function searchIssues(query: string, { signal }: { signal: AbortSignal }) {
  const issues = [
    "Fix login redirect",
    "Dark mode flicker",
    "Add billing page",
    "Search is slow",
    "Update dependencies",
    "Crash on upload",
    "Export to CSV",
    "Keyboard shortcuts help",
  ]
  return new Promise<{ value: string; label: string }[]>((resolve, reject) => {
    const timer = setTimeout(() => {
      const needle = query.trim().toLowerCase()
      resolve(
        issues
          .filter((issue) => issue.toLowerCase().includes(needle))
          .map((issue) => ({ value: issue.toLowerCase().replaceAll(" ", "-"), label: issue })),
      )
    }, 400)
    signal.addEventListener("abort", () => {
      clearTimeout(timer)
      reject(new DOMException("Aborted", "AbortError"))
    })
  })
}

function Example() {
  const issues = useAsyncOptions(searchIssues, { debounce: 250, immediate: true })

  return (
    <Command
      filter={false}
      status={issues.status}
      onQueryChange={(query) => issues.setQuery(query)}
      onLoadMore={issues.loadMore}
      className="flex h-80 w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground ring-1 ring-foreground/5"
    >
      <div className="shrink-0 p-1 pb-0">
        <CommandInput
          aria-label="Search issues"
          placeholder="Search issues..."
          className="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
        />
      </div>
      <CommandStatus className="min-h-9 shrink-0 px-3 py-2 text-xs leading-4 text-muted-foreground">
        {(state) =>
          state.loading ? "Searching…" : `${state.count} ${state.count === 1 ? "issue" : "issues"}`
        }
      </CommandStatus>
      <CommandEmpty className="m-0 shrink-0 py-6 text-center text-sm leading-5 text-muted-foreground empty:hidden">
        {(state) => (state.empty && !state.loading ? `No issues match “${state.query}”.` : null)}
      </CommandEmpty>
      <CommandList className="min-h-0 flex-1 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none max-h-64 p-1 transition-opacity aria-busy:opacity-60">
        {issues.items.map((issue) => (
          <CommandItem
            key={issue.value}
            value={issue.value}
            label={issue.label}
            className="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
          >
            {issue.label}
          </CommandItem>
        ))}
      </CommandList>
    </Command>
  )
}

export { Example }
