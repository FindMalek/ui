<script lang="ts">
  import { Minus, Plus } from "@lucide/svelte"
  import { Field, FieldLabel } from "@ui-sdk/svelte/field"
  import {
    NumberInput,
    NumberInputDecrement,
    NumberInputGroup,
    NumberInputIncrement,
    NumberInputControl,
  } from "@ui-sdk/svelte/number-input"

  const fields = [
    {
      label: "Price",
      defaultValue: 19.99,
      step: 0.01,
      format: { style: "currency", currency: "USD" },
    },
    { label: "Discount", defaultValue: 0.15, step: 0.01, format: { style: "percent" } },
    { label: "Weight", defaultValue: 2.5, step: 0.1, format: { style: "unit", unit: "kilogram" } },
  ] satisfies { label: string; defaultValue: number; step: number; format: Intl.NumberFormatOptions }[]

</script>

<div class="flex flex-col gap-5">
  {#each fields as field (field.label)}
    <Field class="flex min-w-0 flex-col gap-2 text-foreground">
      <FieldLabel class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">{field.label}</FieldLabel>
      <NumberInput defaultValue={field.defaultValue} step={field.step} format={field.format} min={0}>
        <NumberInputGroup
          class="flex h-8 w-40 items-center gap-0.5 rounded-2xl border border-transparent bg-input/50 px-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 motion-reduce:transition-none"
        >
          <NumberInputDecrement
            aria-label="Decrease"
            class="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none select-none data-disabled:pointer-events-none data-disabled:opacity-50"
          >
            <Minus aria-hidden="true" class="size-4 shrink-0" />
          </NumberInputDecrement>
          <NumberInputControl
            class="h-full w-full min-w-0 border-0 bg-transparent px-1 py-0 text-center text-base text-foreground tabular-nums outline-none data-disabled:opacity-50 md:text-sm"
          />
          <NumberInputIncrement
            aria-label="Increase"
            class="inline-flex size-6 shrink-0 cursor-default items-center justify-center rounded-xl border-0 bg-transparent p-0 text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 motion-reduce:transition-none select-none data-disabled:pointer-events-none data-disabled:opacity-50"
          >
            <Plus aria-hidden="true" class="size-4 shrink-0" />
          </NumberInputIncrement>
        </NumberInputGroup>
      </NumberInput>
    </Field>
  {/each}
</div>
