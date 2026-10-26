<script setup lang="ts">
import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/vue/radio"

const priorities = [
  { value: "low", label: "Low" },
  { value: "medium", label: "Medium" },
  { value: "high", label: "High" },
]
</script>

<template>
  <RadioGroup class="flex flex-col gap-3" default-value="low" :loop="false" aria-label="Priority">
    <label
      v-for="priority in priorities"
      :key="priority.value"
      class="flex w-fit items-center gap-3 text-sm font-medium"
    >
      <Radio
        class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
        :value="priority.value"
      >
        <RadioIndicator class="size-2 rounded-full bg-primary-foreground" />
      </Radio>
      {{ priority.label }}
    </label>
  </RadioGroup>
</template>
