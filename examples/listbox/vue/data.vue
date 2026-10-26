<script setup lang="ts">
import { Check } from "@lucide/vue"
import { Listbox, ListboxItem, ListboxItemIndicator, type ListData } from "@ui-sdk/vue/listbox"
import { ref } from "vue"

const plans = [
  { value: { id: "hobby", price: 0 }, label: "Hobby" },
  { value: { id: "pro", price: 20 }, label: "Pro" },
  { value: { id: "team", price: 50 }, label: "Team" },
  { value: { id: "enterprise", price: 200 }, label: "Enterprise", disabled: true },
] satisfies ListData<{ id: string; price: number }>

const value = ref<{ id: string; price: number } | null>({ id: "pro", price: 20 })
</script>

<template>
  <div class="flex w-full max-w-64 flex-col gap-3">
    <Listbox
      v-model:value="value"
      :items="plans"
      :item-to-value="(plan: { id: string }) => plan.id"
      :is-item-equal-to-value="(plan: { id: string }, selected: { id: string }) => plan.id === selected.id"
      aria-label="Plan"
      class="box-border flex w-full max-w-64 flex-col gap-0.5 rounded-2xl border border-border bg-background p-1 text-sm leading-5 text-foreground outline-none"
    >
      <ListboxItem
        v-for="plan in plans"
        :key="plan.value.id"
        :value="plan.value"
        :disabled="plan.disabled"
        class="relative flex min-h-7 cursor-default items-center gap-2 rounded-xl py-1.5 ps-2 pe-8 text-sm leading-5 outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/30 focus-visible:ring-inset data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:cursor-not-allowed data-disabled:opacity-50"
      >
        {{ plan.label }}
        <ListboxItemIndicator
          class="pointer-events-none absolute end-2 flex size-4 items-center justify-center"
        >
          <Check aria-hidden="true" class="pointer-events-none block size-4 shrink-0" />
        </ListboxItemIndicator>
      </ListboxItem>
    </Listbox>
    <output class="m-0 block min-h-10 text-sm leading-5 break-words text-muted-foreground">{{
      value ? `${value.id}, $${value.price} a month` : "No plan"
    }}</output>
  </div>
</template>
