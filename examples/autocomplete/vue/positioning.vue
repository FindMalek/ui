<script setup lang="ts">
import {
  Autocomplete,
  AutocompleteArrow,
  AutocompleteContent,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteLabel,
  AutocompleteList,
} from "@ui-sdk/vue/autocomplete"
import { ref } from "vue"

const fruits = ["Apple", "Apricot", "Avocado", "Banana", "Blackberry", "Blueberry"]

const box = ref<HTMLDivElement | null>(null)
</script>

<template>
  <div ref="box" class="flex w-72 flex-col gap-2 rounded-2xl border border-dashed border-border p-3">
    <Autocomplete modal="pointer" :container="box">
      <AutocompleteLabel class="text-sm leading-none font-medium">Fruit</AutocompleteLabel>
      <AutocompleteInput
        class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm"
      />
      <AutocompleteContent
        side="top"
        align="end"
        :side-offset="10"
        :align-offset="-4"
        :collision-padding="8"
        :anchor="box"
        keep-mounted
        class="max-h-[min(18rem,var(--available-height))] w-56 origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10"
      >
        <AutocompleteArrow
          class="absolute size-2.5 rotate-45 border-e border-b border-foreground/5 bg-popover data-[side=top]:-bottom-[5px] dark:border-foreground/10"
        />
        <AutocompleteList>
          <AutocompleteItem
            v-for="fruit in fruits"
            :key="fruit"
            :value="fruit"
            class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
            >{{ fruit }}</AutocompleteItem
          >
        </AutocompleteList>
      </AutocompleteContent>
    </Autocomplete>
  </div>
</template>
