<script setup lang="ts">
import { Eye, EyeOff, Lock } from "@lucide/vue"
import { Field, FieldLabel } from "@ui-sdk/vue/field"
import { PasswordInput, PasswordInputControl, PasswordInputToggle } from "@ui-sdk/vue/password-input"
</script>

<template>
  <Field name="password" class="group flex w-full max-w-sm flex-col gap-2 text-foreground">
    <FieldLabel class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50"
      >Password</FieldLabel
    >
    <PasswordInput
      v-slot="{ state }"
      class="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-1 text-sm text-muted-foreground transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50 motion-reduce:transition-none"
    >
      <PasswordInputControl
        class="h-full min-w-0 flex-1 border-0 bg-transparent p-0 text-base text-foreground outline-none placeholder:text-muted-foreground md:text-sm"
      />
      <span class="inline-flex size-4 shrink-0"
        ><Lock aria-hidden="true" v-if="state.capsLock" class="size-4 shrink-0 text-muted-foreground"
      /></span>
      <PasswordInputToggle
        v-slot="{ state: toggle }"
        aria-label="Show password"
        class="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none aria-pressed:text-foreground data-disabled:pointer-events-none"
      >
        <EyeOff aria-hidden="true" v-if="toggle.visible" class="size-4 shrink-0" />
        <Eye aria-hidden="true" v-else class="size-4 shrink-0" />
      </PasswordInputToggle>
    </PasswordInput>
    <p class="invisible min-h-5 text-sm text-muted-foreground group-has-data-capslock:visible">
      Caps Lock is on.
    </p>
  </Field>
</template>
