<script setup lang="ts">
import { Minus, Plus } from "@lucide/vue"
import { Field, FieldLabel } from "@ui-sdk/vue/field"
import {
  NumberInput,
  NumberInputDecrement,
  NumberInputGroup,
  NumberInputIncrement,
  NumberInputControl,
} from "@ui-sdk/vue/number-input"
import { ref, useId } from "vue"

const submitted = ref("")
const form = useId()

function onSubmit(event: Event) {
  const data = [...new FormData(event.currentTarget as HTMLFormElement)].map(
    ([name, value]) => `${name}=${value}`,
  )
  submitted.value = data.join(", ")
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <form :id="form" class="flex flex-col gap-4" @submit.prevent="onSubmit" @reset="submitted = ''">
      <Field class="flex min-w-0 flex-col gap-2 text-foreground">
        <FieldLabel class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50"
          >Quantity</FieldLabel
        >
        <NumberInput name="quantity" :default-value="2" :min="1">
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
      <Field class="flex min-w-0 flex-col gap-2 text-foreground">
        <FieldLabel class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50"
          >Tip</FieldLabel
        >
        <NumberInput
          name="tip"
          :default-value="1234.5"
          :min="0"
          :step="0.01"
          :format="{ style: 'currency', currency: 'USD' }"
        >
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
          type="submit"
          class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none"
        >
          Save
        </button>
        <button
          type="reset"
          class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none"
        >
          Reset
        </button>
      </div>
    </form>
    <Field class="flex flex-col gap-2 border-t border-border pt-4">
      <FieldLabel class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50"
        >Gift cards</FieldLabel
      >
      <NumberInput name="gift-cards" :form="form" :default-value="0" :min="0">
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
    <output class="min-h-5 text-sm text-muted-foreground">{{
      submitted ? `Submitted: ${submitted}` : ""
    }}</output>
  </div>
</template>
