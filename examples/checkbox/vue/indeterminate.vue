<script setup lang="ts">
import { Check, Minus } from "@lucide/vue"
import { Checkbox, CheckboxIndicator } from "@ui-sdk/vue/checkbox"
</script>

<template>
  <label class="flex items-center gap-3 text-sm font-medium">
    <Checkbox
      class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
      default-checked="indeterminate"
    >
      <CheckboxIndicator v-slot="{ state }" class="grid place-content-center">
        <Minus aria-hidden="true" v-if="state.indeterminate" class="size-3.5" />
        <Check aria-hidden="true" v-else class="size-3.5" />
      </CheckboxIndicator>
    </Checkbox>
    All notifications
  </label>
</template>
