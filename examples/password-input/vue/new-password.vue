<script setup lang="ts">
import { Check, Eye, EyeOff, X } from "@lucide/vue"
import { Field, FieldLabel } from "@ui-sdk/vue/field"
import { PasswordInput, PasswordInputControl, PasswordInputToggle } from "@ui-sdk/vue/password-input"
import { ref } from "vue"

const rules = [
  { label: "At least 8 characters", test: (password: string) => password.length >= 8 },
  { label: "A number", test: (password: string) => /\d/.test(password) },
  {
    label: "An uppercase and a lowercase letter",
    test: (password: string) => /[a-z]/.test(password) && /[A-Z]/.test(password),
  },
]

const password = ref("")
</script>

<template>
  <Field name="new-password" class="flex w-full max-w-sm flex-col gap-2 text-foreground">
    <FieldLabel class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50"
      >Create a password</FieldLabel
    >
    <PasswordInput
      :value="password"
      auto-complete="new-password"
      class="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-1 text-sm text-muted-foreground transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50 motion-reduce:transition-none"
      @value-change="(value: string) => (password = value)"
    >
      <PasswordInputControl
        class="h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-base text-foreground outline-none placeholder:text-muted-foreground md:text-sm"
      />
      <PasswordInputToggle
        v-slot="{ state }"
        aria-label="Show password"
        class="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none aria-pressed:text-foreground data-disabled:pointer-events-none"
      >
        <EyeOff aria-hidden="true" v-if="state.visible" class="size-4 shrink-0" />
        <Eye aria-hidden="true" v-else class="size-4 shrink-0" />
      </PasswordInputToggle>
    </PasswordInput>
    <ul aria-label="Password requirements" class="flex flex-col gap-1 text-sm">
      <template v-for="rule in rules" :key="rule.label">
        <li v-if="rule.test(password)" class="flex items-center gap-2 text-foreground">
          <Check aria-hidden="true" class="size-4 shrink-0" />
          <span class="sr-only">Done:</span>
          {{ rule.label }}
        </li>
        <li v-else class="flex items-center gap-2 text-muted-foreground">
          <X aria-hidden="true" class="size-4 shrink-0" />
          <span class="sr-only">To do:</span>
          {{ rule.label }}
        </li>
      </template>
    </ul>
  </Field>
</template>
