<script lang="ts">
  import { FieldLegend, FieldSet } from "@ui-sdk/svelte/field"
  import { Radio, RadioGroup, RadioIndicator } from "@ui-sdk/svelte/radio"

  const plans = [
    { value: "monthly", label: "Monthly", price: "$12 a month" },
    { value: "yearly", label: "Yearly", price: "$120 a year" },
  ]
</script>

<FieldSet class="flex w-full max-w-sm min-w-0 flex-col gap-3 text-foreground m-0 min-w-0 border-0 p-0">
  <FieldLegend class="m-0 p-0 text-base font-medium data-disabled:opacity-50">
    {#snippet render({ props })}
      <div {...props}>Billing period</div>
    {/snippet}
  </FieldLegend>
  <RadioGroup name="period" defaultValue="monthly" class="flex min-w-0 flex-col gap-3 text-foreground">
    {#each plans as plan (plan.value)}
      <label
        class="flex cursor-default items-center justify-between gap-3 rounded-2xl border border-border p-3 text-sm hover:bg-input/40 has-data-checked:bg-input/30"
      >
        <span class="flex items-center gap-3">
          <Radio
            value={plan.value}
            class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
          >
            <RadioIndicator class="size-2 rounded-full bg-primary-foreground" />
          </Radio>
          {plan.label}
        </span>
        <span class="text-muted-foreground">{plan.price}</span>
      </label>
    {/each}
  </RadioGroup>
</FieldSet>
