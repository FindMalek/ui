<script setup lang="ts">
import { Check } from "@lucide/vue"
import { Listbox, ListboxItem, ListboxItemIndicator } from "@ui-sdk/vue/listbox"
import { ref } from "vue"

const toppings = [
  { value: "basil", label: "Basil" },
  { value: "cheese", label: "Extra cheese" },
  { value: "mushroom", label: "Mushroom" },
  { value: "olive", label: "Olive" },
  { value: "onion", label: "Onion" },
  { value: "pepper", label: "Pepper" },
]

const value = ref<string[]>(["cheese", "onion"])
</script>

<template>
  <div class="flex w-full max-w-64 flex-col gap-3">
    <Listbox
      v-model:value="value"
      multiple
      aria-label="Toppings"
      class="box-border flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none"
    >
      <ListboxItem
        v-for="topping in toppings"
        :key="topping.value"
        :value="topping.value"
        class="flex min-h-7 cursor-default items-center gap-2 rounded-xl px-2 py-1.5 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
      >
        <ListboxItemIndicator
          keep-mounted
          class="pointer-events-none flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 text-transparent data-selected:border-primary data-selected:bg-primary data-selected:text-primary-foreground"
        >
          <Check aria-hidden="true" class="pointer-events-none block size-3.5 shrink-0" />
        </ListboxItemIndicator>
        {{ topping.label }}
      </ListboxItem>
    </Listbox>
    <output class="m-0 block min-h-10 text-sm leading-5 break-words text-muted-foreground"
      >Value: {{ JSON.stringify(value) }}</output
    >
  </div>
</template>
