<script lang="ts">
  import { Check, ChevronDown } from "@lucide/svelte"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectItemIndicator,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@ui-sdk/svelte/select"

  type Member = { id: number; name: string; email: string }

  const members: Member[] = [
    { id: 1, name: "Ada Lovelace", email: "ada@example.com" },
    { id: 2, name: "Grace Hopper", email: "grace@example.com" },
    { id: 3, name: "Alan Turing", email: "alan@example.com" },
    { id: 4, name: "Margaret Hamilton", email: "margaret@example.com" },
  ]

  let assignee = $state<Member | null>({ ...members[1] })
</script>

<div class="flex w-64 max-w-full flex-col gap-3">
  <Select
    bind:value={assignee}
    name="assignee"
    itemToValue={(member: Member) => String(member.id)}
    itemToLabel={(member: Member) => member.name}
    isItemEqualToValue={(item: Member, value: Member) => item.id === value.id}
    placeholder="Unassigned"
  >
    <div class="flex flex-col gap-2">
      <SelectLabel class="text-sm leading-none font-medium">Assignee</SelectLabel>
      <SelectTrigger
        class="flex h-8 w-full min-w-0 cursor-default items-center justify-between gap-1.5 rounded-2xl border border-transparent bg-input/50 px-3 py-2 text-sm leading-5 whitespace-nowrap transition-[color,box-shadow] duration-200 select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-placeholder:text-muted-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50 data-readonly:border-input data-readonly:bg-transparent"
      >
        <SelectValue class="min-w-0 flex-1 truncate text-start" />
        <ChevronDown class="pointer-events-none block size-4 shrink-0 text-muted-foreground" />
      </SelectTrigger>
    </div>
    <SelectContent
      class="max-h-(--available-height) scroll-py-1 overflow-x-hidden overflow-y-auto box-border min-w-(--anchor-width) rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none"
    >
      {#each members as member (member.id)}
        <SelectItem
          value={member}
          class="relative flex min-h-7 w-full cursor-default flex-col rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
        >
          <span>{member.name}</span>
          <span class="text-xs leading-4 text-muted-foreground">{member.email}</span>
          <SelectItemIndicator
            class="pointer-events-none absolute end-2 flex size-4 items-center justify-center top-1/2 -translate-y-1/2"
          >
            <Check class="pointer-events-none block size-4 shrink-0" />
          </SelectItemIndicator>
        </SelectItem>
      {/each}
    </SelectContent>
  </Select>
  <output class="block min-h-10 text-sm leading-5 break-all text-muted-foreground">Submits assignee={assignee ? assignee.id : ""}</output>
</div>
