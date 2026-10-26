<script setup lang="ts">
import { Check } from "@lucide/vue"
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxLabel,
  ComboboxList,
} from "@ui-sdk/vue/combobox"
import { ref } from "vue"

const titles = ["Designer", "Engineer", "Engineering manager", "Product manager", "Researcher"]

const value = ref<string | null>(null)
</script>

<template>
  <div class="flex w-64 max-w-full flex-col gap-3">
    <Combobox v-model:value="value" allow-custom-value>
      <div class="flex flex-col gap-2">
        <ComboboxLabel class="text-sm leading-none font-medium">Job title</ComboboxLabel>
        <ComboboxInput
          placeholder="Type any title"
          class="m-0 box-border h-8 w-full min-w-0 shrink-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base leading-6 text-inherit transition-[color,box-shadow] duration-200 placeholder:text-muted-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm md:leading-5"
        />
      </div>
      <ComboboxContent
        class="max-h-[min(18rem,var(--available-height))] scroll-py-1 overflow-x-hidden overflow-y-auto box-border w-(--anchor-width) min-w-36 rounded-2xl border-0 bg-popover p-1 text-sm leading-5 text-popover-foreground shadow-lg ring-1 ring-foreground/5 outline-none origin-(--transform-origin) transition-[opacity,scale] duration-100 data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0"
      >
        <ComboboxEmpty
          v-slot="{ state }"
          class="m-0 py-2 text-center text-sm leading-5 text-muted-foreground empty:hidden"
        >
          <template v-if="state.empty">Press Enter to use “{{ state.query }}”.</template>
        </ComboboxEmpty>
        <ComboboxList>
          <ComboboxItem
            v-for="title in titles"
            :key="title"
            :value="title"
            class="relative flex min-h-7 w-full cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50 ring-ring/30 ring-inset in-data-[modality=keyboard]:data-highlighted:ring-2"
          >
            {{ title }}
            <ComboboxItemIndicator
              class="pointer-events-none absolute end-2 flex size-4 items-center justify-center"
            >
              <Check aria-hidden="true" class="pointer-events-none block size-4 shrink-0" />
            </ComboboxItemIndicator>
          </ComboboxItem>
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
    <output class="m-0 min-h-5 text-sm leading-5 text-muted-foreground"
      >Value: {{ JSON.stringify(value) }}</output
    >
  </div>
</template>
