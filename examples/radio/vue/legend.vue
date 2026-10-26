<script setup lang="ts">
import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/vue/radio"

const plans = [
  { value: "monthly", label: "Monthly", price: "$9.99/month" },
  { value: "yearly", label: "Yearly", price: "$99.99/year" },
  { value: "lifetime", label: "Lifetime", price: "$299.99" },
]
import { useId } from "vue"

const id = useId()
</script>

<template>
  <fieldset class="flex w-full max-w-sm flex-col gap-3">
    <legend :id="`${id}-subscription-legend`" class="mb-1.5 text-sm font-medium">Subscription plan</legend>
    <p :id="`${id}-subscription-hint`" class="text-sm text-muted-foreground">
      Yearly and lifetime plans offer significant savings.
    </p>
    <RadioGroup
      class="flex flex-col gap-3"
      default-value="monthly"
      :aria-labelledby="`${id}-subscription-legend`"
      :aria-describedby="`${id}-subscription-hint`"
    >
      <label v-for="plan in plans" :key="plan.value" class="flex w-fit items-center gap-3 text-sm">
        <Radio
          class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
          :value="plan.value"
        >
          <RadioIndicator class="size-2 rounded-full bg-primary-foreground" />
        </Radio>
        {{ plan.label }} <span class="text-muted-foreground">{{ plan.price }}</span>
      </label>
    </RadioGroup>
  </fieldset>
</template>
