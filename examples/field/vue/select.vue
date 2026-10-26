<script setup lang="ts">
import { ChevronDown } from "@lucide/vue"
import { Field, FieldControl, FieldDescription, FieldLabel } from "@ui-sdk/vue/field"

const departments = [
  { value: "engineering", label: "Engineering" },
  { value: "design", label: "Design" },
  { value: "marketing", label: "Marketing" },
  { value: "sales", label: "Sales" },
  { value: "support", label: "Customer support" },
]
</script>

<template>
  <Field class="flex w-full max-w-sm min-w-0 flex-col gap-3 text-foreground">
    <FieldLabel class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50"
      >Department</FieldLabel
    >
    <div class="relative">
      <FieldControl
        class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 ps-2.5 pe-8 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm appearance-none data-disabled:opacity-50"
        name="department"
      >
        <template #render="{ props }">
          <select v-bind="props">
            <option value="" disabled selected>Choose department</option>
            <option v-for="department in departments" :key="department.value" :value="department.value">
              {{ department.label }}
            </option>
          </select>
        </template>
      </FieldControl>
      <ChevronDown
        aria-hidden="true"
        class="pointer-events-none absolute end-2.5 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
      />
    </div>
    <FieldDescription class="m-0 text-sm text-muted-foreground">
      Select your department or area of work.
    </FieldDescription>
  </Field>
</template>
