<script setup lang="ts">
import { Check, Search } from "@lucide/vue"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
} from "@ui-sdk/vue/combobox"

const users = [
  { id: 1, name: "Ada Lovelace", username: "ada", role: "Owner" },
  { id: 2, name: "Grace Hopper", username: "grace", role: "Admin" },
  { id: 3, name: "Alan Turing", username: "alan", role: "Member" },
  { id: 4, name: "Margaret Hamilton", username: "margaret", role: "Member" },
  { id: 5, name: "Edsger Dijkstra", username: "edsger", role: "Guest" },
]
</script>

<template>
  <Combobox>
    <div class="flex w-72 flex-col gap-2">
      <ComboboxLabel class="text-sm leading-none font-medium">Mention</ComboboxLabel>
      <ComboboxInput placeholder="@username">
        <template #render="{ props, state }">
          <div
            class="flex h-8 items-center gap-2 rounded-2xl border bg-input/50 ps-2.5 pe-1.5 transition-[color,box-shadow] duration-200"
            :class="state.open ? 'border-ring ring-3 ring-ring/30' : 'border-transparent'"
          >
            <Search class="size-4 shrink-0 text-muted-foreground" />
            <input
              v-bind="props"
              class="h-full min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground md:text-sm"
            />
          </div>
        </template>
      </ComboboxInput>
    </div>
    <ComboboxContent
      class="max-h-[min(18rem,var(--available-height))] w-(--anchor-width) min-w-36 origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10"
    >
      <ComboboxEmpty class="py-2 text-center text-sm text-muted-foreground empty:hidden"
        >No one by that name.</ComboboxEmpty
      >
      <ComboboxList>
        <ComboboxItem
          v-for="user in users"
          :key="user.id"
          :value="user.username"
          :label="user.name"
          :keywords="[user.username]"
        >
          <template #render="{ props, state }">
            <div
              v-bind="props"
              class="flex cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none"
              :class="{ 'bg-accent text-accent-foreground': state.highlighted }"
            >
              <span
                class="flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-medium"
                :class="
                  state.selected ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                "
              >
                {{ user.name.slice(0, 1) }}
              </span>
              <span class="flex flex-col">
                {{ user.name }}
                <span class="text-xs text-muted-foreground">@{{ user.username }}</span>
              </span>
              <Check v-if="state.selected" class="ms-auto size-4" />
            </div>
          </template>
        </ComboboxItem>
      </ComboboxList>
    </ComboboxContent>
  </Combobox>
</template>
