<script setup lang="ts">
import { ChevronDown, X } from "@lucide/vue"
import {
  Autocomplete,
  AutocompleteClear,
  AutocompleteContent,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteLabel,
  AutocompleteList,
  AutocompleteTrigger,
} from "@ui-sdk/vue/autocomplete"

const fruits = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Blackberry",
  "Blueberry",
  "Cherry",
  "Grape",
  "Lemon",
  "Mango",
  "Orange",
  "Peach",
  "Pear",
  "Pineapple",
  "Strawberry",
]
</script>

<template>
  <Autocomplete default-value="Mango">
    <div class="flex w-64 max-w-full flex-col gap-2">
      <AutocompleteLabel class="text-sm leading-none font-medium">Fruit</AutocompleteLabel>
      <div class="relative">
        <AutocompleteInput
          class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-14 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
        />
        <div class="absolute end-1 top-1/2 flex -translate-y-1/2 items-center">
          <AutocompleteClear
            aria-label="Clear"
            class="group inline-flex size-6 cursor-default items-center justify-center rounded-xl border border-transparent bg-transparent p-0 text-muted-foreground outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50"
          >
            <X aria-hidden="true" class="pointer-events-none block size-4 shrink-0" />
          </AutocompleteClear>
          <AutocompleteTrigger
            aria-label="Show fruits"
            class="group inline-flex size-6 cursor-default items-center justify-center rounded-xl border border-transparent bg-transparent p-0 text-muted-foreground outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-open:bg-muted data-disabled:pointer-events-none data-disabled:opacity-50"
          >
            <ChevronDown
              aria-hidden="true"
              class="pointer-events-none block size-4 shrink-0 transition-transform group-data-open:rotate-180"
            />
          </AutocompleteTrigger>
        </div>
      </div>
    </div>
    <AutocompleteContent
      class="max-h-[min(18rem,var(--available-height))] scroll-py-1 overflow-x-hidden overflow-y-auto box-border w-(--anchor-width) min-w-36 rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none origin-(--transform-origin) transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0"
    >
      <AutocompleteList>
        <AutocompleteItem
          v-for="fruit in fruits"
          :key="fruit"
          :value="fruit"
          class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2"
          >{{ fruit }}</AutocompleteItem
        >
      </AutocompleteList>
    </AutocompleteContent>
  </Autocomplete>
</template>
