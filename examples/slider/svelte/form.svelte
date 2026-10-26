<script lang="ts">
  import { Field, FieldLabel } from "@ui-sdk/svelte/field"
  import {
    Slider,
    SliderControl,
    SliderIndicator,
    SliderThumb,
    SliderTrack,
    SliderValue,
  } from "@ui-sdk/svelte/slider"

  const formId = $props.id()
  let submitted = $state("")

  function onSubmit(event: SubmitEvent) {
    event.preventDefault()
    const data = [...new FormData(event.currentTarget as HTMLFormElement)].map(
      ([name, value]) => `${name}=${value}`,
    )
    submitted = data.join(", ")
  }
</script>

<div class="flex w-full max-w-xs flex-col gap-4">
  <form
    id={formId}
    class="flex flex-col gap-4"
    onsubmit={onSubmit}
    onreset={() => (submitted = "")}
  >
    <Field>
      <Slider
        name="price"
        defaultValue={[200, 800]}
        max={1000}
        step={10}
        class="flex flex-col gap-2"
      >
        <div class="flex items-center justify-between text-sm">
          <FieldLabel class="font-medium">Price</FieldLabel>
          <SliderValue class="text-muted-foreground tabular-nums" />
        </div>
        <SliderControl class="flex w-full items-center py-2 select-none data-disabled:opacity-50">
          <SliderTrack class="h-1 w-full rounded-2xl bg-input/90">
            <SliderIndicator class="rounded-2xl bg-primary" />
            <SliderThumb
              index={0}
              aria-label="Minimum price"
              class="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"
            />
            <SliderThumb
              index={1}
              aria-label="Maximum price"
              class="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"
            />
          </SliderTrack>
        </SliderControl>
      </Slider>
    </Field>
    <Field>
      <Slider
        name="rating"
        defaultValue={3}
        min={1}
        max={5}
        class="flex flex-col gap-2"
      >
        <div class="flex items-center justify-between text-sm">
          <FieldLabel class="font-medium">Minimum rating</FieldLabel>
          <SliderValue class="text-muted-foreground tabular-nums" />
        </div>
        <SliderControl class="flex w-full items-center py-2 select-none data-disabled:opacity-50">
          <SliderTrack class="h-1 w-full rounded-2xl bg-input/90">
            <SliderIndicator class="rounded-2xl bg-primary" />
            <SliderThumb
              class="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"
            />
          </SliderTrack>
        </SliderControl>
      </Slider>
    </Field>
    <div class="flex gap-2">
      <button
        type="submit"
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
      >
        Save
      </button>
      <button
        type="reset"
        class="inline-flex h-8 shrink-0 cursor-default items-center justify-center gap-1.5 rounded-2xl border border-transparent bg-secondary px-3 text-sm font-medium whitespace-nowrap text-secondary-foreground outline-none select-none transition-colors hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30 active:translate-y-px motion-reduce:transition-none motion-reduce:transform-none"
      >
        Reset
      </button>
    </div>
  </form>
  <Field class="border-t border-border pt-4">
    <Slider
      name="distance"
      form={formId}
      defaultValue={25}
      max={100}
      step={5}
      format={{ style: "unit", unit: "kilometer" }}
      class="flex flex-col gap-2"
    >
      <div class="flex items-center justify-between text-sm">
        <FieldLabel class="font-medium">Distance</FieldLabel>
        <SliderValue class="text-muted-foreground tabular-nums" />
      </div>
      <SliderControl class="flex w-full items-center py-2 select-none data-disabled:opacity-50">
        <SliderTrack class="h-1 w-full rounded-2xl bg-input/90">
          <SliderIndicator class="rounded-2xl bg-primary" />
          <SliderThumb
            class="block size-4 shrink-0 cursor-default rounded-2xl bg-white shadow-md ring-1 ring-black/10 transition-[color,box-shadow] duration-200 not-data-disabled:hover:ring-4 not-data-disabled:hover:ring-ring/30 has-focus-visible:ring-4 has-focus-visible:ring-ring/30 data-dragging:ring-4 data-dragging:ring-ring/30 motion-reduce:transition-none"
          />
        </SliderTrack>
      </SliderControl>
    </Slider>
  </Field>
  {#if submitted}
    <output class="text-sm text-muted-foreground">Submitted: {submitted}</output>
  {/if}
</div>
