<script setup lang="ts">
import { Field, FieldDescription, FieldLabel } from "@ui-sdk/vue/field"
import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/vue/radio"

const environments = [
  { value: "kubernetes", title: "Kubernetes", description: "Run GPU workloads on a K8s configured cluster." },
  {
    value: "vm",
    title: "Virtual machine",
    description: "Access a VM configured cluster to run GPU workloads.",
  },
]
</script>

<template>
  <Field class="flex w-full max-w-md flex-col gap-3">
    <FieldLabel class="text-sm leading-snug font-medium">Compute environment</FieldLabel>
    <FieldDescription class="text-sm text-muted-foreground">
      Select the compute environment for your cluster.
    </FieldDescription>
    <RadioGroup class="flex flex-col gap-3" name="environment" default-value="kubernetes">
      <label
        v-for="environment in environments"
        :key="environment.value"
        class="flex cursor-pointer items-start gap-3 rounded-2xl border border-border p-4 transition-colors hover:bg-input/40 has-data-checked:bg-input/30"
      >
        <span class="flex flex-1 flex-col gap-1">
          <span class="text-sm leading-snug font-medium">{{ environment.title }}</span>
          <span class="text-sm text-muted-foreground">{{ environment.description }}</span>
        </span>
        <Radio
          class="mt-0.5 flex size-4 shrink-0 items-center justify-center rounded-full border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-disabled:opacity-50"
          :value="environment.value"
        >
          <RadioIndicator class="size-2 rounded-full bg-primary-foreground" />
        </Radio>
      </label>
    </RadioGroup>
  </Field>
</template>
