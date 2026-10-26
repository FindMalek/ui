<script lang="ts">
  import { Minus, Plus } from "@lucide/svelte"
  import { Field, FieldError, FieldLabel } from "@ui-sdk/svelte/field"
  import {
    NumberInput,
    NumberInputDecrement,
    NumberInputGroup,
    NumberInputIncrement,
    NumberInputControl,
  } from "@ui-sdk/svelte/number-input"

  let submitted = $state("")

  function onSubmit(event: Event) {
    submitted = String(new FormData(event.currentTarget as HTMLFormElement).get("age"))
  }
</script>

<form class="flex flex-col gap-4" onsubmit={(event) => { event.preventDefault(); onSubmit(event) }}>
  <Field class="flex min-w-0 flex-col gap-2 text-foreground">
    <FieldLabel class="text-sm leading-none font-medium text-foreground data-disabled:opacity-50">Age</FieldLabel>
    <NumberInput name="age" required min={18} max={120} onValueChange={() => (submitted = '')}>
      <NumberInputGroup
        class="flex h-8 w-40 items-center gap-0.5 rounded-2xl border border-transparent bg-input/50 px-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 motion-reduce:transition-none has-aria-invalid:border-foreground/50 has-aria-invalid:ring-3 has-aria-invalid:ring-foreground/10"
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
    <div class="min-h-5"><FieldError class="min-h-5 text-sm text-foreground" match="valueMissing">Enter your age.</FieldError></div>
  </Field>
  <button
    type="submit"
    class="inline-flex h-8 w-fit shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary bg-clip-padding px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground transition-all outline-none select-none hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:enabled:translate-y-px motion-reduce:transition-none"
  >
    Continue
  </button>
  <output class="min-h-5 text-sm text-muted-foreground">{submitted ? `Submitted: age=${submitted}` : ""}</output>
</form>
