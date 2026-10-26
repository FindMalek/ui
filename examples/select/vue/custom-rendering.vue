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
import { Check, ChevronDown } from "@lucide/vue"

type Member = { id: number; name: string; email: string }

const members: Member[] = [
  { id: 1, name: "Ada Lovelace", email: "ada@example.com" },
  { id: 2, name: "Grace Hopper", email: "grace@example.com" },
  { id: 3, name: "Alan Turing", email: "alan@example.com" },
  { id: 4, name: "Margaret Hamilton", email: "margaret@example.com" },
]
</script>

<template>
  <Select default-value="1">
    <div class="flex w-64 flex-col gap-2">
      <SelectLabel class="text-sm leading-none font-medium">Reviewer</SelectLabel>
      <SelectTrigger>
        <template #render="{ props, state }">
          <button
            v-bind="props"
            class="flex h-10 w-full min-w-0 items-center gap-2 rounded-full border border-transparent bg-input/50 ps-1.5 pe-3 text-sm outline-none transition-[color,box-shadow] duration-200 select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
          >
            <SelectValue v-slot="{ state: selected }" class="flex items-center gap-2 truncate">
              <span
                class="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-medium text-primary-foreground"
              >
                {{ members.find((candidate) => String(candidate.id) === selected.value)?.name.slice(0, 1) }}
              </span>
              {{ selected.label }}
            </SelectValue>
            <ChevronDown
              class="ms-auto size-4 shrink-0 text-muted-foreground transition-transform"
              :class="{ 'rotate-180': state.open }"
            />
          </button>
        </template>
      </SelectTrigger>
    </div>
    <SelectContent
      class="max-h-(--available-height) min-w-(--anchor-width) origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10"
    >
      <SelectItem
        v-for="member in members"
        :key="member.id"
        :value="String(member.id)"
        :label="member.name"
        :disabled="member.id === 4"
      >
        <template #render="{ props, state }">
          <div
            v-bind="props"
            class="flex cursor-default items-center gap-2 rounded-xl p-1.5 text-sm outline-none select-none"
            :class="{ 'bg-accent text-accent-foreground': state.highlighted, 'opacity-50': state.disabled }"
          >
            <span
              class="flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-medium"
              :class="
                state.selected
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-background text-muted-foreground ring-1 ring-foreground/10'
              "
            >
              {{ member.name.slice(0, 1) }}
            </span>
            <span class="flex flex-col">
              {{ member.name }}
              <span class="text-xs text-muted-foreground">{{
                state.disabled ? "Out of office" : member.email
              }}</span>
            </span>
            <SelectItemIndicator>
              <template #render="{ props: indicatorProps, state: indicator }">
                <span v-bind="indicatorProps" class="ms-auto">
                  <Check :class="indicator.selected ? 'size-4' : 'hidden'" />
                </span>
              </template>
            </SelectItemIndicator>
          </div>
        </template>
      </SelectItem>
    </SelectContent>
  </Select>
</template>
