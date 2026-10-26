<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@ui-sdk/vue/select"
import { ref } from "vue"
import { Check, ChevronDown } from "@lucide/vue"

type Member = { id: number; name: string; email: string }

const members: Member[] = [
  { id: 1, name: "Ada Lovelace", email: "ada@example.com" },
  { id: 2, name: "Grace Hopper", email: "grace@example.com" },
  { id: 3, name: "Alan Turing", email: "alan@example.com" },
  { id: 4, name: "Margaret Hamilton", email: "margaret@example.com" },
]

const assignee = ref<Member | null>({ ...members[1] })
</script>

<template>
  <div class="flex w-64 max-w-full flex-col gap-3">
    <Select
      v-model:value="assignee"
      name="assignee"
      :item-to-value="(member: Member) => String(member.id)"
      :item-to-label="(member: Member) => member.name"
      :is-item-equal-to-value="(item: Member, value: Member) => item.id === value.id"
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
        <SelectItem
          v-for="member in members"
          :key="member.id"
          :value="member"
          class="relative flex min-h-7 w-full cursor-default flex-col rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
        >
          <span>{{ member.name }}</span>
          <span class="text-xs leading-4 text-muted-foreground">{{ member.email }}</span>
          <SelectItemIndicator
            class="pointer-events-none absolute end-2 flex size-4 items-center justify-center top-1/2 -translate-y-1/2"
          >
            <Check class="pointer-events-none block size-4 shrink-0" />
          </SelectItemIndicator>
        </SelectItem>
      </SelectContent>
    </Select>
    <output class="block min-h-10 text-sm leading-5 break-all text-muted-foreground"
      >Submits assignee={{ assignee ? assignee.id : "" }}</output
    >
  </div>
</template>
