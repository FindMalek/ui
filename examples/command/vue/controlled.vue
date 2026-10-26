<script setup lang="ts">
import { Command, CommandInput, CommandItem, CommandList, CommandPage } from "@ui-sdk/vue/command"
import { ref } from "vue"

const themes = [
  { value: "light", label: "Light" },
  { value: "dark", label: "Dark" },
  { value: "system", label: "System" },
]

const value = ref<string | null>("dark")
const query = ref("")
const pages = ref(["theme"])
const reason = ref("")
</script>

<template>
  <div class="flex w-full max-w-sm flex-col gap-3">
    <Command
      v-model:value="value"
      v-model:query="query"
      v-model:pages="pages"
      class="flex flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground shadow-sm ring-1 ring-foreground/5 dark:ring-foreground/10"
      @value-change="(_next: string | null, details: { reason: string }) => (reason = details.reason)"
    >
      <div class="p-1 pb-0">
        <CommandInput
          aria-label="Search themes"
          placeholder="Search themes..."
          class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm"
        />
      </div>
      <CommandList class="p-1 outline-none">
        <CommandPage>
          <CommandItem
            value="theme"
            page="theme"
            class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
            >Change theme…</CommandItem
          >
        </CommandPage>
        <CommandPage value="theme">
          <CommandItem
            v-for="theme in themes"
            :key="theme.value"
            :value="theme.value"
            class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
          >
            {{ theme.label }}
          </CommandItem>
        </CommandPage>
      </CommandList>
    </Command>
    <output class="text-sm text-muted-foreground">
      Highlighted {{ value ?? "nothing" }} ({{ reason || "start" }}), text “{{ query }}”, pages [{{
        pages.join(", ")
      }}]
    </output>
    <Command
      default-value="system"
      default-query="s"
      :default-pages="[]"
      debug
      class="flex flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground shadow-sm ring-1 ring-foreground/5 dark:ring-foreground/10"
    >
      <div class="p-1 pb-0">
        <CommandInput
          aria-label="Search themes, uncontrolled"
          class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 md:text-sm"
        />
      </div>
      <CommandList class="p-1 outline-none">
        <CommandItem
          v-for="theme in themes"
          :key="theme.value"
          :value="theme.value"
          class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
        >
          {{ theme.label }}
        </CommandItem>
      </CommandList>
    </Command>
  </div>
</template>
