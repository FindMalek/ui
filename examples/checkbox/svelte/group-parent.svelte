<script lang="ts">
  import { Check, Minus } from "@lucide/svelte"
  import { Checkbox, CheckboxGroup, CheckboxIndicator } from "@ui-sdk/svelte/checkbox"

  const toppings = [
    { value: "cheese", label: "Cheese" },
    { value: "mushrooms", label: "Mushrooms" },
    { value: "olives", label: "Olives" },
    { value: "peppers", label: "Peppers" },
  ]
</script>

<div class="flex w-full max-w-xs flex-col gap-3">
  <h3 id="parent-toppings" class="m-0 text-sm font-medium text-foreground">Toppings</h3>
  <CheckboxGroup
    class="flex flex-col gap-3"
    aria-labelledby="parent-toppings"
    defaultValue={["cheese", "olives"]}
    allValues={toppings.map((topping) => topping.value)}
  >
    <label class="flex w-fit items-center gap-3 text-sm">
      <Checkbox
        class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
        parent
      >
        <CheckboxIndicator class="group grid place-content-center">
          <Check aria-hidden="true" class="size-3.5 group-data-indeterminate:hidden" />
          <Minus aria-hidden="true" class="hidden size-3.5 group-data-indeterminate:block" />
        </CheckboxIndicator>
      </Checkbox>
      Select all
    </label>
    <div class="flex flex-col gap-3 ps-7">
      {#each toppings as topping (topping.value)}
        <label class="flex w-fit items-center gap-3 text-sm">
          <Checkbox
            class="relative flex size-4 shrink-0 cursor-default appearance-none items-center justify-center rounded-[5px] border border-transparent bg-input/90 p-0 text-primary-foreground outline-none transition-shadow after:absolute after:-inset-x-3 after:-inset-y-2 aria-invalid:border-foreground aria-invalid:ring-3 aria-invalid:ring-foreground/20 aria-invalid:aria-checked:border-primary focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 data-checked:border-primary data-checked:bg-primary data-indeterminate:border-primary data-indeterminate:bg-primary data-disabled:opacity-50 motion-reduce:transition-none"
            value={topping.value}
          >
            <CheckboxIndicator class="grid place-content-center">
              <Check aria-hidden="true" class="size-3.5" />
            </CheckboxIndicator>
          </Checkbox>
          {topping.label}
        </label>
      {/each}
    </div>
  </CheckboxGroup>
</div>
