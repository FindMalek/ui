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

</script>

<Field class="flex flex-col gap-2">
  <FieldLabel class="text-sm leading-none font-medium">Temperature</FieldLabel>
  <NumberInput defaultValue={-2} min={-20} max={40} format={{ style: 'unit', unit: 'celsius' }}>
    <NumberInputGroup
      class="flex h-8 w-40 items-center gap-0.5 rounded-2xl border border-transparent bg-input/50 px-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30"
    >
      <NumberInputDecrement aria-label="Colder">
        {#snippet render({ props, state })}
          <button
            {...props}
            title={state.atBound ? 'As cold as it goes' : 'Colder'}
            class="flex size-6 shrink-0 items-center justify-center rounded-xl text-muted-foreground outline-none select-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-muted/50"
          >
            <Minus class="size-4" />
          </button>
        {/snippet}
      </NumberInputDecrement>
      <NumberInputControl>
        {#snippet render({ props, state })}
          <input
            {...props}
            class={[
              'h-full w-full min-w-0 bg-transparent px-1 text-center text-base font-medium tabular-nums outline-none md:text-sm',
              state.value !== null && state.value < 0 ? 'text-muted-foreground' : 'text-foreground',
            ]}
          />
        {/snippet}
      </NumberInputControl>
      <NumberInputIncrement
        aria-label="Warmer"
        class="flex h-6 min-w-6 shrink-0 items-center justify-center rounded-xl text-muted-foreground outline-none select-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/30 data-disabled:pointer-events-none data-disabled:opacity-50 dark:hover:bg-muted/50"
      >
        {#snippet children(state)}
          {#if state.atBound}
            <span class="text-xs">Max</span>
          {:else}
            <Plus class="size-4" />
          {/if}
        {/snippet}
      </NumberInputIncrement>
    </NumberInputGroup>
  </NumberInput>
</Field>
