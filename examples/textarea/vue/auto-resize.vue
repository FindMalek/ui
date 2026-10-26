<script setup lang="ts">
import { Field, FieldDescription, FieldLabel } from "@ui-sdk/vue/field"
import { Textarea } from "@ui-sdk/vue/textarea"
</script>

<template>
  <Field name="notes" class="flex w-full max-w-sm flex-col gap-2 text-foreground min-h-64">
    <FieldLabel class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50"
      >Notes</FieldLabel
    >
    <Textarea
      auto-resize
      placeholder="Type a few lines…"
      class="min-h-16 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 resize-none px-2.5 py-2 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm field-sizing-content max-h-48"
    />
    <FieldDescription class="min-h-5 text-sm text-muted-foreground"
      >Grows as you type, then scrolls.</FieldDescription
    >
  </Field>
</template>
