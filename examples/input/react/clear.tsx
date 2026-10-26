import { Input, InputClear, InputGroup } from "@ui-sdk/react/input"
import { Search, X } from "lucide-react"
import * as React from "react"

export function Example() {
  const [query, setQuery] = React.useState("Lovelace")
  const [reason, setReason] = React.useState("")
  return (
    <div className="flex w-full max-w-sm flex-col gap-3 text-foreground">
      <InputGroup className="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 px-2.5 text-sm text-muted-foreground transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50 motion-reduce:transition-none">
        <Search aria-hidden="true" className="size-4 shrink-0" />
        <Input
          type="search"
          aria-label="Search people"
          value={query}
          onValueChange={(value, details) => {
            setQuery(value)
            setReason(details.reason)
          }}
          className="h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-base text-foreground outline-none placeholder:text-muted-foreground md:text-sm [&::-webkit-search-cancel-button]:hidden"
        />
        <InputClear
          aria-label="Clear search"
          className="-me-1.5 inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none"
        >
          <X aria-hidden="true" className="size-4 shrink-0" />
        </InputClear>
      </InputGroup>
      <p className="min-h-5 text-sm text-muted-foreground">
        {reason ? `Last change: ${reason}` : "Type, or clear the search."}
      </p>
    </div>
  )
}
