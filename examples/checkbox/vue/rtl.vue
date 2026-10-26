<script setup lang="ts">
import { Check } from "@lucide/vue"
import { Checkbox, CheckboxIndicator } from "@ui-sdk/vue/checkbox"
</script>

<template>
  <div dir="rtl" class="flex flex-col gap-3">
    <label class="flex items-center gap-3 text-sm font-medium">
      <Checkbox
        class="flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-disabled:opacity-50"
      >
        <CheckboxIndicator class="grid place-content-center">
          <Check class="size-3.5" />
        </CheckboxIndicator>
      </Checkbox>
      قبول الشروط والأحكام
    </label>
    <label class="flex items-center gap-3 text-sm font-medium">
      <Checkbox
        class="flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-disabled:opacity-50"
        default-checked
      >
        <CheckboxIndicator class="grid place-content-center">
          <Check class="size-3.5" />
        </CheckboxIndicator>
      </Checkbox>
      تفعيل الإشعارات
    </label>
  </div>
</template>
