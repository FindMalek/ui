<script setup lang="ts">
import { FieldLegend, FieldSet } from "@ui-sdk/vue/field"
import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/vue/radio"

const plans = [
  { value: "monthly", label: "Monthly", price: "$12 a month" },
  { value: "yearly", label: "Yearly", price: "$120 a year" },
]
</script>

<template>
  <FieldSet class="flex w-full max-w-sm min-w-0 flex-col gap-3 text-foreground m-0 min-w-0 border-0 p-0">
    <FieldLegend class="m-0 p-0 text-base font-medium data-disabled:opacity-50">
      <template #render="{ props }">
        <div v-bind="props">Billing period</div>
      </template>
    </FieldLegend>
    <RadioGroup name="period" default-value="monthly" class="flex min-w-0 flex-col gap-3 text-foreground">
      <label
        v-for="plan in plans"
        :key="plan.value"
        class="flex cursor-default items-center justify-between gap-3 rounded-2xl border border-border p-3 text-sm hover:bg-input/40 has-data-checked:bg-input/30"
      >
        <span class="flex items-center gap-3">
          <Radio
            :value="plan.value"
            class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
          >
            <RadioIndicator class="size-2 rounded-full bg-primary-foreground" />
          </Radio>
          {{ plan.label }}
        </span>
        <span class="text-muted-foreground">{{ plan.price }}</span>
      </label>
    </RadioGroup>
  </FieldSet>
</template>
