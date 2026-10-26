<script lang="ts">
  import { Check } from "@lucide/svelte"
  import { Checkbox, CheckboxGroup, CheckboxIndicator } from "@ui-sdk/svelte/checkbox"

  const days = [
    { value: "mon", label: "Mon" },
    { value: "tue", label: "Tue" },
    { value: "wed", label: "Wed" },
    { value: "thu", label: "Thu" },
    { value: "fri", label: "Fri" },
    { value: "sat", label: "Sat" },
    { value: "sun", label: "Sun" },
  ]
</script>

<div class="flex w-full max-w-md flex-col gap-3">
  <h3 id="horizontal-days" class="text-sm font-medium">Repeat on</h3>
  <CheckboxGroup
    class="flex flex-wrap gap-x-5 gap-y-3"
    aria-labelledby="horizontal-days"
    defaultValue={["mon", "wed", "fri"]}
  >
    {#each days as day (day.value)}
      <label class="flex w-fit items-center gap-3 text-sm">
        <Checkbox
          class="flex size-4 shrink-0 items-center justify-center rounded-[5px] border border-transparent bg-input/90 outline-none transition-shadow focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground data-disabled:opacity-50"
          value={day.value}
        >
          <CheckboxIndicator class="grid place-content-center">
            <Check class="size-3.5" />
          </CheckboxIndicator>
        </Checkbox>
        {day.label}
      </label>
    {/each}
  </CheckboxGroup>
</div>
