<script setup lang="ts">
import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
} from "@ui-sdk/vue/autocomplete"
import { Field, FieldDescription, FieldError, FieldLabel } from "@ui-sdk/vue/field"
import { ref } from "vue"

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

const submitted = ref("")

function submit(event: Event) {
  const data = [...new FormData(event.currentTarget as HTMLFormElement)].map(
    ([name, value]) => `${name}=${value}`,
  )
  submitted.value = data.join("&")
}
</script>

<template>
  <form id="order" class="flex w-64 max-w-full flex-col gap-4" @submit.prevent="submit">
    <Field class="flex flex-col gap-2">
      <FieldLabel class="text-sm leading-none font-medium">Fruit</FieldLabel>
      <Autocomplete name="fruit" form="order" required default-value="Apple">
        <AutocompleteInput
          class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-8 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5 data-invalid:border-foreground data-invalid:ring-3 data-invalid:ring-foreground/20"
        />
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
      <FieldDescription class="block min-h-10 text-sm leading-5 break-all text-muted-foreground"
        >Any fruit, listed or not.</FieldDescription
      >
      <div class="min-h-5"><FieldError class="m-0 text-sm leading-5 font-medium" /></div>
    </Field>
    <div class="flex flex-wrap gap-2">
      <button
        type="submit"
        class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-primary bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-primary-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-primary/80 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50"
      >
        Submit
      </button>
      <button
        type="reset"
        class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background bg-clip-padding px-3 text-sm leading-5 font-medium whitespace-nowrap text-foreground transition-all select-none outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 hover:bg-muted hover:text-foreground active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50"
      >
        Reset
      </button>
    </div>
    <output class="block min-h-10 text-sm leading-5 break-all text-muted-foreground">{{
      submitted || "Not submitted"
    }}</output>
  </form>
</template>
