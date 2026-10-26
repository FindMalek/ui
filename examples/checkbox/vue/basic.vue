<script setup lang="ts">
import { Check } from "@lucide/vue"
import { Checkbox, CheckboxIndicator } from "@ui-sdk/vue/checkbox"
</script>

<template>
  <label class="flex items-center gap-3 text-sm font-medium">
    <Checkbox
      class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
    >
      <CheckboxIndicator class="grid place-content-center">
        <Check aria-hidden="true" class="size-3.5" />
      </CheckboxIndicator>
    </Checkbox>
    Accept terms and conditions
  </label>
</template>
