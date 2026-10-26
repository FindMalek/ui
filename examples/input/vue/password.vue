<script setup lang="ts">
import { Eye, EyeOff } from "@lucide/vue"
import { Field, FieldLabel } from "@ui-sdk/vue/field"
import { Input, InputGroup } from "@ui-sdk/vue/input"
import { ref } from "vue"

const visible = ref(false)
</script>

<template>
  <Field name="password" class="flex w-full max-w-sm flex-col gap-2">
    <FieldLabel
      class="text-sm leading-none font-medium data-disabled:opacity-50 data-invalid:text-destructive"
    >
      Password
    </FieldLabel>
    <InputGroup
      class="flex h-8 w-full min-w-0 items-center gap-2 rounded-2xl border border-transparent bg-input/50 px-2.5 text-sm text-muted-foreground transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 data-disabled:opacity-50"
    >
      <Input
        :type="visible ? 'text' : 'password'"
        autocomplete="current-password"
        class="h-full min-w-0 flex-1 bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground md:text-sm"
      />
      <button
        type="button"
        aria-label="Show password"
        :aria-pressed="visible"
        class="-me-1.5 inline-flex size-6 shrink-0 items-center justify-center rounded-xl outline-none transition-[color,background-color,box-shadow] hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 dark:hover:bg-muted/50"
        @click="visible = !visible"
      >
        <EyeOff v-if="visible" class="size-4" />
        <Eye v-else class="size-4" />
      </button>
    </InputGroup>
  </Field>
</template>
