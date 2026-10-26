<script setup lang="ts">
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteGroup,
  AutocompleteGroupLabel,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteLabel,
  AutocompleteList,
  AutocompleteSeparator,
} from "@ui-sdk/vue/autocomplete"

const fruitGroups = [
  { label: "Tree fruits", items: ["Apple", "Apricot", "Cherry", "Lemon", "Peach", "Pear"] },
  { label: "Berries", items: ["Blackberry", "Blueberry", "Grape", "Strawberry"] },
  { label: "Tropical", items: ["Avocado", "Banana", "Mango", "Pineapple"] },
]
</script>

<template>
  <Autocomplete>
    <div class="flex w-64 max-w-full flex-col gap-2">
      <AutocompleteLabel class="text-sm leading-none font-medium">Fruit</AutocompleteLabel>
      <AutocompleteInput
        placeholder="e.g. Pear"
        class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
      />
    </div>
    <AutocompleteContent
      class="max-h-[min(18rem,var(--available-height))] scroll-py-1 overflow-x-hidden overflow-y-auto box-border w-(--anchor-width) min-w-36 rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none origin-(--transform-origin) transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0"
    >
      <AutocompleteEmpty class="m-0 py-2 text-center text-sm leading-5 text-muted-foreground empty:hidden"
        >No fruits found.</AutocompleteEmpty
      >
      <AutocompleteList>
        <template v-for="(group, index) in fruitGroups" :key="group.label">
          <AutocompleteSeparator v-if="index > 0" class="pointer-events-none -mx-1 my-1 h-px bg-border" />
          <AutocompleteGroup>
            <AutocompleteGroupLabel class="px-2 py-1 text-xs leading-4 text-muted-foreground">{{
              group.label
            }}</AutocompleteGroupLabel>
            <AutocompleteItem
              v-for="fruit in group.items"
              :key="fruit"
              :value="fruit"
              class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2"
              >{{ fruit }}</AutocompleteItem
            >
          </AutocompleteGroup>
        </template>
      </AutocompleteList>
    </AutocompleteContent>
  </Autocomplete>
</template>
