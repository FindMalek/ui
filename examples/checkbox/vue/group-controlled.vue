<script setup lang="ts">
import { Check } from "@lucide/vue"
import type { ChangeDetails } from "@ui-sdk/core"
import { createCheckboxGroupController } from "@ui-sdk/core/checkbox"
import { Checkbox, CheckboxGroup, CheckboxIndicator } from "@ui-sdk/vue/checkbox"
import { ref } from "vue"

const days = [
  { value: "mon", label: "Mon" },
  { value: "tue", label: "Tue" },
  { value: "wed", label: "Wed" },
  { value: "thu", label: "Thu" },
  { value: "fri", label: "Fri" },
  { value: "sat", label: "Sat" },
  { value: "sun", label: "Sun" },
]

const weekdays = ["mon", "tue", "wed", "thu", "fri"]

const schedule = createCheckboxGroupController()

const value = ref(["mon", "tue"])
const reason = ref("")

function onValueChange(_: string[], details: ChangeDetails) {
  reason.value = details.reason
}
</script>

<template>
  <div class="flex w-full max-w-md flex-col gap-3">
    <h3 id="controlled-days" class="m-0 text-sm font-medium text-foreground">Working days</h3>
    <CheckboxGroup
      v-model:value="value"
      class="flex flex-wrap gap-x-5 gap-y-3"
      aria-labelledby="controlled-days"
      :controller="schedule"
      @value-change="onValueChange"
    >
      <label v-for="day in days" :key="day.value" class="flex w-fit items-center gap-3 text-sm">
        <Checkbox
          class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
          :value="day.value"
        >
          <CheckboxIndicator class="grid place-content-center">
            <Check aria-hidden="true" class="size-3.5" />
          </CheckboxIndicator>
        </Checkbox>
        {{ day.label }}
      </label>
    </CheckboxGroup>
    <div class="mt-1 flex flex-wrap gap-2">
      <button
        type="button"
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
        @click="schedule.setValue(weekdays)"
      >
        Select weekdays
      </button>
      <button
        type="button"
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-border bg-background px-3 text-sm font-medium whitespace-nowrap text-foreground outline-none select-none transition-colors hover:bg-muted focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
        @click="schedule.setValue([])"
      >
        Clear
      </button>
    </div>

    <output class="block min-h-5 text-sm text-muted-foreground"
      >Value: {{ JSON.stringify(value) }}{{ reason && `, last change: ${reason}` }}</output
    >
  </div>
</template>
