<script setup lang="ts">
import { Eye, EyeOff } from "@lucide/vue"
import { Field, FieldLabel } from "@ui-sdk/vue/field"
import { PasswordInput, PasswordInputControl, PasswordInputToggle } from "@ui-sdk/vue/password-input"
import { computed, ref } from "vue"

const value = ref("")

const score = computed(
  () =>
    [
      value.value.length >= 8,
      value.value.length >= 12,
      /[a-z]/.test(value.value) && /[A-Z]/.test(value.value),
      /\d/.test(value.value) && /[^a-zA-Z\d]/.test(value.value),
    ].filter(Boolean).length,
)
</script>

<template>
  <Field name="new-password" class="flex w-full max-w-sm flex-col gap-2">
    <FieldLabel class="text-sm leading-none font-medium data-disabled:opacity-50">New password</FieldLabel>
    <PasswordInput
      v-model:value="value"
      auto-complete="new-password"
      class="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50"
    >
      <PasswordInputControl
        class="h-full min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-muted-foreground md:text-sm"
      />
      <PasswordInputToggle
        v-slot="{ state }"
        aria-label="Show password"
        class="inline-flex size-6 shrink-0 items-center justify-center rounded-xl text-muted-foreground outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 aria-pressed:text-foreground data-disabled:pointer-events-none dark:hover:bg-muted/50"
      >
        <EyeOff v-if="state.visible" class="size-4" />
        <Eye v-else class="size-4" />
      </PasswordInputToggle>
    </PasswordInput>
    <div aria-hidden="true" class="flex gap-1">
      <div
        v-for="level in [1, 2, 3, 4]"
        :key="level"
        :class="score >= level ? 'h-1 flex-1 rounded-full bg-primary' : 'h-1 flex-1 rounded-full bg-muted'"
      />
    </div>
    <output class="text-sm text-muted-foreground">
      {{
        value
          ? `Strength: ${["Weak", "Weak", "Fair", "Good", "Strong"][score]} (${value.length} characters)`
          : "Type a password to rate it."
      }}
    </output>
  </Field>
</template>
