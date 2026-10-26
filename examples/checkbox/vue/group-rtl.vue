<script setup lang="ts">
import { Check } from "@lucide/vue"
import { Checkbox, CheckboxGroup, CheckboxIndicator } from "@ui-sdk/vue/checkbox"

const toppings = [
  { value: "cheese", label: "جبن" },
  { value: "mushrooms", label: "فطر" },
  { value: "olives", label: "زيتون" },
  { value: "peppers", label: "فلفل" },
]
</script>

<template>
  <div dir="rtl" class="flex w-full max-w-xs flex-col gap-3">
    <h3 id="rtl-toppings" class="text-sm font-medium">الإضافات</h3>
    <CheckboxGroup class="flex flex-col gap-3" aria-labelledby="rtl-toppings" :default-value="['cheese']">
      <label v-for="topping in toppings" :key="topping.value" class="flex w-fit items-center gap-3 text-sm">
        <Checkbox
          class="flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-disabled:opacity-50"
          :value="topping.value"
        >
          <CheckboxIndicator class="grid place-content-center">
            <Check class="size-3.5" />
          </CheckboxIndicator>
        </Checkbox>
        {{ topping.label }}
      </label>
    </CheckboxGroup>
  </div>
</template>
