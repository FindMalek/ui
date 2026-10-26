<script lang="ts">
  import { createRadioGroupController, Radio, RadioGroup, RadioIndicator } from "@ui-sdk/svelte/radio"

  const plans = [
    { value: "starter", label: "Starter" },
    { value: "pro", label: "Pro" },
    { value: "team", label: "Team" },
  ]

  const planGroup = createRadioGroupController()
  let value = $state<string | null>("pro")
  let reason = $state("")

  function onValueChange(_: string | null, details: { reason: string }) {
    reason = details.reason
  }
</script>

<div class="flex w-full max-w-sm flex-col items-start gap-4">
  <RadioGroup
    bind:value
    class="flex flex-col gap-3"
    aria-label="Plan"
    controller={planGroup}
    {onValueChange}
  >
    {#each plans as plan (plan.value)}
      <label class="flex w-fit items-center gap-3 text-sm font-medium">
        <Radio
          class="relative flex size-4 shrink-0 cursor-default items-center justify-center rounded-2xl border border-transparent bg-input/90 outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:bg-primary data-checked:text-primary-foreground data-disabled:cursor-default data-disabled:opacity-50 motion-reduce:transition-none"
          value={plan.value}
        >
          <RadioIndicator class="size-2 rounded-full bg-primary-foreground" />
        </Radio>
        {plan.label}
      </label>
    {/each}
  </RadioGroup>
  <button
    class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors not-disabled:hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 enabled:active:translate-y-px motion-reduce:transform-none motion-reduce:transition-none"
    type="button"
    onclick={() => planGroup.setValue("team")}
  >
    Choose Team
  </button>
  <div class="flex flex-col gap-2">
    <output class="text-sm text-muted-foreground">
      Value: {value ?? "none"}{reason ? `, last change: ${reason}` : ""}
    </output>
  </div>
</div>
