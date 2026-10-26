<script setup lang="ts">
import { Eye, EyeOff } from "@lucide/vue"
import { Field, FieldDescription, FieldLabel } from "@ui-sdk/vue/field"
import { PasswordInput, PasswordInputControl, PasswordInputToggle } from "@ui-sdk/vue/password-input"
</script>

<template>
  <div dir="rtl" class="w-full max-w-sm">
    <Field name="password" class="flex w-full flex-col gap-2">
      <FieldLabel class="text-sm leading-none font-medium data-disabled:opacity-50">كلمة المرور</FieldLabel>
      <PasswordInput
        class="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50"
      >
        <PasswordInputControl
          class="h-full min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground md:text-sm"
        />
        <PasswordInputToggle
          v-slot="{ state }"
          aria-label="إظهار كلمة المرور"
          class="inline-flex size-6 shrink-0 items-center justify-center rounded-xl text-muted-foreground outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:text-foreground data-disabled:pointer-events-none dark:hover:bg-muted/50"
        >
          <EyeOff v-if="state.visible" class="size-4" />
          <Eye v-else class="size-4" />
        </PasswordInputToggle>
      </PasswordInput>
      <FieldDescription class="text-sm text-muted-foreground">ثمانية أحرف على الأقل.</FieldDescription>
    </Field>
  </div>
</template>
