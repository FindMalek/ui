"use client"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@ui-sdk/react/select"
import * as React from "react"
import { Check, ChevronDown } from "lucide-react"

type Member = { id: number; name: string; email: string }

const members: Member[] = [
  { id: 1, name: "Ada Lovelace", email: "ada@example.com" },
  { id: 2, name: "Grace Hopper", email: "grace@example.com" },
  { id: 3, name: "Alan Turing", email: "alan@example.com" },
  { id: 4, name: "Margaret Hamilton", email: "margaret@example.com" },
]

function Example() {
  const [assignee, setAssignee] = React.useState<Member | null>({ ...members[1] })

  return (
    <div className="flex w-64 max-w-full flex-col gap-3">
      <Select
        value={assignee}
        onValueChange={setAssignee}
        name="assignee"
        itemToValue={(member) => String(member.id)}
        itemToLabel={(member) => member.name}
        isItemEqualToValue={(item, value) => item.id === value.id}
        placeholder="Unassigned"
      >
        <div className="flex flex-col gap-2">
          <SelectLabel className="text-sm leading-none font-medium">Assignee</SelectLabel>
          <SelectTrigger className="flex h-8 w-full min-w-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm leading-5 whitespace-nowrap transition-[color,box-shadow] duration-200 select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent">
            <SelectValue className="min-w-0 flex-1 truncate text-start" />
            <ChevronDown className="pointer-events-none block size-4 shrink-0 text-muted-foreground" />
          </SelectTrigger>
        </div>
        <SelectContent className="max-h-(--available-height) scroll-py-1 overflow-x-hidden overflow-y-auto box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none">
          {members.map((member) => (
            <SelectItem
              key={member.id}
              value={member}
              className="relative flex min-h-7 w-full cursor-default flex-col rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
            >
              <span>{member.name}</span>
              <span className="text-xs leading-4 text-muted-foreground">{member.email}</span>
              <SelectItemIndicator className="pointer-events-none absolute end-2 flex size-4 items-center justify-center top-1/2 -translate-y-1/2">
                <Check className="pointer-events-none block size-4 shrink-0" />
              </SelectItemIndicator>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <output className="m-0 min-h-5 text-sm leading-5 text-muted-foreground">
        Submits assignee={assignee ? assignee.id : ""}
      </output>
    </div>
  )
}

export { Example }
