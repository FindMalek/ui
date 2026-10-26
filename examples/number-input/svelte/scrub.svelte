<script lang="ts">
  import { MoveHorizontal, MoveVertical } from "@lucide/svelte"
  import { Field, FieldLabel } from "@ui-sdk/svelte/field"
  import {
    NumberInput,
    NumberInputGroup,
    NumberInputControl,
    NumberInputScrubArea,
    NumberInputScrubAreaCursor,
  } from "@ui-sdk/svelte/number-input"

</script>

<div class="flex flex-wrap gap-6">
  <Field class="flex items-center gap-2">
    <NumberInput defaultValue={320} min={0} class="flex items-center gap-2">
      <NumberInputScrubArea
        pixelsPerStep={2}
        class="cursor-ew-resize text-muted-foreground select-none data-scrubbing:text-foreground"
      >
        <FieldLabel class="cursor-ew-resize text-sm leading-none font-medium">Width</FieldLabel>
        <NumberInputScrubAreaCursor class="z-50 -mt-2.5 -ml-2.5 text-foreground drop-shadow-sm">
          <MoveHorizontal aria-hidden="true" class="size-5" />
        </NumberInputScrubAreaCursor>
      </NumberInputScrubArea>
      <NumberInputGroup
        class="flex h-8 w-20 items-center gap-0.5 rounded-2xl border border-transparent bg-input/50 px-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 motion-reduce:transition-none data-scrubbing:border-ring data-scrubbing:ring-3 data-scrubbing:ring-ring/30"
      >
        <NumberInputControl
          class="h-full w-full min-w-0 border-0 bg-transparent px-1 py-0 text-center text-base text-foreground tabular-nums outline-none data-disabled:opacity-50 md:text-sm"
        />
      </NumberInputGroup>
    </NumberInput>
  </Field>
  <Field class="flex items-center gap-2">
    <NumberInput defaultValue={240} min={0} class="flex items-center gap-2">
      <NumberInputScrubArea
        orientation="vertical"
        pixelsPerStep={2}
        class="cursor-ns-resize text-muted-foreground select-none data-scrubbing:text-foreground"
      >
        <FieldLabel class="cursor-ns-resize text-sm leading-none font-medium">Height</FieldLabel>
        <NumberInputScrubAreaCursor class="z-50 -mt-2.5 -ml-2.5 text-foreground drop-shadow-sm">
          <MoveVertical aria-hidden="true" class="size-5" />
        </NumberInputScrubAreaCursor>
      </NumberInputScrubArea>
      <NumberInputGroup
        class="flex h-8 w-20 items-center gap-0.5 rounded-2xl border border-transparent bg-input/50 px-1 transition-[color,box-shadow] duration-200 has-[input:focus-visible]:border-ring has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-ring/30 motion-reduce:transition-none data-scrubbing:border-ring data-scrubbing:ring-3 data-scrubbing:ring-ring/30"
      >
        <NumberInputControl
          class="h-full w-full min-w-0 border-0 bg-transparent px-1 py-0 text-center text-base text-foreground tabular-nums outline-none data-disabled:opacity-50 md:text-sm"
        />
      </NumberInputGroup>
    </NumberInput>
  </Field>
</div>
