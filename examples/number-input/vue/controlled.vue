<script setup lang="ts">
import { Minus, Plus } from "@lucide/vue"
import type { NumberInputValueChangeReason } from "@ui-sdk/core/number-input"
import { Field, FieldLabel } from "@ui-sdk/vue/field"
import {
  NumberInput,
  NumberInputDecrement,
  NumberInputGroup,
  NumberInputIncrement,
  NumberInputControl,
} from "@ui-sdk/vue/number-input"
import { ref } from "vue"

const value = ref<number | null>(4)
const committed = ref("")

function onCommit(next: number | null, details: { reason: NumberInputValueChangeReason }) {
  committed.value = `${next ?? "empty"}, after ${details.reason}`
}
</script>

<template>
  <div class="flex min-w-0 flex-col gap-3 text-foreground">
    <Field class="flex min-w-0 flex-col gap-2 text-foreground">
      <FieldLabel class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50"
        >Servings</FieldLabel
      >
      <NumberInput v-model:value="value" :min="1" :max="12" @value-commit="onCommit">
        <NumberInputGroup
          class="flex h-8 w-40 items-center gap-0.5 rounded-2xl border border-transparent bg-input/50 px-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 motion-reduce:transition-none"
        >
          <NumberInputDecrement
            aria-label="Decrease"
            class="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none select-none data-disabled:pointer-events-none data-disabled:opacity-50"
          >
            <Minus aria-hidden="true" class="size-4 shrink-0" />
          </NumberInputDecrement>
          <NumberInputControl
            class="h-full w-full min-w-0 border-0 bg-transparent px-1 py-0 text-center text-base text-foreground tabular-nums outline-none data-disabled:opacity-50 md:text-sm"
          />
          <NumberInputIncrement
            aria-label="Increase"
            class="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none select-none data-disabled:pointer-events-none data-disabled:opacity-50"
          >
            <Plus aria-hidden="true" class="size-4 shrink-0" />
          </NumberInputIncrement>
        </NumberInputGroup>
      </NumberInput>
    </Field>
    <div class="flex flex-wrap gap-2">
      <button
        type="button"
        class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none"
        @click="value = 4"
      >
        Reset to 4
      </button>
      <button
        type="button"
        class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none"
        @click="value = null"
      >
        Clear
      </button>
    </div>
    <output class="flex min-h-10 flex-col text-sm text-muted-foreground">
      <span>Value: {{ value ?? "empty" }}</span>
      <span>Committed: {{ committed || "nothing yet" }}</span>
    </output>
  </div>
</template>
