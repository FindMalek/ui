import * as React from "react"
import { definePrimitive, direct } from "@ui-sdk/core"
import { createParts } from "@ui-sdk/react/primitive"

type FilterListState = { query: string }

const filterList = definePrimitive({
  name: "filter-list",
  state: (): FilterListState => ({ query: "" }),
  api: (context) => ({
    filter: (query: string) => context.store.set({ query }),
  }),
  slots: (slot) => ({
    input: slot({
      attrs: (state) => ({ type: "search", value: state.query }),
      on: { input: (event, { api }) => api.filter((event.target as HTMLInputElement).value) },
    }),
    list: slot({ attrs: () => ({ role: "list" }) }),
    item: slot<{ value: string }>({
      props: { value: "string" },
      direct: direct(["hidden"]),
      attrs: (state, part) => ({
        role: "listitem",
        hidden: part.key.toLowerCase().includes(state.query.toLowerCase()) ? undefined : "",
      }),
    }),
  }),
})

const parts = createParts(filterList, { input: "input", list: "ul", item: "li" })

const FilterList = parts.Root

const FilterListInput = parts.Input

const FilterListList = parts.List

const FilterListItem = parts.Item

const countries = ["Argentina", "Australia", "Austria", "Belgium", "Brazil", "Canada", "Chile", "Denmark"]

function Example() {
  return (
    <FilterList>
      <div className="flex w-64 flex-col gap-2 text-sm">
        <FilterListInput
          aria-label="Filter countries"
          placeholder="Filter countries"
          className="h-8 rounded-lg border border-border bg-transparent px-3 outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        />
        <FilterListList className="flex flex-col gap-1">
          {countries.map((country) => (
            <FilterListItem key={country} value={country} className="px-1">
              {country}
            </FilterListItem>
          ))}
        </FilterListList>
      </div>
    </FilterList>
  )
}

export {
  Example,
  filterList,
  FilterList,
  FilterListInput,
  FilterListItem,
  FilterListList,
  type FilterListState,
}
