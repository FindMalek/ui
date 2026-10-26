<script setup lang="ts">
import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/vue/radio"
import { ref } from "vue"

const methods = [
  { value: "standard", label: "Standard", detail: "Free, 5 to 7 days" },
  { value: "express", label: "Express", detail: "$9, 2 days" },
  { value: "overnight", label: "Overnight", detail: "$24, next day" },
]

const submitted = ref("")

function submit(event: Event) {
  submitted.value = JSON.stringify(Object.fromEntries(new FormData(event.currentTarget as HTMLFormElement)))
}
import { useId } from "vue"

const id = useId()
</script>

<template>
  <div class="flex w-full max-w-sm flex-col gap-4">
    <RadioGroup
      class="flex flex-col gap-3"
      aria-label="Shipping"
      name="shipping"
      :form="`${id}-shipping-form`"
      required
      default-value="standard"
    >
      <label v-for="method in methods" :key="method.value" class="flex w-fit items-center gap-3 text-sm">
        <Radio
          class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
          :value="method.value"
        >
          <RadioIndicator class="size-2 rounded-full bg-primary-foreground" />
        </Radio>
        {{ method.label }} <span class="text-muted-foreground">{{ method.detail }}</span>
      </label>
    </RadioGroup>
    <form :id="`${id}-shipping-form`" class="flex gap-2" @submit.prevent="submit" @reset="submitted = ''">
      <button
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px motion-reduce:transform-none motion-reduce:transition-none"
        type="submit"
      >
        Submit
      </button>
      <button
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px motion-reduce:transform-none motion-reduce:transition-none"
        type="reset"
      >
        Reset
      </button>
    </form>
    <output v-if="submitted" class="text-sm text-muted-foreground">Submitted: {{ submitted }}</output>
  </div>
</template>
