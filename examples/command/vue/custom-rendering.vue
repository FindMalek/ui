<script setup lang="ts">
import { CornerDownLeft } from "@lucide/vue"
import { Command, CommandInput, CommandItem, CommandList } from "@ui-sdk/vue/command"

const pages = ["Anatomy", "Installation", "Styling"]
</script>

<template>
  <Command>
    <template #render="{ props, state }">
      <div
        v-bind="props"
        class="flex min-h-40 w-full max-w-sm flex-col overflow-hidden rounded-3xl bg-popover p-1 text-popover-foreground ring-1 ring-foreground/5"
      >
        <div class="shrink-0 p-1 pb-0">
          <CommandInput aria-label="Search docs" placeholder="Search docs...">
            <template #render="{ props: input }">
              <input
                v-bind="input"
                class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
              />
            </template>
          </CommandInput>
        </div>
        <CommandList class="min-h-0 p-1 outline-none">
          <CommandItem v-for="page in pages" :key="page" :value="page">
            <template #render="{ props: item, state: command }">
              <a
                v-bind="item"
                :href="`#${page.toLowerCase()}`"
                class="group relative flex min-h-7 cursor-default items-center justify-between gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none data-highlighted:bg-muted data-highlighted:text-foreground data-disabled:pointer-events-none data-disabled:opacity-50 no-underline"
              >
                {{ page }}
                <CornerDownLeft
                  aria-hidden="true"
                  v-if="command.highlighted"
                  class="pointer-events-none block size-4 shrink-0 text-muted-foreground"
                />
              </a>
            </template>
          </CommandItem>
        </CommandList>
      </div>
    </template>
  </Command>
</template>
