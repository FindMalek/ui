<script lang="ts">
  import { Minus, Plus } from "@lucide/svelte"
  import {
    NumberInput,
    NumberInputDecrement,
    NumberInputGroup,
    NumberInputIncrement,
    NumberInputControl,
  } from "@ui-sdk/svelte/number-input"

</script>

<NumberInput defaultValue={1} min={0}>
  <NumberInputGroup
    class="flex h-8 w-40 items-center gap-0.5 rounded-2xl border border-transparent bg-input/50 px-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30"
  >
    <NumberInputDecrement
      aria-label="Decrease"
      class="flex size-6 shrink-0 items-center justify-center rounded-xl text-muted-foreground outline-none select-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-muted/50"
    >
      <Minus class="size-4" />
    </NumberInputDecrement>
    <NumberInputControl
      aria-label="Quantity"
      class="h-full w-full min-w-0 bg-transparent px-1 text-center text-base tabular-nums outline-none data-disabled:opacity-50 md:text-sm"
    />
    <NumberInputIncrement
      aria-label="Increase"
      class="flex size-6 shrink-0 items-center justify-center rounded-xl text-muted-foreground outline-none select-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-muted/50"
    >
      <Plus class="size-4" />
    </NumberInputIncrement>
  </NumberInputGroup>
</NumberInput>
