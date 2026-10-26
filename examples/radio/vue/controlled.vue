<script setup lang="ts">
import type { ChangeDetails } from "@ui-sdk/core"
import { createRadioGroupController } from "@ui-sdk/vue/radio"
import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/vue/radio"
import { ref } from "vue"

const plans = [
  { value: "starter", label: "Starter" },
  { value: "pro", label: "Pro" },
  { value: "team", label: "Team" },
]

const planGroup = createRadioGroupController()
const value = ref<string | null>("pro")
const reason = ref("")

function onValueChange(_: string | null, details: ChangeDetails) {
  reason.value = details.reason
}
</script>

<template>
  <div class="flex w-full max-w-sm flex-col items-start gap-4">
    <RadioGroup
      v-model:value="value"
      class="flex flex-col gap-3"
      aria-label="Plan"
      :controller="planGroup"
      @value-change="onValueChange"
    >
      <label
        v-for="plan in plans"
        :key="plan.value"
        class="flex w-fit items-center gap-3 text-sm font-medium"
      >
        <Radio
          class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
          :value="plan.value"
        >
          <RadioIndicator class="size-2 rounded-full bg-primary-foreground" />
        </Radio>
        {{ plan.label }}
      </label>
    </RadioGroup>
    <button
      class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px motion-reduce:transform-none motion-reduce:transition-none"
      type="button"
      @click="planGroup.setValue('team')"
    >
      Choose Team
    </button>
    <div class="flex flex-col gap-2">
      <output class="text-sm text-muted-foreground"
        >Value: {{ value ?? "none" }}{{ reason && `, last change: ${reason}` }}</output
      >
    </div>
  </div>
</template>
