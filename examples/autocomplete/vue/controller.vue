<script setup lang="ts">
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteLabel,
  AutocompleteList,
  createAutocompleteController,
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

const fruit = createAutocompleteController()
</script>

<template>
  <div class="flex w-64 flex-col gap-3">
    <div class="flex flex-wrap gap-2">
      <button
        type="button"
        class="inline-flex h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px dark:bg-transparent dark:hover:bg-input/30"
        @click="fruit.open()"
      >
        Open
      </button>
      <button
        type="button"
        class="inline-flex h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px dark:bg-transparent dark:hover:bg-input/30"
        @click="fruit.setValue('Pea')"
      >
        Type “Pea”
      </button>
      <button
        type="button"
        class="inline-flex h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px dark:bg-transparent dark:hover:bg-input/30"
        @click="fruit.clear()"
      >
        Clear
      </button>
      <button
        type="button"
        class="inline-flex h-7 shrink-0 items-center justify-center gap-1 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm font-medium whitespace-nowrap outline-none select-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px dark:bg-transparent dark:hover:bg-input/30"
        @click="fruit.focus()"
      >
        Focus
      </button>
    </div>
    <Autocomplete :controller="fruit">
      <AutocompleteLabel class="text-sm leading-none font-medium">Fruit</AutocompleteLabel>
      <AutocompleteInput
        class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base outline-none transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:opacity-50 md:text-sm"
      />
      <AutocompleteContent
        class="max-h-[min(18rem,var(--available-height))] w-(--anchor-width) min-w-36 origin-(--transform-origin) scroll-py-1 overflow-y-auto rounded-2xl bg-popover p-1 text-sm text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0 dark:ring-foreground/10"
      >
        <AutocompleteList>
          <AutocompleteItem
            v-for="item in fruits"
            :key="item"
            :value="item"
            class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
            >{{ item }}</AutocompleteItem
          >
        </AutocompleteList>
      </AutocompleteContent>
    </Autocomplete>
  </div>
</template>
