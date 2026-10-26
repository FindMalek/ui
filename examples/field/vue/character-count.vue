<script setup lang="ts">
import { Field, FieldControl, FieldDescription, FieldLabel } from "@ui-sdk/vue/field"
import { ref } from "vue"

const limit = 280
const bio = ref("Designer and engineer. I build tools for people who make things on the web.")

function onInput(event: Event) {
  bio.value = (event.target as HTMLTextAreaElement).value
}
</script>

<template>
  <Field class="flex w-full max-w-sm min-w-0 flex-col gap-3 text-foreground">
    <FieldLabel class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50"
      >Bio</FieldLabel
    >
    <FieldControl
      class="h-28 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-2 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm resize-none data-disabled:opacity-50"
      rows="4"
      name="bio"
      :maxlength="limit"
      :value="bio"
      @input="onInput"
    >
      <template #render="{ props }">
        <textarea v-bind="props" />
      </template>
    </FieldControl>
    <FieldDescription class="flex justify-between gap-4 text-sm text-muted-foreground">
      <span>Shown on your public profile.</span>
      <span class="shrink-0 text-foreground tabular-nums"> {{ bio.length }} / {{ limit }} </span>
    </FieldDescription>
  </Field>
</template>
