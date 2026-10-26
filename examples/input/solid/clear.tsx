import { Input, InputClear, InputGroup } from "@ui-sdk/solid/input"
import { createSignal } from "solid-js"

export function Example() {
  const [query, setQuery] = createSignal("Lovelace")
  const [reason, setReason] = createSignal("")
  return (
    <div class="flex w-full max-w-sm flex-col gap-3 text-foreground">
      <InputGroup class="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 px-2.5 text-sm text-muted-foreground transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50 motion-reduce:transition-none">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          aria-hidden="true"
          class="size-4 shrink-0"
        >
          <path d="m21 21-4.34-4.34" />
          <circle cx="11" cy="11" r="8" />
        </svg>
        <Input
          type="search"
          aria-label="Search people"
          value={query()}
          onValueChange={(value, details) => {
            setQuery(value)
            setReason(details.reason)
          }}
          class="h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-base text-foreground outline-none placeholder:text-muted-foreground md:text-sm [&::-webkit-search-cancel-button]:hidden"
        />
        <InputClear
          aria-label="Clear search"
          class="-me-1.5 inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            class="size-4 shrink-0"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </InputClear>
      </InputGroup>
      <p class="min-h-5 text-sm text-muted-foreground">
        {reason() ? `Last change: ${reason()}` : "Type, or clear the search."}
      </p>
    </div>
  )
}
