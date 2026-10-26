<script setup lang="ts">
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteLabel,
  AutocompleteList,
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
  <Autocomplete presentation="sheet">
    <div class="flex w-64 max-w-full flex-col gap-2">
      <AutocompleteLabel class="text-sm leading-none font-medium">Favorite fruit</AutocompleteLabel>
      <AutocompleteInput
        placeholder="e.g. Mango"
        class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
      />
    </div>
    <AutocompleteContent
      class="group data-[presentation=popover]:max-h-[min(18rem,var(--available-height))] data-[presentation=popover]:scroll-py-1 data-[presentation=popover]:overflow-x-hidden data-[presentation=popover]:overflow-y-auto data-[presentation=popover]:box-border data-[presentation=popover]:w-(--anchor-width) data-[presentation=popover]:min-w-36 data-[presentation=popover]:rounded-2xl data-[presentation=popover]:border-0 data-[presentation=popover]:bg-popover data-[presentation=popover]:p-1 data-[presentation=popover]:text-sm data-[presentation=popover]:leading-5 data-[presentation=popover]:text-popover-foreground data-[presentation=popover]:shadow-lg data-[presentation=popover]:ring-1 data-[presentation=popover]:ring-foreground/5 data-[presentation=popover]:outline-none data-[presentation=popover]:origin-(--transform-origin) data-[presentation=popover]:transition-[opacity,scale] data-[presentation=popover]:duration-100 data-[presentation=popover]:data-starting-style:scale-95 data-[presentation=popover]:data-starting-style:opacity-0 data-[presentation=popover]:data-ending-style:scale-95 data-[presentation=popover]:data-ending-style:opacity-0 data-[presentation=sheet]:box-border data-[presentation=sheet]:h-[85dvh] data-[presentation=sheet]:overflow-y-auto data-[presentation=sheet]:scroll-pt-12 data-[presentation=sheet]:rounded-t-3xl data-[presentation=sheet]:border-0 data-[presentation=sheet]:bg-popover data-[presentation=sheet]:px-2 data-[presentation=sheet]:pt-2 data-[presentation=sheet]:pb-[max(env(safe-area-inset-bottom),0.75rem)] data-[presentation=sheet]:text-base data-[presentation=sheet]:leading-6 data-[presentation=sheet]:text-popover-foreground data-[presentation=sheet]:ring-1 data-[presentation=sheet]:ring-foreground/5 data-[presentation=sheet]:outline-none data-[presentation=sheet]:[--sheet-backdrop:rgb(0_0_0/0.3)] data-[presentation=sheet]:*:data-[slot=autocomplete-header]:sticky data-[presentation=sheet]:*:data-[slot=autocomplete-header]:top-0 data-[presentation=sheet]:*:data-[slot=autocomplete-header]:z-10 data-[presentation=sheet]:*:data-[slot=autocomplete-header]:bg-popover data-[presentation=sheet]:*:data-[slot=autocomplete-header]:pt-1 data-[presentation=sheet]:*:data-[slot=autocomplete-header]:pb-2"
    >
      <AutocompleteEmpty class="m-0 py-2 text-center text-sm leading-5 text-muted-foreground empty:hidden"
        >No fruits found.</AutocompleteEmpty
      >
      <AutocompleteList>
        <AutocompleteItem
          v-for="fruit in fruits"
          :key="fruit"
          :value="fruit"
          class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 px-2 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2 group-data-[presentation=sheet]:py-3"
          >{{ fruit }}</AutocompleteItem
        >
      </AutocompleteList>
    </AutocompleteContent>
  </Autocomplete>
</template>
