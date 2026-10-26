<script setup lang="ts">
import { Field, FieldDescription, FieldGroup, FieldLabel, FieldLegend, FieldSet } from "@ui-sdk/vue/field"
import { Input } from "@ui-sdk/vue/input"
</script>

<template>
  <FieldSet class="flex w-full max-w-sm min-w-0 flex-col gap-6 text-foreground m-0 min-w-0 border-0 p-0">
    <FieldLegend class="mb-3 p-0 text-base font-medium data-disabled:opacity-50">Address</FieldLegend>
    <FieldDescription class="-mt-1.5 text-sm text-muted-foreground">
      We need your address to deliver your order.
    </FieldDescription>
    <FieldGroup class="flex min-w-0 flex-col gap-6">
      <Field name="street" class="flex min-w-0 flex-col gap-3 text-foreground">
        <FieldLabel class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">
          Street address
        </FieldLabel>
        <Input
          autocomplete="street-address"
          class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50"
        />
      </Field>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field name="city" class="flex min-w-0 flex-col gap-3 text-foreground">
          <FieldLabel class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">
            City
          </FieldLabel>
          <Input
            autocomplete="address-level2"
            class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50"
          />
        </Field>
        <Field name="postal-code" class="flex min-w-0 flex-col gap-3 text-foreground">
          <FieldLabel class="text-sm leading-snug font-medium text-foreground data-disabled:opacity-50">
            Postal code
          </FieldLabel>
          <Input
            autocomplete="postal-code"
            class="h-8 w-full min-w-0 rounded-2xl border border-transparent bg-input/50 px-2.5 py-1 text-base text-foreground transition-[color,box-shadow] duration-200 outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-foreground/50 data-invalid:ring-3 data-invalid:ring-foreground/10 motion-reduce:transition-none md:text-sm data-disabled:opacity-50"
          />
        </Field>
      </div>
    </FieldGroup>
  </FieldSet>
</template>
