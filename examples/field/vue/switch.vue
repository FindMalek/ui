<script setup lang="ts">
import { Field, FieldDescription, FieldLabel } from "@ui-sdk/vue/field"
import { Switch, SwitchThumb } from "@ui-sdk/vue/switch"
</script>

<template>
  <Field
    class="flex w-full max-w-md flex-row items-center justify-between gap-4 rounded-2xl border border-border p-4"
  >
    <div class="flex flex-col gap-1.5">
      <FieldLabel class="text-sm leading-snug font-medium">Multi-factor authentication</FieldLabel>
      <FieldDescription class="text-sm text-muted-foreground">
        Enable multi-factor authentication. If you don't have a two-factor device, use a one-time code sent to
        your email.
      </FieldDescription>
    </div>
    <Switch
      class="inline-flex h-5 w-8 shrink-0 items-center rounded-full border-2 border-transparent bg-input/90 outline-none transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50"
      name="mfa"
    >
      <SwitchThumb
        class="block size-4 rounded-full bg-background shadow-sm transition-transform data-checked:translate-x-[calc(100%-4px)] rtl:data-checked:-translate-x-[calc(100%-4px)] dark:bg-foreground dark:data-checked:bg-primary-foreground"
      />
    </Switch>
  </Field>
</template>
